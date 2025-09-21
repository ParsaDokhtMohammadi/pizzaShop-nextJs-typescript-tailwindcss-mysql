"use server"

import { db } from "@/utils/db"
import { IItem } from "@/types/types";

export const AddToCardAction = async (cart_id: string , item_id : number  , quantity:number) :Promise<void> => {
    await db.query("insert into cart_items (cart_id, item_id, quantity)  values(? , ? , ?)",[+cart_id , +item_id , +quantity])
}


export const getCartItems = async (id: number): Promise<IItem[]> => {
  const [rows]: any = await db.query("CALL getCartItems(?)", [id]);
  return rows[0] as IItem[];
};

export const removeFromCart = async (cart_Id : string , Item_id : number):Promise<void> => {
    await db.query("delete from cart_items where cart_id = ? and item_id = ?",[cart_Id , Item_id])
}