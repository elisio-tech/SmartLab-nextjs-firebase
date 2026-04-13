import Image from "next/image";
import Link from "next/link";
import React from "react";

const navMenu = [
  {
    navItem: "Main",
    items: [
      {
        name: "Dashboard",
        path: "/",
        icon: "/icons/dashboard.png",
      },
      {
        name: "AI Assistent",
        path: "/ia-assistent",
        icon: "/icons/award.png",
      },
      {
        name: "users",
        path: "/users",
        icon: "/icons/shield.png",
      },
      {
        name: "projects",
        path: "/projects",
        icon: "/icons/folder.png",
      },
    ],
  },
];

export default function Sidebar() {
  return (
    <div>
      <nav>
        <button>
          <Image
            src={"/public/icons/logOut.svg"}
            width={30}
            height={30}
            alt="LogOut"
          />
        </button>
      </nav>
    </div>
  );
}
