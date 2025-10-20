"use client"
import { useEffect, useState } from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => {
      const [User, setUser] = useState<null | object>(null);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const res = await fetch("/api/getSession");
        const data = await res.json();
        setUser(data || null);
      } catch (err) {
        console.error("Failed to fetch session", err);
      }
    };

    fetchSession();
  }, []);
  return (
    <>
      <div className="hidden md:block">
        <NavbarDesktop User={User}/>
      </div>
      <div className="block md:hidden">
        <NavbarMobile User={User}/>
      </div>
    </>
  );
};

export default Navbar;
