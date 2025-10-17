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
        <div className='flex gap-10 justify-center items-center'>
            {isLoggedIn && <Link href={"/profile"}><CgProfile size={30}/></Link>}
            <Link href={"/"} className={`${pathname == "/" && "border rounded-[52px] border-primary py-0.5 px-4"}`}>صفحه اصلی</Link>
            <Link href={"/menu"} className={`${pathname == "/menu" && "border rounded-[52px] border-primary py-0.5 px-4"}`}>منو</Link>
            <Link href={"/aboutUs"} className={`${pathname == "/aboutUs" && "border rounded-[52px] border-primary py-0.5 px-4"}`}>درباره ما</Link>
            <Link href={"/contactUs"} className={`${pathname == "/contactUs" && "border rounded-[52px] border-primary py-0.5 px-4"}`}>تماس با ما</Link>
        </div>
    )
}

export default NavbarLinks