"use client"

import { removeFromCart, setCartItemQuantity } from "@/app/(main)/cart/actions"
import { QuantityInfo } from "@/types/types"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { FaMinus ,FaPlus } from "react-icons/fa"

const CartButton = ({data} : {data:QuantityInfo}) => {
    const {cart_id , item_id , quantity} = data
    
    const router = useRouter()
    const [quantityValue, setQuantityValue] = useState<number>(quantity)
    const quantitySetter = (value: number): void => {
        if (value <= 0) removeFromCart(cart_id, item_id)
        else setCartItemQuantity(cart_id, item_id, value)
        setQuantityValue(value)
        router.refresh()
    }
    return (
        <div className="flex  w-[100px] justify-between items-center  rounded-4xl bg-primary text-white px-5 py-2 cursor-pointer">
            <button className="text-white text-2xl cursor-pointer" onClick={() => quantitySetter(quantityValue + 1)}><FaPlus size={12} /></button>
            <input type="number" className="border-none outline-0 text-white text-md w-1/2  text-center" value={quantityValue} onChange={(e) => setQuantityValue(+e.target.value)} onBlur={() => quantitySetter(quantityValue)} />
            <button className="text-white text-2xl cursor-pointer" onClick={() => quantitySetter(quantityValue - 1)} disabled={quantityValue <= 0}><FaMinus size={12} /></button>
        </div>
    )
}

export default CartButton