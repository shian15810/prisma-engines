(function() {var implementors = {};
implementors["tokio_util"] = [{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"tokio/io/async_buf_read/trait.AsyncBufRead.html\" title=\"trait tokio::io::async_buf_read::AsyncBufRead\">AsyncBufRead</a> for <a class=\"struct\" href=\"tokio_util/compat/struct.Compat.html\" title=\"struct tokio_util::compat::Compat\">Compat</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncBufRead.html\" title=\"trait futures_io::if_std::AsyncBufRead\">AsyncBufRead</a>,&nbsp;</span>","synthetic":false,"types":["tokio_util::compat::Compat"]},{"text":"impl&lt;S, B, E&gt; <a class=\"trait\" href=\"tokio/io/async_buf_read/trait.AsyncBufRead.html\" title=\"trait tokio::io::async_buf_read::AsyncBufRead\">AsyncBufRead</a> for <a class=\"struct\" href=\"tokio_util/io/struct.StreamReader.html\" title=\"struct tokio_util::io::StreamReader\">StreamReader</a>&lt;S, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a>&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/1.58.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;B, E&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"bytes/buf/buf_impl/trait.Buf.html\" title=\"trait bytes::buf::buf_impl::Buf\">Buf</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.58.0/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;,&nbsp;</span>","synthetic":false,"types":["tokio_util::io::stream_reader::StreamReader"]},{"text":"impl&lt;L, R&gt; <a class=\"trait\" href=\"tokio/io/async_buf_read/trait.AsyncBufRead.html\" title=\"trait tokio::io::async_buf_read::AsyncBufRead\">AsyncBufRead</a> for <a class=\"enum\" href=\"tokio_util/either/enum.Either.html\" title=\"enum tokio_util::either::Either\">Either</a>&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"tokio/io/async_buf_read/trait.AsyncBufRead.html\" title=\"trait tokio::io::async_buf_read::AsyncBufRead\">AsyncBufRead</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"tokio/io/async_buf_read/trait.AsyncBufRead.html\" title=\"trait tokio::io::async_buf_read::AsyncBufRead\">AsyncBufRead</a>,&nbsp;</span>","synthetic":false,"types":["tokio_util::either::Either"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()