"use server"

import { db } from "@/utils/db"

export const AddToCardAction = async (cart_id: string , item_id : number  , quantity:number) => {
    await db.query("insert into cart_items (cart_id, item_id, quantity)  values(? , ? , ?)",[+cart_id , +item_id , +quantity])
}
export const getCartItems = async (id: number) => {
    const [rows] = await db.query("call getCartItems(?)",[+id])
    return rows
}
export const removeFromCart = async (cart_Id : string , Item_id : number) => {
    await db.query("delete from cart_items where cart_id = ? and item_id = ?",[cart_Id , Item_id])
}