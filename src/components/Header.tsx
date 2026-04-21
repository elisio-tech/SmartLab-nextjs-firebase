"use client";

import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <header className="fixed top-0 left-64 right-0 h-16 bg-white border-b flex items-center justify-between px-6 z-10">
      <div>
        <h1 className="text-lg  text-gray-800">Dashboard</h1>
        <p className="text-xs text-gray-400">Welcome back 👋</p>
      </div>

      <div className="flex items-center gap-3">
        <button className="relative p-2 rounded-lg bg-gray-100 transition">
          <Image
            src="/icons/nott.png"
            width={20}
            height={20}
            alt="notifications"
          />

          <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full text-[8px] text-white flex justify-center items-center">
            <span>1</span>
          </div>
        </button>

        <div className="w-px h-4 bg-gray-200 mx-2" />

        <div className="flex items-center gap-4 pl-2  py-1 rounded-sm">
          <Image
            src="/users/user.jpg"
            width={36}
            height={36}
            className="rounded-sm object-cover"
            alt="user"
          />

          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-md font-medium text-gray-800">
              Robert Fox
            </span>
            <span className="text-xs text-gray-400">robert.fox@gmail.com</span>
          </div>

          <Image
            src="/icons/arr.png"
            width={16}
            height={16}
            alt="menu"
            className="opacity-60 cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
}
