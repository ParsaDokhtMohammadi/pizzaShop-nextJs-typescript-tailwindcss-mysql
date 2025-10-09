import { RowDataPacket } from "mysql2";
import { db } from "@/utils/db";

type FooterData = {
  address: string;
  email: string;
  phoneNumber: string;
};

export const FooterAction = async (): Promise<FooterData> => {
  const [rows] = await db.query<RowDataPacket[]>(
    "SELECT address, email, phoneNumber FROM Restaurant LIMIT 1"
  );
  return rows[0] as FooterData;
};
