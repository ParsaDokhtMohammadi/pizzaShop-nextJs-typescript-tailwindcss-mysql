"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import React, { useState } from "react";
import { RegisterAction } from "@/app/(auth)/Register/actions";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosLock } from "react-icons/io";
import { TbXboxX } from "react-icons/tb";
import { FaRegCheckCircle } from "react-icons/fa";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import z from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { BeatLoader } from "react-spinners";


const schema = z.object({
  username: z.string().min(5, "نام کاربری باید حداقل ۵ کاراکتر باشد"),
  email: z.string().email("ایمیل معتبر نیست"),
  password: z.string()
    .min(8, "رمز عبور باید حداقل ۸ کاراکتر داشته باشد")
    .regex(/[A-Z]/, "رمز عبور باید حداقل یک حرف بزرگ داشته باشد")
    .regex(/[0-9]/, "رمز عبور باید حداقل یک عدد داشته باشد"),
});

type FormFields = z.infer<typeof schema>

const RegisterPage = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormFields>({
    resolver: zodResolver(schema)
  })
  const router = useRouter()
  const [passwordChecks, setPasswordChecks] = useState({
    char: false,
    number: false,
    length: false,
  });

  const checkPassword = (val: string) => {
    setPasswordChecks({
      char: /[A-Z]/.test(val),
      number: /[0-9]/.test(val),
      length: val.length >= 8,
    });
  };


  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    const { username, email, password } = data
    try {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("email", email);
      formData.append("password", password);
      await RegisterAction(formData);
      toast.success("کاربر با موفقیت ایجاد شد", { style: { background: "#161622", color: "#fff" } })
      router.replace("/Login")
    } catch (err: unknown) {
      if (err instanceof Error) {
        toast.error(err.message, { style: { background: "#161622", color: "#fff" } })
      } else {
        toast.error("خطا", { style: { background: "#161622", color: "#fff" } })
      }
    }
  }

  // //change the height when the navbar is finished

  return (
    <>
      <div><Toaster /></div>
      <div className={`
        flex justify-between items-center flex-col bg-bgPrimary  mt-41 rounded-t-[60px] max-w-[1120px] min-h-[620px] 
        fixed bottom-0 left-0 right-0 
        shadow-[0_-5px_20px_5px_rgba(0,0,0,0.80)] shadow-shadows
        md:w-[75%] md:relative md:rounded-[60px] md:m-auto md:mt-20
        
        `}>

        <div className="flex flex-col justify-center items-center gap-[32px]  w-full   px-20 pt-20 pb-10">
          <h1 className="text-4xl font-medium text-text">ثبت نام</h1>
          <form className="flex flex-col gap-6 w-full items-center max-w-[760px]" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex rounded gap-2 px-3 py-2 items-center bg-bgSecondary h-[50px] w-full">
              <FaUser color="gray" size={24} />
              <input
                {...register("username")}
                type="text"
                placeholder="نام کاربری"

                className="px-2 outline-0 placeholder:text-text-secondary w-full"
              />
            </div>
            {errors.username && <span className="text-danger w-full">{errors.username.message}</span>}
            <div className="flex rounded gap-2 px-3 py-2 items-center bg-bgSecondary h-[50px] w-full">
              <MdEmail color="gray" size={24} />
              <input
                {...register("email")}
                type="email"
                placeholder="ایمیل"
                className="px-2 outline-0 placeholder:text-text-secondary w-full"
              />
            </div>
            {errors.email && <span className="text-danger w-full">{errors.email.message}</span>}
            <div className="flex rounded gap-2 px-3 py-2 items-center bg-bgSecondary h-[50px] w-full">
              <IoIosLock color="gray" size={24} />
              <input
                {...register("password")}
                type="password"
                placeholder="رمزعبور"
                onChange={(e) => {
                  checkPassword(e.target.value)
                }}
                className="px-2 outline-0 placeholder:text-text-secondary w-full"
              />
            </div>
            {errors.password && <span className="text-danger">{errors.password.message}</span>}
            <div className="flex flex-col gap-1.5 w-full">
              <div className="flex gap-1.5 items-center">
                {passwordChecks.length ? <FaRegCheckCircle color="green" /> : <TbXboxX color="red" />}
                <span className={passwordChecks.length ? "text-success" : "text-danger"}>
                  رمز عبور باید حداقل هشت کاراکتر داشته باشد.
                </span>
              </div>
              <div className="flex gap-1.5 items-center">
                {passwordChecks.char ? <FaRegCheckCircle color="green" /> : <TbXboxX color="red" />}
                <span className={passwordChecks.char ? "text-success" : "text-danger"}>
                  رمز عبور می‌بایست شامل حداقل یک حرف بزرگ باشد.
                </span>
              </div>
              <div className="flex gap-1.5 items-center">
                {passwordChecks.number ? <FaRegCheckCircle color="green" /> : <TbXboxX color="red" />}
                <span className={passwordChecks.number ? "text-success" : "text-danger"}>
                  رمز عبور می‌بایست شامل حداقل یک عدد باشد
                </span>
              </div>
            </div>




            <button
              type="submit"
              disabled={!passwordChecks.length || !passwordChecks.char || !passwordChecks.number || isSubmitting}
              className="disabled:bg-gray-500 bg-primary h-[52px] text-white rounded-[30px] p-2 w-[225px] text-2xl font-normal cursor-pointer hover:bg-primary-hover transition-colors"
            >
              {isSubmitting ?<BeatLoader color="#ffffff" />:" ثبت نام"}
             
            </button>
          </form>
          <div className="flex gap-2 text-sm items-center justify-center">
            <span>قبلا ثبت نام کرده‌اید؟</span>
            <Link href={"/Login"} className="text-sm text-primary dark:text-primary">ورود</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
