import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&family=Preahvihear&display=swap" rel="stylesheet"/>
      <Head >
      <link rel="icon" href="/images/logo.png" />

        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
