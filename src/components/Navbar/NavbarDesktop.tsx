"use client";
import Link from "next/link";
import ThemeSwitcher from "../../elements/ThemeSwitcher";
import NavbarLinks from "@/elements/NavbarLinks";
import CartLink from "../../elements/CartLink";

const NavbarDesktop = ({User} : {User : null|object}) => {

  return (
    <header>
      <nav className="flex bg-bgPrimary justify-evenly items-center p-2.5 transition">
        <div>
          <NavbarLinks isLoggedIn={User ? true : false} />
        </div>
        <div className="flex gap-8 justify-center items-center">
          <div
            className={`${User ? "hidden" : ""
              } rounded-[52px] bg-primary flex items-center justify-between gap-1 py-1 px-6 text-white`}
          >
            <Link href="Login">ورود</Link>
            <span>/</span>
            <Link href="Register">ثبت نام</Link>
          </div>
          <ThemeSwitcher />
          <div className={`${!User && "hidden"}`}>
            <CartLink />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavbarDesktop;
