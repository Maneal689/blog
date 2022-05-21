import {Html, Head, Main, NextScript} from "next/document";

export default function Document() {
  return <Html>
    <Head>
      <link rel="icon" href="/favicon.ico"/>
      <link href="https://unpkg.com/sanitize.css" rel="stylesheet"/>
      <link
        href="https://unpkg.com/sanitize.css/typography.css"
        rel="stylesheet"
      />
      <link href="https://unpkg.com/sanitize.css/forms.css" rel="stylesheet"/>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
        integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
        crossOrigin="anonymous"
      />
    </Head>
    <body>
    <Main/>
    <NextScript/>
    </body>
  </Html>
}