import React from "react";
import { navLinks } from "./data/navLinks";
import Link from "next/link";

export default function AppSidebar() {
  return (
    <section>
      <div>
        <h2>Main</h2>
        <div>
          {navLinks.map((link, i) => (
            <div key={i}>
              <div>
                <Link href={link.path}>{link.name}</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
