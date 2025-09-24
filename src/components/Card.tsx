import {ICartItem } from '@/types/types'
import Image from 'next/image'
import React from 'react'
import AddToCartButton from './AddToCartButton'
import { sessionHelper } from '@/utils/sessionHelper'
import ItemQuantity from './ItemQuantity'
import Link from 'next/link'


const Card = async({ data , inCart}: { data: ICartItem , inCart : boolean}) => {

    const session = await sessionHelper()
    const user_id  = session?.id ?? undefined

    
  return (
    <div className='flex flex-col   gap-4  rounded-2xl  relative items-center'>
        <Link href={`/details/${data.id}`}>
        <Image
         src={data.imageURL || ""} 
         alt={data.name} width={300} height={300}   
         className='w-[150px] h-[140px] relative top-20 z-10 cursor-pointer hover:scale-120 transition-all'/></Link>
        <div className='flex flex-col justify-between  h-[210px] w-[225px] rounded-2xl bg-bgPrimary px-5 pb-3 '>
        <span className='mt-20 text-sm font-medium'>{data.name}</span>
        <span className='text-sm font-medium'>{data.price} تومان</span>
        {inCart ?<ItemQuantity quantity={data.quantity} />: <AddToCartButton cartId={user_id} itemId={data.id} quantity={1} />}
        </div>
    </div>
  )
}
export default Card
