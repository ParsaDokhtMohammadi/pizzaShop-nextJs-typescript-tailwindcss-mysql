"use client";

import React, { useState } from "react";
import { RegisterAction } from "@/app/(auth)/Register/actions";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosLock } from "react-icons/io";
import { TbXboxX } from "react-icons/tb";
import { FaRegCheckCircle } from "react-icons/fa";
import Link from "next/link";


const RegisterPage = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [charCheck , setCharCheck] = useState(false)
  const [lengthCheck , setLengthCheck] = useState(false)
  const [numberCheck , setNumberCheck] = useState(false)
  const [message, setMessage] = useState("");

const checkPassword = (val: string) => {
  setCharCheck(/[A-Z]/.test(val));  
  setNumberCheck(/[0-9]/.test(val));   
  setLengthCheck(val.length > 8);
};

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    try {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("email", email);
      formData.append("password", password);

      await RegisterAction(formData);
      setMessage("کاربر با موفقیت ایجاد شد")
    } catch (err: unknown) {
      if (err instanceof Error) {
        setMessage(err.message);
      } else {
        setMessage("خطا");
      }
    }
  };
  //change the height when the navbar is finished

  return (
    <div className={`
        flex justify-between items-center flex-col bg-bgPrimary  mt-41 rounded-t-[60px] max-w-[1120px] h-[620px] 
        fixed bottom-0 left-0 right-0 
        shadow-[0_-5px_20px_5px_rgba(0,0,0,0.80)] shadow-shadows
        md:w-[75%] md:relative md:rounded-[60px] md:m-auto md:mt-20
        
   `}>
    
    <div className="flex flex-col justify-center items-center gap-[30px]  w-full   p-20">
      <h1 className="text-4xl font-medium">ثبت نام</h1>
      <form className="flex flex-col gap-6 w-full items-center max-w-[760px]" onSubmit={handleSubmit}>
        <div className="flex rounded gap-2 px-3 py-2 items-center bg-bgSecondary h-[50px] w-full">
          <FaUser color="gray" size={24}/>
          <input
          type="text"
          placeholder="نام کاربری"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="px-2 outline-0 placeholder:text-white"
        />
        </div>
        <div className="flex rounded gap-2 px-3 py-2 items-center bg-bgSecondary h-[50px] w-full">
          <MdEmail color="gray" size={24} />
          <input
          type="email"
          placeholder="ایمیل"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-2 outline-0 placeholder:text-white"
        />
        </div>
        <div className="flex rounded gap-2 px-3 py-2 items-center bg-bgSecondary h-[50px] w-full">
          <IoIosLock  color="gray" size={24}/>
          <input
          type="password"
          placeholder="رمزعبور"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
            checkPassword(e.target.value)
          }}
          className="px-2 outline-0 placeholder:text-white"
        />
        </div>
        <div className="flex flex-col gap-1.5 w-full">
        <div className="flex gap-1.5 items-center">
        {lengthCheck ? <FaRegCheckCircle color="green"/>: <TbXboxX color="red"/>}
        <span className={`${lengthCheck ?"text-success":"text-danger"}`}>رمز عبور باید حداقل هشت کاراکتر داشته باشد.</span>
        </div>
        <div className="flex gap-1.5 items-center">
        {charCheck ? <FaRegCheckCircle color="green"/>: <TbXboxX color="red"/>}
        <span className={`${charCheck ?"text-success":"text-danger"}`}>رمز عبور می‌بایست شامل حداقل یک حرف بزرگ باشد.</span>
        </div>
        <div className="flex gap-1.5 items-center">
        {numberCheck ? <FaRegCheckCircle color="green"/>: <TbXboxX color="red"/>}
        <span className={`${numberCheck ?"text-success":"text-danger"}`}>رمز عبور می‌بایست شامل حداقل یک عدد باشد</span>
        </div>



        </div>
        <button 
        type="submit" 
        disabled={!lengthCheck || !charCheck || !numberCheck}
        className="disabled:bg-gray-500 bg-bgButtons h-[52px] rounded-[30px] p-2 w-[225px] text-2xl font-normal cursor-pointer hover:bg-shadows transition-colors"
        >
          ثبت نام
        </button>
      </form>
      {message && <p className="mt-2">{message}</p>} 
    <div className="flex gap-2 text-sm items-center">
      <span>قبلا ثبت نام کرده‌اید؟</span>
      <Link href={"/Login"} className="text-sm text-[#8E42A9]">ورود</Link>
    </div>
    </div>
    </div>
  );
};

export default RegisterPage;
