import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import CartLink from './CartLink'
import { getSession } from 'next-auth/react'
import ThemeSwitcher from './ThemeSwitcher'


const Navbar = async() => {
    const session = await getSession()
    console.log(session);
    
    
  return (
        <>
        <nav className='flex bg-bgPrimary justify-evenly items-center p-2.5 transition-all'>
            <div className='flex gap-10 justify-center items-center'>
                <Link href={"/"}>صفحه اصلی</Link>
                <Link href={"/menu"}>منو</Link>
                <Link href={"/aboutUs"}>درباره ما</Link>
                <Link href={"/contactUs"}>تماس با ما</Link>
            </div>
            <div className='flex gap-8 justify-center items-center'>
                <div className='rounded-[52px] bg-primary flex items-center justify-between gap-1 py-1 px-6 text-white'>
                    <Link href={"Login"}>ورود</Link>
                    <span>/</span>
                    <Link href={"Register"}>ثبت نام</Link>
                </div>
                <ThemeSwitcher/>
            </div>

        </nav>
    </>
  )
}

export default Navbar