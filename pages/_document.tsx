import { Html, Head, Main, NextScript } from 'next/document'
import { Toaster } from 'react-hot-toast'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/assets/test.jpg" />
      </Head>
      <body>
        <NextScript />
        <Main />
        <Toaster />
      </body>
    </Html>
  )
}