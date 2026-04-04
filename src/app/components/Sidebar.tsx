import React from "react";
import { navLinkAdmin, navLinks } from "./data/navLinks";
import Link from "next/link";
import { logOut } from "../service/auth-service";

export default function AppSidebar() {
  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="fixed top-0 left-4 bottom-0">
      <nav className="flex justify-between flex-col h-screen border-zinc-200 border-r">
        <div className="">
          <h1></h1>
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-sm uppercase mb-2">Main</h2>
              <div className="flex gap-y-4 flex-col">
                {navLinks.map((link, i) => (
                  <div key={i}>
                    <div className="flex items-center gap-x-4">
                      <div>{link.icon}</div>
                      <Link href={link.path}>{link.name}</Link>
                    </div>
                    {link.submenu && (
                      <div className="mt-2 ml-4">
                        {link.submenu.map((sublink, i) => (
                          <div key={i}>
                            <Link href={sublink.path}>{sublink.name}</Link>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div>
                <h2 className="text-sm uppercase mb-2">Admin</h2>
                <div className="flex flex-col gap-y-4">
                  {navLinkAdmin.map((link, i) => (
                    <div key={i}>
                      <div>
                        <Link href={link.path}>{link.name}</Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <button onClick={() => handleLogOut()}>Sair</button>
        </div>
      </nav>
    </section>
  );
}
