import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '../../assets/ai-lease-white-logo.svg'

function Footer() {
  return (
    <footer className='h-40 bg-black'>
      <div className="container grid grid-cols-1 md:grid-cols-3 place-content-center h-full">
        <span></span>
        <div className="flex flex-col justify-center">
          <Link href={"/"} className="self-center">
            <div className="flex gap-2">
              <Image alt="AI Lease" priority src={Logo}></Image>
              <h1 className='text-xl  text-white font-bold'>Solar Powered Lock</h1>
            </div>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer