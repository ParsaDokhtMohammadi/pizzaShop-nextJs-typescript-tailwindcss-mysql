import Card from '@/components/Card';
import {IItem, Items} from '@/types/types'
import React from 'react'

const MenuPage = ({data , inCart} : {data : Array<IItem> , inCart: Array<Items>}) => {  
  return (
    <div className='flex justify-center items-center'>
      <ul className='list-none flex gap-5 flex-wrap items-center justify-center'>
        {data.map(datum => {
          const found = inCart.find(item => item.itemId === datum.id)
          return (
            <li key={datum.id}>
              <Card data={datum} inCart={found ?? null} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
 
export default MenuPage