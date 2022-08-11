import type { NextPage } from 'next'
import Head from 'next/head'
import { Dashboard } from '../components/dashboard'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>GitHub</title>
        <meta name="description" content="Dashboard for GitHub" />
       <link rel="shortcut icon" href="/images/logo.png" type="image/x-icon" />
      </Head>
      <Dashboard />
    </>
  )
}

export default Home
