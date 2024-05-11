import Head from 'next/head'
import { Inter } from 'next/font/google'
import React, { useState, Fragment, useContext, EventHandler } from 'react'
import axios from 'axios'
import { ping, pong } from './api/pingEsp'
import { Text } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [text, setText] = useState("")
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState("")

  return (
    <>
      <Head>
        <title>SunLock</title>
        <meta name="description" content="Screen Your Rental Agreement" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='h-screen bg-gradient-to-b from-[#FFEFE0] to-white w-screen'>
        <div className='container mx-auto flex flex-col flex-grow'>
          <header className='text-center my-12 flex flex-col gap-4'>
            <h1 className='text-4xl md:text-5xl font-bold'>Securely control your door lock remotely</h1>
          </header>
          <div className='justify-between space-x-5 text-center'>
            {/* <button className='px-4 py-2 rounded-xl bg-[#FF7A00] text-white w-max m-auto' onClick={ping}>Login</button>
            <button className='px-4 py-2 rounded-xl bg-[#FF7A00] text-white w-max m-auto' onClick={pong}>SignUp</button> */}
            {/* <button className='px-4 py-2 rounded-xl bg-[#FF7A00] text-white w-max m-auto' onClick={ping} disabled={loading}>
              {loading ? "Unlocking..." : "Unlock Door"}
            </button>
            <span className="mx-4 text-gray-600">or</span>
            <button className='px-4 py-2 rounded-xl bg-[#FF7A00] text-white w-max m-auto' onClick={pong} disabled={loading}>
              {loading ? "Locking..." : "Lock Door"}
            </button> */}

            <Text fontSize='50px' color='tomato'>
              Click on the actions to interact with the doorlock
            </Text>

          </div>
        </div>
        {/* Page content */}
      </div>
    </>
  )
}

