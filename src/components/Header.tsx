import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  const menu = [
    {
      name: "Notification",
      path: "/dashboard",
      icon: "/icons/notification.png",
    },
    {
      name: "Pacientes",
      path: "/dashboard/patients",
      icon: "/icons/search.png",
    },
  ];

  return (
    <header className="fixed top-0 right-0 left-16 border-b py-6">
      <nav className="flex justify-between items-center mx-8">
        <h2>Dashboard</h2>
        <div>
          <div className="flex items-center gap-4">
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
        </div>
      </nav>
    </header>
  );
}
