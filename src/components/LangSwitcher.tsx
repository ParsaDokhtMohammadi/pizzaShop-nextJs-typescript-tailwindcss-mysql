"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  function switchLocale(newLocale: string) {
    if (!pathname) return;
    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPath = segments.join("/");

    router.push(newPath);
  }

  return (
    <div className="flex gap-2">
      <button
        onClick={locale === "fa" ? () => switchLocale("en") : () => switchLocale("fa")}
        className={`w-8 h-8 rounded-full bg-primary hover:bg-primary-hover cursor-pointer font-semibold`}
      >
       {locale === "fa" ? "en":"fa"}
      </button>
     
    </div>
  );
}
