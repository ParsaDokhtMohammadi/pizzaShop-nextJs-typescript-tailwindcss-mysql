import CartPage from '@/template/CartPage'
import React from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

const Cart = async() => {
  const session = await getServerSession(authOptions)
  console.log(session?.user);
   
  return (
    <CartPage></CartPage>
  )
}

export default Cart