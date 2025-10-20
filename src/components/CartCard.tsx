"use server"
import CartButton from '@/elements/CartButton'
import { ICartItem } from '@/types/types'
import Image from 'next/image'
import React from 'react'

const CartCard = ({data , cart_id} : {data:ICartItem , cart_id:string}) => {
  return (
    
    <div className='flex  w-3/4 bg-bgPrimary justify-between items-center rounded-2xl py-5 pl-5 pr-12 relative '>
        <Image 
        src={data.imageURL} alt={data.name} width={90} height={90} 
        className='absolute right-[-50] bottom-1.5'
        ></Image>
        <div className='flex flex-col gap-2.5'>
                <span>{data.name}</span>
                <span>{data.price} تومان</span>
        </div>
        <CartButton data={{cart_id , item_id:data?.id , quantity:data?.quantity}}/>
        

    </div>
  )
}

export default CartCard