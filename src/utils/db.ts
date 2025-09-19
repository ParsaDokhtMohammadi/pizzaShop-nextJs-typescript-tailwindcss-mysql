import mysql, { Pool, RowDataPacket } from "mysql2/promise";

export const db: Pool = mysql.createPool({
  host: process.env.DB_HOST!,
  user: process.env.DB_USER!,
  password: process.env.DB_PASS!,
  database: process.env.DB_NAME!,
});

// Define our User type (matches MySQL schema)
export interface DBUser extends RowDataPacket {
  id: number;
  username: string;
  email: string;
  password: string;
  role: "customer" | "admin";
}
