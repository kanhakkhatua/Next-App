import type { NextPage } from 'next'
import Head from 'next/head'
import MotionTest from '../components/MotionTest';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-[#f1f1f9]">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='bg-white'>
        <MotionTest />
      </div>
    </div>
  )
}

export default Home
