import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { NextPageWithLayout } from "types/global"
import { ReactElement } from 'react'
import Layout from '@modules/layout/templates'
import BreadCrumb from '@modules/common/breadcrumb'
import Line from '@modules/common/line'

const Home: NextPageWithLayout = () => {
  return (
   <>
   <Line/>
   {/* <div>Kalaya Store Front</div> */}
   {/* <p>marathon</p> */}
   </>
  )
}

Home.getLayout = (page: ReactElement) => {
  return <Layout> {page} </Layout>
  
}

export default Home
