import CartPage from "@/template/CartPage";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";


export default async function Cart({ params }: { params: { id: string } }) {
  const { id } = await params;
  const session = await getServerSession(authOptions);
  if(session?.user?.id !=id) redirect("/")

  return <CartPage/>;
}
