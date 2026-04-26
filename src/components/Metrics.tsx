import Image from "next/image";
import React from "react";

export default function Metrics() {
  const data = [
    {
      icon: "/icons/external.png",
      title: "Montly growin",
      percentage: 36.4,
      color: "bg-red-400",
    },
    {
      icon: "/icons/ace.png",
      title: "Clients Numbers",
      percentage: 2.4,
      color: "bg-blue-400",
    },
    {
      icon: "/icons/eclipse.png",
      title: "Success Cases",
      percentage: 97.5,
      color: "bg-emerald-200",
    },
    {
      icon: "/icons/out.png",
      title: "Return Clients",
      percentage: 62.1,
      color: "bg-orange-500",
    },
  ];
  return (
    <div className="mt-4 grid grid-cols-[2fr_1fr]">
      <div className="bg-zinc-50 p-2 rounded-md">
        <div className="p-4 mb-8">
          <h4 className="mb-2 text-gray-500">Total profile</h4>
          <h1 className="mb-12 text-6xl text-zinc-700 ">1,389</h1>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {data.map((item, i) => (
            <div key={i} className="bg-white rounded-md p-3">
              <div className="flex items-center gap-2">
                <div
                  className={`w-10 h-10 flex justify-center items-center rounded-sm ${item.color}`}
                >
                  <Image src={item.icon} width={20} height={20} alt="image" />
                </div>
                <h2 className="text-md text-gray-600">{item.title}</h2>
              </div>
              <h6 className="mt-4 text-2xl text-gray-500">
                {item.percentage}%
              </h6>
            </div>
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
}
