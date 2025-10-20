
import CartCard from '@/components/CartCard'
import { ICartItem } from '@/types/types'
import React from 'react'

const CartPage = ({data , cart_id} : {data:Array<ICartItem> , cart_id : string}) => {

  
  return (
    <div className='flex'>
      <ul className='flex list-none flex-wrap gap-4 p-20 w-full justify-center'>
            {data.map((datum )=>(
              <li key={datum.id} className='w-full flex justify-center'>
                <CartCard data={datum} cart_id={cart_id}/>
              </li>
      ))}
      </ul>
    </div>
  )
}

export default CartPage