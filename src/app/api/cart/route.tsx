import { NextResponse } from "next/server";
import { sessionHelper } from "@/utils/sessionHelper";
import { getCartItems } from "@/app/(main)/cart/actions";

export async function GET() {
  try {
    const token = await sessionHelper()

    if (!token?.id) {
      return NextResponse.json({ items: [] }, { status: 200 });
    }

    const userId = Number(token.id);
    const items = await getCartItems(userId);

    return NextResponse.json({ items }, { status: 200 });
  } catch (err) {
    console.error("[api/cart] error:", err);
    return NextResponse.json({ items: [] }, { status: 500 });
  }
}
