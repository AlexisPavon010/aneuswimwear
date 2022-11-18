import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'

export default function App({ Component, pageProps, session }: any) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  )
}
