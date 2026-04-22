import Image from "next/image";
import React from "react";

export default function Metrics() {
  const metrics = [
    {
      name: "Analytic Balance",
      value: 512,
      icon: "/icons/scan.png",
      trend: "+12%",
      highlight: true,
    },
    {
      name: "Pending Payouts",
      value: 134,
      icon: "/icons/ace.png",
      trend: "-4%",
    },
    {
      name: "Team",
      value: 12,
      icon: "/icons/folder120.png",
    },
    {
      name: "Conversations",
      value: 1260,
      icon: "/icons/out.png",
      trend: "+18%",
    },
  ];

  return (
    <div className="mt-8">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((item, i) => (
          <div
            key={i}
            className={`
              p-5 border transition-all duration-300
               hover:-translate-y-1
              ${
                item.highlight
                  ? "bg-orange-400 text-white border-transparent"
                  : "bg-white text-gray-800 border-gray-200"
              }
            `}
          >
            {/* TOP */}
            <div className="flex items-center justify-between mb-6">
              <div
                className={`
                  w-12 h-12 flex items-center justify-center rounded-xl
                  ${item.highlight ? "bg-white/20" : "bg-gray-100"}
                `}
              >
                <Image src={item.icon} width={22} height={22} alt={item.name} />
              </div>

              {item.trend && (
                <div
                  className={`
                    hidden items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-full
                 
                    transition-all duration-200 hover:scale-105
                    ${
                      item.trend.startsWith("+")
                        ? "bg-green-100/90 text-orange-700 border-green-200/50 shadow-green-100/50"
                        : "bg-red-100/90 text-red-600 border-red-200/50 shadow-red-100/50"
                    }
                  `}
                >
                  <span>{item.trend}</span>
                </div>
              )}
            </div>

            {/* TITLE */}
            <p
              className={`text-2xl ${
                item.highlight ? "text-white/80" : "text-gray-500"
              }`}
            >
              {item.name}
            </p>

            {/* VALUE */}
            <h1 className="text-3xl font-semibold mt-1">
              {item.value.toLocaleString()}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}
