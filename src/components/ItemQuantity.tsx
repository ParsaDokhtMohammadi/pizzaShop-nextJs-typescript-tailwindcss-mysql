"use client"

const ItemQuantity = ({quantity} : {quantity : number}) => {
  return (
    <div className="flex gap-2">
        <button className="p-2 rounded bg-white text-black">-</button>
        <input type="number" className="w-6" value={quantity} readOnly/>
        <button className="p-2 rounded bg-white text-black">+</button>
    </div>
  )
}

export default ItemQuantity