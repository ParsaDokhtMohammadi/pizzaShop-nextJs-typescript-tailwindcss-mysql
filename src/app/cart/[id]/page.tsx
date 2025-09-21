import CartPage from "@/template/CartPage";

import { redirect } from "next/navigation";
import { sessionHelper } from "@/utils/sessionHelper";
import { getCartItems } from "../actions";
import { IItem } from "@/types/types";


export default async function Cart({ params }: { params: { id: string } }) {
  const { id } = await params;
  const User = await sessionHelper()
  if(User?.id !=id || !User) redirect("/")
  const data = await getCartItems(+User?.id)
  
  return <CartPage data={data as IItem[]}/>;
}
