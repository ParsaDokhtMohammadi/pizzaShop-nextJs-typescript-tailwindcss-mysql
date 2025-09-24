"use client"


import { AddToCardAction} from "@/app/cart/actions";
import { useRouter } from "next/navigation"; 
import { LuShoppingCart } from "react-icons/lu";
type AddToCartButtonProps = {
  cartId: string|undefined
  itemId: number;
  quantity?: number;
};

const AddToCartButton = ({ cartId, itemId, quantity = 1 }: AddToCartButtonProps) => {
  const router=useRouter()

  return (
    <button
      className="text-white bg-bgButtons rounded-4xl cursor-pointer flex gap-0.5 items-center justify-center py-3 px-4 hover:bg-shadows transition-colors"
      onClick={cartId ? () => AddToCardAction(cartId, itemId, quantity):()=>router.push("/Login")}
    >
      <LuShoppingCart className="w-4 h-4" />
      <span className="text-sm">افزودن به سبد خرید</span>
    </button>
  );
};

export default AddToCartButton;
