"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { CgProfile } from "react-icons/cg";

const NavbarLinks = ({isLoggedIn} : {isLoggedIn : boolean}) => {
    const pathname = usePathname()
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className='flex gap-2.5 sm:gap-10 sm:justify-center sm:items-center not-sm:flex-col not-sm '>
            {isLoggedIn && <Link href={"/profile"} className='not-sm:hidden'><CgProfile size={30}/></Link>}
            <Link href={"/"} className={`${pathname == "/" && "sm:border sm:rounded-[52px] sm:border-primary sm:py-0.5 sm:px-4 w-fit"}`}>صفحه اصلی</Link>
            <Link href={"/menu"} className={`${pathname == "/menu" && "sm:border sm:rounded-[52px] sm:border-primary sm:py-0.5 sm:px-4 w-fit"}`}>منو</Link>
            <Link href={"/aboutUs"} className={`${pathname == "/aboutUs" && "sm:border sm:rounded-[52px] sm:border-primary sm:py-0.5 sm:px-4 w-fit"}`}>درباره ما</Link>
            <Link href={"/contactUs"} className={`${pathname == "/contactUs" && "sm:border sm:rounded-[52px] sm:border-primary sm:py-0.5 sm:px-4 w-fit"}`}>تماس با ما</Link>
        </div>
    )
}

export default NavbarLinks