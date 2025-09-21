"use server";

import RegisterPage from "@/template/RegisterPage";
import { Redirector } from "@/utils/Redirector";

export default async function Register() {
  await Redirector()

  return <RegisterPage/>;
}
