import Image from "next/image";
import React from "react";

export default function Welcome() {
  return (
    <div className="mt-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl  text-gray-800">Welcome back, Diana 👋</h2>
          <p className="text-sm text-gray-400">
            Monitor key metrics and manage your platform
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition">
              <Image
                src="/icons/search-normal.png"
                width={18}
                height={18}
                alt="search"
              />
            </button>

            <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition">
              <Image
                src="/icons/settings10.png"
                width={18}
                height={18}
                alt="settings"
              />
            </button>
          </div>
          <div className="w-px h-4 bg-gray-200 mx-2" />

          <button className="flex items-center gap-4 bg-gray-700 text-white px-4 py-2.5 rounded-lg shadow-sm transition">
            <Image
              src="/icons/white-cloud.png"
              width={18}
              height={18}
              alt="add"
            />
            <span className="text-sm font-medium">Export</span>
          </button>
        </div>
      </div>
    </div>
  );
}
