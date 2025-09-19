import { NextResponse } from "next/server";
import { db } from "@/utils/db";

export async function GET() {
  try {
    const [rows] = await db.query("SELECT NOW() as now");
    return NextResponse.json({ success: true, result: rows });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message });
  }
}