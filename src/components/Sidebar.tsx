"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const navMenu = [
    { path: "/dashboard", label: "Dashboard", icon: "/icons/dash.png" },
    { path: "/market-place", label: "Marketplace", icon: "/icons/tools.png" },
    { path: "/reports", label: "Reports", icon: "/icons/Note_Linear.png" },
    { path: "/tools", label: "Tools", icon: "/icons/ace.png" },
    { path: "/payolts", label: "Payments", icon: "/icons/arch.png" },
  ];

  const secondaryMenu = [
    { path: "/settings", label: "Settings", icon: "/icons/settt.png" },
    { path: "/help-center", label: "Help Center", icon: "/icons/fresh.png" },
  ];

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-white border-r flex flex-col justify-between">
      {/* Top */}
      <div>
        {/* Logo */}
        <div className="h-16 flex items-center px-6 border-b">
          <Image src="/logo/logo_02.png" width={32} height={32} alt="logo" />
          <span className="ml-2 font-semibold text-gray-800">Orbital</span>
        </div>

        {/* Main menu */}
        <div className="px-4 py-6">
          <p className="text-xs text-gray-400 uppercase mb-3 px-2">Main</p>

          <div className="flex flex-col gap-1">
            {navMenu.map((item) => {
              const isActive = pathname === item.path;

              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`flex items-center gap-3 px-3 py-3 rounded-lg transition
                    ${
                      isActive
                        ? "bg-gray-1 text-black font-medium"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                >
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={20}
                    height={20}
                  />
                  <span className="text-sm">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="px-4 pb-6">
        <div className="flex flex-col gap-1">
          {secondaryMenu.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 transition"
            >
              <Image src={item.icon} alt={item.label} width={20} height={20} />
              <span className="text-sm">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
