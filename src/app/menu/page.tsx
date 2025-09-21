"use server";

import { IItem } from '@/types/types';
import { menuAction } from './action';
import MenuPage from '@/template/MenuPage';

export default async function Menu() {
  const data = await menuAction()
  return <MenuPage data={data as Array<IItem>}/>;
}
