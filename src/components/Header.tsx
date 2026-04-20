import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="fixed top-0 left-64 right-0 z-50 border-b">
      <nav className="mx-4 px-6 h-16 flex items-center justify-between">
        <h3>Reports</h3>

        <div className="flex items-center gap-4">
          <button className="p-2 rounded-lg bg-white">
            <Image
              src="/icons/nott.png"
              width={24}
              height={24}
              alt="settings"
            />
          </button>

          <button className="p-2 rounded-lg bg-white">
            <Image
              src="/icons/settt.png"
              width={24}
              height={24}
              alt="settings"
            />
          </button>

          <div className="flex items-center gap-3 cursor-pointer">
            <Image
              src="/users/user.jpg"
              width={36}
              height={36}
              className="rounded-lg"
              alt="user"
            />

            <div className="flex items-center gap-4">
              <div className="hidden  leading-tight sm:flex flex-col">
                <h3 className="text-sm font-medium text-gray-800">
                  Robert Fox
                </h3>
                <span className="text-xs text-gray-500">
                  robert.fox@gmail.com
                </span>
              </div>

              <div className="flex items-center bg-white justify-center w-6 h-6 rounded-sm">
                <Image src="/icons/arr.png" width={16} height={16} alt="menu" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
