"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { LuShoppingCart } from "react-icons/lu";
const CartLink = () => {
  const [userId, setUserId] = useState<string | null>(null);
  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch("/api/getSession")
      if (!res.ok) return;
      const data = await res.json();
      setUserId(data?.id ?? null);
    };
    fetchUser();
  }, []);
  if (!userId) return null;
  return (
    <Link href={`/cart/${userId}`}>
      <LuShoppingCart className="w-6 h-6" />
    </Link>
  );
};

export default CartLink;
