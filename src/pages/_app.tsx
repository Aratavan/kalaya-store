import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AppPropsWithLayout } from 'types/global'

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(<Component {...pageProps} />)
}

export default MyApp
