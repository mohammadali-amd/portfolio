import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <!--====== Favicon Icon ======--> */}
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        {/* <!--====== Line Icons CSS ======--> */}
        <link rel="stylesheet" href="https://cdn.lineicons.com/4.0/lineicons.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
