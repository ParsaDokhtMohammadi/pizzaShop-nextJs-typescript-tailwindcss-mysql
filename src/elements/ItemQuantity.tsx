"use client"
import { setCartItemQuantity , removeFromCart } from "@/app/(main)/cart/actions";
import { QuantityInfo } from "@/types/types";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaMinus, FaPlus } from "react-icons/fa";


const ItemQuantity = ({data} : {data:QuantityInfo}) => {
  const router = useRouter()
  const {cart_id , item_id ,quantity} = data
  const [quantityValue , setQuantityValue] = useState<number>(quantity)
  const quantitySetter = (value:number):void =>{
    if(value<=0) removeFromCart(cart_id , item_id)
    else setCartItemQuantity(cart_id, item_id,value)
    setQuantityValue(value)
    router.refresh()
  }
  return (
    <div className="flex justify-between w-full rounded-4xl border-2 border-bgButtons px-5 py-2 cursor-pointer">
        <button className="text-white text-2xl cursor-pointer" onClick={()=>quantitySetter(quantityValue - 1)} disabled={quantityValue<=0}><FaMinus size={12}/></button>
        <input type="number"  className="border-none outline-0 text-white text-md w-full  text-center" value={quantityValue} onChange={(e)=>setQuantityValue(+e.target.value)} onBlur={()=>quantitySetter(quantityValue)}/>
        <button className="text-white text-2xl cursor-pointer" onClick={()=>quantitySetter(quantityValue + 1)}><FaPlus size={12} /></button>
    </div>
  )
}

export default ItemQuantity