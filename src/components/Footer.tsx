"use client";

import Link from "next/link";
import { robotoMono } from "@/lib/fonts";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className={`${robotoMono.className} bg-[#FDFCED] border-t border-gray-200`}
    >
      <div className="max-w-screen-xl mx-auto px-4 py-6 flex flex-col items-center space-y-4">
        <Link
          href="/contact"
          className="text-sm font-medium text-[#696956] hover:underline"
        >
          Contact us
        </Link>

        <div className="">
          <img
            src="/pistachionut.svg"
            alt=""
            className="w-8 h-8 object-contain"
          />
        </div>

        <p className="text-sm text-[#696956]">&copy; {year} Pistachio</p>
      </div>
    </footer>
  );
}
