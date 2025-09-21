import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const Redirector  = async(path:string="/") => {
    const session = await getServerSession(authOptions)
    if(session) redirect(path)
}