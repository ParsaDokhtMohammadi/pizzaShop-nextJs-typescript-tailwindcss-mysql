"use server";
import { db } from "@/utils/db";
import { hashPassword } from "@/utils/auth";
import { IUser } from "@/types/types";

export const RegisterAction = async (formData: FormData) => {
  const email = formData.get("email") as string | null;
  const password = formData.get("password") as string | null;
  const username = formData.get("username") as string | null;

  if (!email || !password || !username) throw new Error("Incomplete data");

  const [rows] = await db.query<IUser[]>(
    "SELECT * FROM users WHERE email = ? LIMIT 1",
    [email]
  );

  if (rows[0]) throw new Error("User already exists");

  const hashedPassword = await hashPassword(password);

  await db.query(
    "INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)",
    [username, email, hashedPassword, "customer"]
  );

};
