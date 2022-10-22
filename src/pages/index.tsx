import { ReactElement } from 'react'
import Layout from '@modules/layout/templates'
import Line from '@modules/common/line'
import LandingPage from '@modules/layout/components/landing-page'
import { NextPageWithLayout, PrefetchedPageProps } from "types/global"

const Home: NextPageWithLayout = () => {
  return (
   <>
   <Line/>
   <LandingPage/>
   </>
  )
}

Home.getLayout = (page: ReactElement) => {
  return <Layout> {page} </Layout>
}

export default Home
