"use client"

const ItemQuantity = ({quantity} : {quantity : number}) => {
  console.log("in cart",quantity);
  return (
    <div className="flex justify-between w-full rounded-4xl border-2 border-bgButtons px-5">
        <button className="text-white text-2xl ">-</button>
        <input type="text"  className="border-none outline-0 text-white text-md w-full  text-center" value={quantity} readOnly/>
        <button className="text-white text-2xl">+</button>
    </div>
  )
}

export default ItemQuantity