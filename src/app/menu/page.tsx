"use server";

import { menuAction } from './action';
import MenuPage from '@/template/MenuPage';

export default async function Menu() {
  const data = await menuAction()
  console.log(data);
  

  return <MenuPage/>;
}
