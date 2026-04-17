import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  const menu = [
    {
      name: "Notification",
      path: "/dashboard",
      icon: "/icons/sear.png",
    },
    {
      name: "Pacientes",
      path: "/dashboard/patients",
      icon: "/icons/noti.png",
    },
  ];

  return (
    <header className="fixed top-0 right-0 left-16 border-b py-4">
      <nav className="flex justify-between items-center mx-8">
        <h2 className="">Dashboard</h2>
        <div className="flex justify-center items-center gap-8">
          <div className="flex items-center gap-8">
            {menu.map((item, i) => (
              <div key={i} className="flex justify-center">
                <Link href={item.path}>
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={20}
                    height={20}
                    className="grayscale brightness-0 opacity-70 hover:opacity-100"
                  />
                </Link>
              </div>
            ))}
          </div>
          <div className="border-r h-6" />
          <div className="flex justify-center items-center w-10 h-10 rounded-full bg-orange-500 border-2 cursor-pointer">
            <span className="text-sm text-violet-50">JB</span>
          </div>
        </div>
      </nav>
    </header>
  );
}
