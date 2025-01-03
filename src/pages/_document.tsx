import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Yonsei AI Lab - News and Events (RSS)"
          href="/feed.xml"
        />
        <link
          rel="alternate"
          type="application/json"
          title="Yonsei AI Lab - News and Events (JSON)"
          href="/feed.json"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}