"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function Tab() {
  const tabs = ["Overview", "Sales", "Order"];
  const [active, setActive] = useState("Overview");

  return (
    <div className="flex items-center justify-between border-zinc-200 pb-3 mx-44">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 bg-zinc-100 p-1 rounded-sm">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-4 py-1.5 text-sm rounded-sm transition-all
                ${
                  active === tab
                    ? "bg-white shadow text-black"
                    : "text-zinc-500 hover:text-black"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="border-r h-4" />

        <button className="flex items-center gap-1 text-sm text-zinc-600 hover:text-black transition border px-3 py-2 rounded-sm">
          <Image
            src={"/icons/add.png"}
            width={18}
            height={18}
            alt="add"
            className="grayscale brightness-0"
          />
          Add widget
        </button>
      </div>

      <div>
        <button className="flex items-center justify-between gap-4 px-3 py-2 rounded-sm text-white bg-zinc-900 transition text-sm">
          <Image
            src={"/icons/cloud.png"}
            width={18}
            height={18}
            alt="cloud"
            className="invert"
          />
          Export
        </button>
      </div>
    </div>
  );
}
