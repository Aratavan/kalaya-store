import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AppPropsWithLayout } from 'types/global'
import { CartProvider, MedusaProvider } from 'medusa-react'
import { MEDUSA_BACKEND_URL, queryClient } from '@lib/config'
import { Hydrate } from "react-query"
import { StoreProvider } from '@lib/context/store-context'
import { AccountProvider } from '@lib/context/account-context'

function MyApp({ Component, pageProps }: AppPropsWithLayout<{ dehydratedState?: unknown }>) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <MedusaProvider baseUrl={MEDUSA_BACKEND_URL} queryClientProviderProps={{ client: queryClient }}>
      <Hydrate state={pageProps.dehydratedState}>
        <CartProvider>
          <StoreProvider>
            {/* <AccountProvider> */}
              {getLayout(<Component {...pageProps} />)}
            {/* </AccountProvider> */}
          </StoreProvider>
        </CartProvider>
      </Hydrate>

    </MedusaProvider>
  )
}

export default MyApp
