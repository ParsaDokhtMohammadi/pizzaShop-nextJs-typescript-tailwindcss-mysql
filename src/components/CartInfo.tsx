"use client"

import Link from "next/link"


const CartInfo = ({total} : {total : number}) => {



    return (
        <div className={`
        flex justify-between items-center flex-col bg-bgPrimary  mt-41 rounded-t-[60px] max-w-[1120px]  
        fixed bottom-0 left-0 right-0 
        shadow-[0_-5px_20px_5px_rgba(0,0,0,0.80)] shadow-shadows
        md:w-[75%] md:relative md:rounded-[60px] md:m-auto md:mt-20
        
        `}>

        <div className="flex flex-col justify-center items-center gap-[32px]  w-full   px-10 pt-20 pb-10">
          <div className='flex w-full border-b-2 border-b-border justify-between items-center px-3 py-2'>
            <span>قیمت کل</span>
            <span>{total} تومان</span>
          </div>
          <Link href={'/Checkout'} 
          className="bg-primary flex justify-center items-center text-white w-3/4 h-[52px] rounded-[20px] px-2 py-8 text-lg font-normal cursor-pointer hover:bg-primary-hover transition-colors"
          >ادامه خرید</Link>
          
          
        </div>
      </div>
    )
}

export default CartInfo