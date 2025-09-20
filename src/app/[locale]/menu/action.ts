import { db } from '@/utils/db';

export const menuAction = async (options?: { next?: { revalidate: number } }) => {
  const [rows] = await db.query("SELECT * FROM Items");
  return rows;
};
