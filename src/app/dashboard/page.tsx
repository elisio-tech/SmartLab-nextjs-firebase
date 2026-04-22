import React from "react";

import Tab from "@/components/Tab";
import Welcome from "@/components/Welcome";
import Metrics from "@/components/Metrics";

export default function page() {
  return (
    <div className="mt-24 ml-70 mx-12">
      <Tab />
      <Welcome />
      <Metrics />
    </div>
  );
}
