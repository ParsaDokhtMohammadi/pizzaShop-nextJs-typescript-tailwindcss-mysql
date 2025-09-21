"use server";
import { db } from "@/utils/db";
import { hashPassword } from "@/utils/auth";
import { IUser } from "@/types/types"; 



export const RegisterAction = async (formData: FormData) => {


    
    const email = formData.get("email") as string | null;
    const password = formData.get("password") as string | null;
    const username = formData.get("username") as string | null;

    if (!email || !password || !username) throw new Error("لطفاً همه فیلدها را پر کنید");

    const [rows] = await db.query<IUser[]>(
        "SELECT * FROM users WHERE email = ? LIMIT 1",
        [email]
    );

    if (rows[0]?.email === email) throw new Error("کاربری با این ایمیل قبلاً ثبت شده است");
    const [rows2] = await db.query<IUser[]>(
        "SELECT * FROM users WHERE username = ? LIMIT 1",
        [username]
    );

    if (rows2[0]?.username === username) throw new Error("نام کاربری قبلاً استفاده شده است");
    if (password.length < 8) throw new Error("رمز عبور باید حداقل ۸ کاراکتر باشد");
    if (!/(?=.*[A-Z])(?=.*\d)/.test(password)) {
        throw new Error(
           "رمز عبور باید حداقل شامل یک حرف بزرگ و یک عدد باشد"
        );
    }


    const hashedPassword = await hashPassword(password);

    await db.query(
        "INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)",
        [username, email, hashedPassword, "customer"]
    );
};
