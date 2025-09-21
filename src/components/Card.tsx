import { IItem } from '@/types/types'
import Image from 'next/image'
import React from 'react'
import AddToCartButton from './AddToCartButton'

const Card = ({data} : {data:IItem}) => {
  return (
    <div className='flex flex-col p-2 bg-bgPrimary gap-4'>
        <Image src={data.imageURL || ""} alt='logo' width={96} height={96}/>
        <h2>{data.name}</h2>
        <AddToCartButton/>
    </div>
  )
}

export default Card