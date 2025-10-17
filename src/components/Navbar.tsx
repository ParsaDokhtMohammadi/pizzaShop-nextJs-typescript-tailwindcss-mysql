"use client"; // make this a client component
import React, { useEffect, useState } from "react";
import Link from "next/link";
import ThemeSwitcher from "../elements/ThemeSwitcher";
import NavbarLinks from "@/elements/NavbarLinks";
import CartLink from "../elements/CartLink";

const Navbar = () => {
  const [User, setUser] = useState<null | object>(null);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const res = await fetch("/api/getSession"); // your API route
        const data = await res.json();    
        setUser(data || null);
      } catch (err) {
        console.error("Failed to fetch session", err);
      }
    };

    fetchSession();
  }, []);

  return (
    <nav className="flex bg-bgPrimary justify-evenly items-center p-2.5 transition">
      <NavbarLinks isLoggedIn={User ? true : false}/>
      <div className="flex gap-8 justify-center items-center">
        <div
          className={`${
            User ? "hidden" : ""
          } rounded-[52px] bg-primary flex items-center justify-between gap-1 py-1 px-6 text-white`}
        >
          <Link href="Login">ورود</Link>
          <span>/</span>
          <Link href="Register">ثبت نام</Link>
        </div>
        <div className={`${!User && "hidden"}`}>
            <CartLink/>
        </div>
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
