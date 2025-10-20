
import CartCard from '@/components/CartCard'
import { ICartItem } from '@/types/types'
import React from 'react'

const CartPage = ({data} : {data:Array<ICartItem>}) => {

  
  return (
    <div className='flex'>
      <ul className='flex list-none flex-wrap gap-4 p-20'>
            {data.map((datum , index)=>(
              <li key={index}>
                <CartCard data={datum}/>
              </li>
      ))}
      </ul>
    </div>
  )
}

export default CartPage