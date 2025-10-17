import { Imperial_Script } from "next/font/google";
import { BsTwitterX } from "react-icons/bs";
import Link from "next/link";
import { FaChevronLeft, FaFacebook, FaGithub, FaInstagram, FaPhone } from "react-icons/fa";
import { FooterAction } from "@/app/Actions/Footer";
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import CopyRightText from "../elements/CopyRightText"

const imperial = Imperial_Script({
    weight: "400",
    subsets: ['latin']
})



const Footer = async() => {
    const data = await FooterAction()
    const {address , email , phoneNumber} = data
    
    return (
        <div className='w-full flex flex-col gap-8 bg-bgPrimary '>
            <div className='flex flex-row gap-16 px-16 flex-wrap items-end'>
                <div className='w-[272px] bg-transparent flex flex-col gap-6'>
                    <span className={`${imperial.className} text-[40px] text-primary`}>planet pizza</span>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها  ز، </p>
                    <div className="flex gap-6">
                        <Link href={"#"}><BsTwitterX className="text-text" size={22} /></Link>
                        <Link href={"#"}><FaFacebook className="text-text" size={24} /></Link>
                        <Link href={"#"}><FaInstagram className="text-text" size={24} /></Link>
                        <Link href={"https://github.com/ParsaDokhtMohammadi/pizzaShop-nextJs-typescript-tailwindcss-mysql"}><FaGithub className="text-text" size={24} /></Link>
                    </div>
                </div>
                <div className="flex gap-16 flex-wrap ">
                    <div className="flex flex-col gap-5">
                        <h3 className="text-xl text-text">خدمات ما</h3>
                        <div className="flex flex-col gap-2.5">
                            <div className="flex gap-2.5  items-center">
                                <FaChevronLeft className="text-text"/>
                                <Link href={"#"}>حریم خصوصی</Link>
                            </div>
                            <div className="flex gap-2.5  items-center">
                                <FaChevronLeft className="text-text"/>
                                <Link href={"#"}>تماس با ما</Link>
                            </div>
                            <div className="flex gap-2.5  items-center">
                                <FaChevronLeft className="text-text"/>
                                <Link href={"#"}>تماس با ما</Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h3 className="text-xl text-text">خدمات ما</h3>
                        <div className="flex flex-col gap-2.5">
                            <div className="flex gap-2.5  items-center">
                                <FaChevronLeft className="text-text"/>
                                <Link href={"#"}>حریم خصوصی</Link>
                            </div>
                            <div className="flex gap-2.5  items-center">
                                <FaChevronLeft className="text-text"/>
                                <Link href={"#"}>تماس با ما</Link>
                            </div>
                            <div className="flex gap-2.5  items-center">
                                <FaChevronLeft className="text-text"/>
                                <Link href={"#"}>تیم ما</Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h3 className="text-xl text-text">اطلاعات تماس</h3>
                        <div className="flex flex-col gap-2.5">
                            <div className="flex gap-2.5  items-center">
                                <FaPhone className="text-text"/>
                                <span >{phoneNumber}</span>
                            </div>
                            <div className="flex gap-2.5  items-center">
                                <MdOutlineEmail className="text-text"/>
                                <span >{email}</span>
                            </div>
                            <div className="flex gap-2.5  items-center">
                                <FaLocationDot className="text-text"/>
                                <span >{address}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center p-2.5  bg-primary">
                <CopyRightText></CopyRightText>
            </div>
        </div>
    )
}

export default Footer