use query_engine_tests::test_suite;

#[test_suite(schema(generic))]
mod metrics {
    use query_engine_tests::ConnectorVersion::{SqlServer, Sqlite};
    use query_engine_tests::*;
    use serde_json::Value;

    #[connector_test(exclude(MongoDB))]
    async fn metrics_are_recorded(runner: Runner) -> TestResult<()> {
        insta::assert_snapshot!(
          run_query!(&runner, r#"mutation { createOneTestModel(data: { id: 1 }) { id }}"#),
          @r###"{"data":{"createOneTestModel":{"id":1}}}"###
        );

        insta::assert_snapshot!(
          run_query!(&runner, r#"mutation { updateOneTestModel(where: { id: 1 }, data: { field: "updated" }) { field } }"#),
          @r###"{"data":{"updateOneTestModel":{"field":"updated"}}}"###
        );

        let json = runner.get_metrics().to_json(Default::default());
        // We cannot assert the full response it will be slightly different per database
        let total_queries = get_counter(&json, "query_total_queries");
        let total_operations = get_counter(&json, "query_total_operations");

        match runner.connector_version() {
            Sqlite => assert_eq!(total_queries, 9),
            SqlServer(_) => assert_eq!(total_queries, 15),
            _ => assert_eq!(total_queries, 11),
        }
        assert_eq!(total_operations, 2);
        Ok(())
    }

    fn get_counter(json: &Value, name: &str) -> u64 {
        let counters = json.get("counters").unwrap().as_array().unwrap();
        let counter = counters
            .into_iter()
            .find(|counter| {
                if counter.get("key").unwrap().as_str() == Some(name) {
                    true
                } else {
                    false
                }
            })
            .unwrap()
            .as_object()
            .unwrap();

        counter.get("value").unwrap().as_u64().unwrap()
    }
}
