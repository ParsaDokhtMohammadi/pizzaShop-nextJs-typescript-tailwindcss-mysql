"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { LuShoppingCart } from "react-icons/lu";
import { ICartItem } from "@/types/types";

const CartLink = () => {
  const [cartCount, setCartCount] = useState<number>(0);
  const [userId , setUserId] = useState<number|null>(null)
  useEffect(() => {
    
    let mounted = true;
    const fetchUser = async () => {
      const res = await fetch("/api/getSession")
      if (!res.ok) return;
      const data = await res.json();
      setUserId(data?.id ?? null);
    };
    fetchUser();
    const fetchCart = async () => {
      try {
        const res = await fetch("/api/cart", { cache: "no-store" });
        if (!res.ok) return setCartCount(0);

        const json = await res.json();
        if (!mounted) return;

        // ✅ Sum up quantities
        const totalQuantity = Array.isArray(json.items)
          ? json.items.reduce((sum:number, item:ICartItem) => sum + (item.quantity || 0), 0)
          : 0;

        setCartCount(totalQuantity);
      } catch (err) {
        console.error("Failed to fetch cart:", err);
        if (mounted) setCartCount(0);
      }
    };

    fetchCart();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <Link href={`/cart/${userId}`} className="relative">
      {cartCount > 0 && (
        <div className="absolute bg-primary rounded-full px-1 text-[10px] bottom-3.5 left-4 text-white">
          {cartCount}
        </div>
      )}
      <LuShoppingCart className="w-6 h-6" />
    </Link>
  );
};

export default CartLink;







