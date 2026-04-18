"use client";
import React from "react";

export default function Metrics() {
  const metrics = [
    { title: "Active Sales", value: 24064, last: 12 },
    { title: "Product Revenue", value: 15490, last: 9 },
    { title: "Product Sold", value: 2184, last: 7 },
    { title: "Conversion Rate", value: 12.5, last: 2, isPercent: true },
  ];

  return (
    <div className="mx-44 mt-6">
      <div className="grid grid-cols-4 gap-4">
        {metrics.map((metric, i) => (
          <div
            key={i}
            className="p-4 rounded-xl border border-zinc-200 bg-white hover:shadow-sm transition"
          >
            {/* Title */}
            <h2 className="text-sm text-zinc-500">{metric.title}</h2>

            {/* Value */}
            <p className="text-2xl font-semibold mt-1">
              {metric.isPercent
                ? `${metric.value}%`
                : metric.value.toLocaleString()}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between mt-3 text-sm">
              <span className="text-zinc-400">Last month</span>

              <span
                className={`font-medium ${
                  metric.last >= 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                +{metric.last}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
