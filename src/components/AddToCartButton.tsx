"use client"


import { AddToCardAction} from "@/app/cart/actions";
import { useRouter } from "next/navigation"; 
type AddToCartButtonProps = {
  cartId: string;
  itemId: number;
  quantity?: number;
  userId : string|undefined
};

const AddToCartButton = ({ cartId, itemId, quantity = 1 , userId}: AddToCartButtonProps) => {
  const router=useRouter()

  return (
    <button
      className="bg-white text-black border rounded-2xl cursor-pointer"
      onClick={userId ? () => AddToCardAction(cartId, itemId, quantity):()=>router.push("/Login")}
    >
      Add to cart
    </button>
  );
};

export default AddToCartButton;
