import { NextPage } from "next"
import { ReactElement, ReactNode } from "react"
import { AppProps } from "next/app"

// For pages with nested layouts
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout: (page: ReactElement) => ReactNode
}

export type AppPropsWithLayout<P = {}, IP = P> = AppProps<P> & {
    Component: NextPageWithLayout<P, IP>
}

export type PrefetchedPageProps = {
    notFound: boolean
}