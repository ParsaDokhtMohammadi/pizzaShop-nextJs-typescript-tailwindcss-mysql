"use server";

import { IItem, Items } from '@/types/types';
import { menuAction } from './action';
import MenuPage from '@/template/MenuPage';
import { getCartItems } from '../cart/actions';
import { sessionHelper } from '@/utils/sessionHelper';

export default async function Menu() {
  const User = await sessionHelper();
  const data = await menuAction();



  const CartItems: Array<Items> = [];

  if (User?.id) {
    const InCartItems = await getCartItems(+User.id) as any[];

    InCartItems.forEach(item => {
      CartItems.push({ itemId: +item.id, quantity: item.quantity });
    });
  }

  return <MenuPage data={data as Array<IItem>} inCart={CartItems} />;
}
