"use client"
import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import z from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { BeatLoader } from "react-spinners";
import { signIn } from 'next-auth/react';
import { FaUser } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";



const schema = z.object({
  username: z.string().min(5, "نام کاربری باید حداقل ۵ کاراکتر باشد"),
  password: z.string().min(8, "رمز عبور باید حداقل ۸ کاراکتر داشته باشد")
});

type FormFields = z.infer<typeof schema>

const LoginPage = () => {
  const router = useRouter()
  const {register , handleSubmit , formState:{errors , isSubmitting}} = useForm<FormFields>({
    resolver : zodResolver(schema)
  })
  const onSubmit:SubmitHandler<FormFields> = async (data) => {
    const {username , password} = data

    const result = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });

    if (result?.error) {
      toast.error(result.error,{ style: { background: "#161622", color: "#fff" } })
    } else {
      toast.success("ورود موفقیت آمیز بود!",{ style: { background: "#161622", color: "#fff" } });
      router.replace("/")
    }
  };

  return (
        <>
      <div><Toaster /></div>
      <div className={`
        flex justify-between items-center flex-col bg-bgPrimary  mt-41 rounded-t-[60px] max-w-[1120px]  
        fixed bottom-0 left-0 right-0 
        shadow-[0_-5px_20px_5px_rgba(0,0,0,0.80)] shadow-shadows
        md:w-[75%] md:relative md:rounded-[60px] md:m-auto md:mt-20
        
        `}>

        <div className="flex flex-col justify-center items-center gap-[32px]  w-full   px-20 pt-20 pb-10">
          <h1 className="text-4xl font-medium">ورود</h1>
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
              <IoIosLock color="gray" size={24} />
              <input
                {...register("password")}
                type="password"
                placeholder="رمزعبور"
                className="px-2 outline-0 placeholder:text-text-secondary w-full"
              />
            </div>
            {errors.password && <span className="text-danger w-full">{errors.password.message}</span>}

            <button
              type="submit"
              disabled={isSubmitting}
              className="disabled:bg-gray-500 bg-primary text-white h-[52px] rounded-[30px] p-2 w-[225px] text-2xl font-normal cursor-pointer hover:bg-primary-hover transition-colors"
            >
              {isSubmitting ?<BeatLoader color="#ffffff" />:"ورود"}
             
            </button>
          </form>
          <div className="flex gap-2 text-sm items-center justify-center">
            <span>حساب کاربری ندارید؟</span>
            <Link href={"/Register"} className="text-sm text-primary">ثبت نام</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage