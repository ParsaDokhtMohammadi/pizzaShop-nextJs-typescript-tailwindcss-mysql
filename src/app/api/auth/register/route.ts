import { NextRequest, NextResponse } from "next/server";
import { db } from "@/utils/db";
import { hashPassword } from "@/utils/auth";
import { IUser } from "@/types/types";

export async function POST(req: NextRequest) {
  try {
    const body: Pick<IUser, "email" | "password" | "username"> = await req.json();
    const { email, password, username } = body;

    if (!email || !password || !username) {
      return NextResponse.json({ error: "Register failed", status: 422 });
    }

    const [rows] = await db.query<IUser[]>(
      "SELECT * FROM users WHERE email = ? LIMIT 1",
      [email]
    );
    const existingUser = rows[0];
    if (existingUser) {
      return NextResponse.json({ error: "User already exists", status: 409 });
    }


    const hashedPassword = await hashPassword(password);

    await db.query(
      "INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)",
      [username, email, hashedPassword, "customer"]
    );

    return NextResponse.json({ message: "User created successfully", status: 201 });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: "Server error", status: 500 });
  }
}
