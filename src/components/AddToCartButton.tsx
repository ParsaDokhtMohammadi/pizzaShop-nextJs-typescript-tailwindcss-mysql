"use client"

import { AddToCardAction } from "@/app/cart/actions";

type AddToCartButtonProps = {
  cartId: string;
  itemId: number;
  quantity?: number;
};

const AddToCartButton = ({ cartId, itemId, quantity = 1 }: AddToCartButtonProps) => {
  return (
    <button
      className="bg-white text-black border rounded-2xl cursor-pointer"
      onClick={() => AddToCardAction(cartId, itemId, quantity)}
    >
      Add to cart
    </button>
  );
};

export default AddToCartButton;
