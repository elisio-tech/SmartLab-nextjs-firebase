import { Sidebar15 } from "@/components/sidebar/Sidebar";
import React from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Sidebar15 />
      {children}
    </div>
  );
}
