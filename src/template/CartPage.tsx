import Card from '@/components/Card'
import { IItem } from '@/types/types'
import React from 'react'

const CartPage = ({data,inCart} : {data:IItem[] , inCart:Array<number>}) => {

  
  return (
    <div className='flex'>
      <ul className='flex list-none flex-wrap'>
            {data.map((datum , index)=>(
              <li key={index}>
                <Card data={datum} inCart={inCart.includes(datum.id)}/>
              </li>
      ))}
      </ul>
    </div>
  )
}

export default CartPage