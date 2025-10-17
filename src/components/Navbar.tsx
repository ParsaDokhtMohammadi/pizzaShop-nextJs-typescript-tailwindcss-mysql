import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import CartLink from './CartLink'
import { getSession } from 'next-auth/react'
import ThemeSwitcher from './ThemeSwitcher'
import NavbarLinks from '@/elements/NavbarLinks'



const Navbar = async() => {
    const session = await getSession()
    console.log(session);

    
    
    
  return (
        <>
        <nav className='flex bg-bgPrimary justify-evenly items-center p-2.5 transition'>
            <NavbarLinks/>
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