import Card from '@/components/Card';
import { IItem } from '@/types/types'
import React from 'react'

const MenuPage = ({data , inCart} : {data : Array<IItem> , inCart: Array<number>}) => {  
  return (
    <div className='flex'>
      <ul className='list-none flex gap-5 flex-wrap items-center'>
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