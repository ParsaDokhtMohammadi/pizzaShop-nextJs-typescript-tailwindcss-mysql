import LoginPage from "@/template/LoginPage";

import { Redirector } from "@/utils/Redirector";

export default async function  Login() {
    await Redirector()
    return <LoginPage />
}
