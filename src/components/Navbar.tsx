import Image from 'next/image'
import React from 'react'
import LanguageSwitcher from './LangSwitcher'
import Link from 'next/link'

const Navbar = () => {
  return (
        <>
    <nav className='flex flex-col   w-full  items-center'>
        <div className='flex justify-between items-center px-2 bg-bgPrimary border-b-[1px] w-full'>
            <div >
                 <LanguageSwitcher/>
            </div>
            <Image src={"/images/logo.webp"} alt='logo' width={96} height={96}></Image>
            <div className='flex gap-2 p-1'>
                <Link href={"/Register"} className='btn'>Register</Link>
                <Link href={"/Login"} className='btn'>Login</Link>
            </div>
        </div>
        <div className='max-w-[75%] w-full  flex justify-between py-2 bg-bgPrimary  px-6 rounded-br-2xl rounded-bl-2xl'>
                <Link href={"/Register"} >Register</Link>
                <Link href={"/Login"} >Login</Link>
        </div>
    </nav>
    </>
  )
}

export default Navbar