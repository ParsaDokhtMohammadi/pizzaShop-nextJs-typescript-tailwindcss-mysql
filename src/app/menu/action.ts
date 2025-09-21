import { db } from '@/utils/db';

export const menuAction = async () => {
  const [rows] = await db.query("SELECT * FROM Items");
  return rows;
};
