"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Sidebar() {
  const pathname = usePathname();

  const navMenu = [
    { path: "/dashboard", link: "Dashboard", img: "/icons/dash.png" },
    { path: "/market-place", link: "MarketPlace", img: "/icons/tools.png" },
    { path: "/reports", link: "Reports", img: "/icons/Note_Linear.png" },
    { path: "/tools", link: "Tools", img: "/icons/ace.png" },
    { path: "/payolts", link: "Payolts", img: "/icons/arch.png" },
    { path: "/settings", link: "Settings", img: "/icons/settt.png" },
    { path: "/help-center", link: "Help Center", img: "/icons/fresh.png" },
  ];

  return (
    <aside className="fixed top-0 left-0 h-screen w-72 bg-white border-r z-40 ">
      <div className="flex flex-col h-full p-4 py-6">
        <div className="flex items-center gap-2 mb-8">
          <Image src="/logo/logo_02.png" width={36} height={36} alt="logo" />
          <span className="font-semibold text-lg">Orbital</span>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="text-xs text-gray-400 uppercase mb-2">Main</h4>

          {navMenu.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`flex items-center gap-3 px-3 py-3 rounded-lg text-sm transition
                  ${
                    isActive
                      ? "bg-gray-100 text-black font-medium"
                      : "text-gray-600 hover:bg-gray-50"
                  }
                `}
              >
                <Image src={item.img} alt={item.link} width={20} height={20} />
                {item.link}
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
