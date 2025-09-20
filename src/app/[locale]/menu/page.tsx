"use server";

import { menuAction } from './action';
import MenuPage from '@/template/MenuPage';

export default async function Menu() {
  const data = await menuAction({
    next: { revalidate: 60 * 60 * 24 }
  })
  console.log(data);
  

  return <MenuPage/>;
}
