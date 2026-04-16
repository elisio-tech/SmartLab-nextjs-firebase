"use client";
import Image from "next/image";
import Link from "next/link";
import { Rocket } from "lucide-react";
import { usePathname } from "next/navigation";
import { menu, otherMenu, footer } from "@/data/menu";
import { logOut } from "@/service/auth-service";

export default function Sidebar() {
  const pathname = usePathname();

  const handleLogOut = async () => {
    const isConfirmed = confirm("Do you really want to log out?");
    if (!isConfirmed) return;

    try {
      await logOut();
    } catch (err) {
      console.log("Erro ao sair", err);
    }
  };

  const linkStyle = (path: string) =>
    `flex items-center justify-center w-10 h-10 rounded-lg transition-all
     ${pathname === path ? "bg-gray-200" : "hover:bg-gray-200"}`;

  const iconStyle = (path: string) =>
    `grayscale brightness-0 transition-all
     ${pathname === path ? "opacity-100" : "opacity-70 hover:opacity-100"}`;

  return (
    <aside className="fixed top-0 left-0 bottom-0 z-10 border-r ">
      <nav className="flex flex-col justify-between items-center h-screen py-4 px-3">
        <div className="flex flex-col items-center gap-6">
          <Link href="/dashboard" className="hover:scale-105 transition">
            <Image src="/logo/logo_01.png" alt="logo" width={34} height={34} />
          </Link>

          <div className="w-6 h-px bg-gray-300" />

          {/* MAIN MENU */}
          <div className="flex flex-col gap-3">
            {menu.map((item, i) => (
              <Link key={i} href={item.path} className={linkStyle(item.path)}>
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={20}
                  height={20}
                  className={iconStyle(item.path)}
                />
              </Link>
            ))}
          </div>

          <div className="w-6 h-px bg-gray-300" />

          <div className="flex flex-col gap-3">
            {otherMenu.map((item, i) => (
              <Link
                key={i}
                href={item.path}
                className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-200 transition"
              >
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={20}
                  height={20}
                  className="grayscale brightness-0 opacity-80 hover:opacity-100"
                />
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-3">
          {footer.map((item, i) => (
            <Link
              key={i}
              href={item.path}
              className={
                "flex items-center justify-center w-10 h-10 rounded-lg transition-all hover:bg-gray-200"
              }
            >
              <Image
                src={item.icon}
                alt={item.name}
                width={20}
                height={20}
                className="grayscale brightness-0 opacity-70 hover:opacity-100"
              />
            </Link>
          ))}

          <button
            onClick={handleLogOut}
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-orange-500 hover:bg-orange-600 transition shadow-sm"
          >
            <Rocket size={18} className="text-white" />
          </button>
        </div>
      </nav>
    </aside>
  );
}
