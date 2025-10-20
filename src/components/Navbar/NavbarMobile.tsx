import CartLink from '@/elements/CartLink';
import NavbarLinks from '@/elements/NavbarLinks';
import ThemeSwitcher from '@/elements/ThemeSwitcher';
import { Imperial_Script } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { RxHamburgerMenu } from "react-icons/rx";
import { HiMiniXMark } from "react-icons/hi2";




const imperial = Imperial_Script({
    weight: "400",
    subsets: ['latin']
})



const NavbarMobile = ({ User }: { User: null | object }) => {
    const [view, setView] = useState<boolean>(false)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 640) { // 640px = Tailwind's `sm` breakpoint
                setView(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);




    return (
        <header className='flex flex-col items-center justify-center'>
            <nav className="w-full relative flex bg-bgPrimary justify-between items-center p-2.5 transition border-b-primary border-b-4 rounded-b-xl">
                <button className='cursor-pointer' onClick={() => setView(!view)}>
                    {!view ? <RxHamburgerMenu size={26} /> : <HiMiniXMark size={30} />}
                </button>
                <div className='absolute left-1/2 -translate-x-1/2'>
                    {!User && <Image src={'/images/logo.png'} alt='logo' width={32} height={32} />}
                    {User && <Link href={"/profile"}><CgProfile size={30} /></Link>}
                </div>
                <div className="flex gap-8 justify-center items-center">
                    <ThemeSwitcher />
                    <div className={`${!User && "hidden"}`}>
                        <CartLink />
                    </div>
                </div>
            </nav>
            <div className='w-3/4 flex items-center bg-primary rounded-b-[48px] pt-4 text-white'>
                <div className={`w-full ${!view && "hidden"}`}>
                    <div className={`${User && "hidden"} border-b-1 border-white pb-2`}>
                        <div
                            className={`rounded-[52px] bg-white text-primary flex items-center justify-between gap-1 py-2 px-6  w-fit m-auto `}>
                            <Link href="Login">ورود</Link>
                            <span>/</span>
                            <Link href="Register">ثبت نام</Link>
                        </div>
                    </div>


                    <div className={`${!User && "hidden"} flex justify-center items-center gap-2.5 w-full py-1.5 border-b-1 border-white `}>
                        <Image src={'/images/logo.png'} alt='logo' width={32} height={32} />
                        <span className={`${imperial.className} text-3xl`}>
                            Planet Pizza
                        </span>
                    </div>


                    <div className='px-5 py-4'>
                        <NavbarLinks isLoggedIn={User ? true : false} />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default NavbarMobile