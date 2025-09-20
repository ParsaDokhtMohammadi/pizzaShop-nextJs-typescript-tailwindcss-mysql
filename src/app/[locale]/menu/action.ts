import { category } from "@/types/types"
import { db } from "@/utils/db"

export const menuAction = async () => {
    const [rows] =  await db.query("select * from Items")
    return rows
}
export const menuCategoryAction = async (category:category)=> {
    const [rows] = await db.query("select * from items where category = ?",[category])
    return rows
}