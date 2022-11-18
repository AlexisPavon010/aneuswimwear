import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider } from 'next-auth/react'
import { Provider } from 'react-redux';
import { SWRConfig } from 'swr'
import 'swiper/css/effect-fade';
import "swiper/css/navigation";
import 'swiper/css';

import '../styles/globals.css'
import { store } from '../redux/store';
import { Layout } from '../components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
      }}
    >
      <SessionProvider session={pageProps.session}>
        <Provider store={store}>
          <ChakraProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ChakraProvider>
        </Provider>
      </SessionProvider>
    </SWRConfig>
  )
}
