import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { NextPageWithLayout } from "types/global"
import { ReactElement } from 'react'
import Layout from '@modules/layout/templates'
import Line from '@modules/common/line'
import LandingPage from '@modules/layout/components/landing-page'
import { getProducts } from '@lib/data'

const Home: NextPageWithLayout = () => {
  const products = getProducts()
  console.log(products)
  // products.then((data) => {
  //   console.log(data)
  // })

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
