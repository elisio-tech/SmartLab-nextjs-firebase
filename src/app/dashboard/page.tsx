import React from "react";
import Layout from "./layout";
import Tab from "@/components/Tab";
import Metrics from "@/components/Metrics";

export default function page() {
  return (
    <div className="mt-24 ml-70 mx-12">
      <Tab />
      <Metrics />
    </div>
  );
}
