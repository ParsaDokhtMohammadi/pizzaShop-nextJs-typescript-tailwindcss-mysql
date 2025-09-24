import Card from '@/components/Card';
import { ICartItem, IItem } from '@/types/types'
import React from 'react'

const MenuPage = ({data , inCart} : {data : Array<ICartItem> , inCart: Array<number>}) => {  
  return (
    <div className='flex justify-center items-center'>
      <ul className='list-none flex gap-5 flex-wrap items-center justify-center'>
         {data.map(datum=>(
          <li key={datum.id}>
            <Card data={datum} inCart={inCart.includes(datum.id)}/>
          </li>
         ))}
      </ul>
    </div>
  )
}

export default MenuPage