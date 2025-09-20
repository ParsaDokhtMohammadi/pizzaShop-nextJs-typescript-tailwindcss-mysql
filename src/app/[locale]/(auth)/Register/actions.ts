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

    if (rows[0]?.email === email) throw new Error("A user with this email already exists");
    const [rows2] = await db.query<IUser[]>(
        "SELECT * FROM users WHERE username = ? LIMIT 1",
        [username]
    );

    if (rows2[0]?.username === username) throw new Error("Username already exists");
    if (password.length < 8) throw new Error("Password is too short");
    if (!/(?=.*[A-Z])(?=.*\d)/.test(password)) {
        throw new Error(
            "Password must include at least one capital letter and one number"
        );
    }


    const hashedPassword = await hashPassword(password);

    await db.query(
        "INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)",
        [username, email, hashedPassword, "customer"]
    );
};
