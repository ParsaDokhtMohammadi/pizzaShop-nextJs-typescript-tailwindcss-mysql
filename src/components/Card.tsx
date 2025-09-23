import {ICartItem } from '@/types/types'
import Image from 'next/image'
import React from 'react'
import AddToCartButton from './AddToCartButton'
import { sessionHelper } from '@/utils/sessionHelper'
import ItemQuantity from './ItemQuantity'


const Card = async({ data , inCart}: { data: ICartItem , inCart : boolean}) => {
  console.log(data);
  
    const session = await sessionHelper()
    const user_id  = session?.id ?? ""
    console.log(inCart);
    
  return (
    <div className='flex flex-col p-2 bg-bgPrimary gap-4'>
        <Image src={data.imageURL || ""} alt={data.name} width={96} height={96}/>
        <h2>{data.name}</h2>
        {inCart ?<ItemQuantity quantity={data.quantity} />: <AddToCartButton cartId={user_id} itemId={data.id} quantity={1}/>}
    </div>
  )
}
export default Card
