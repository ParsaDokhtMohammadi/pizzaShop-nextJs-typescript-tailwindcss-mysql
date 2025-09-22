"use server";

import { IItem } from '@/types/types';
import { menuAction } from './action';
import MenuPage from '@/template/MenuPage';
import { getCartItems } from '../cart/actions';
import { sessionHelper } from '@/utils/sessionHelper';

export default async function Menu() {
  const User = await sessionHelper()
  const data = await menuAction()


  let CartItemIds:Array<number> = []
  if (User?.id) {
   const InCartItems = await getCartItems(+User.id);
   console.log(InCartItems);
    InCartItems.forEach(item => {
      CartItemIds.push(+item.id)
    });
    console.log(CartItemIds);
    
  }
  return <MenuPage data={data as Array<IItem>} inCart={CartItemIds} />;
}
