import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  const navItems = [
    "Dashboard",
    "Patients",
    "Appointments",
    "Docs",
    "Study Materials",
  ];

  return (
    <header>
      <div>
        <div>
          <Image src={"/logo/logo_02.png"} alt="logo" width={40} height={40} />
          <span>Symptra</span>
        </div>

        <div>
          {navItems.map((item) => (
            <div key={item}>
              <Link href={`/${item.toLowerCase()}`}>{item}</Link>
            </div>
          ))}
        </div>

        <div>
          <div>
            <div>
              <Image
                src={"/icons/sett.png"}
                width={40}
                height={40}
                alt="user"
              />
            </div>
          </div>
          <div>
            <Image src={"/users/user.jpg"} width={40} height={40} alt="user" />
            <div>
              <h3>Robert Fox</h3>
              <span>Surgean</span>
            </div>
            <Image
              src={"/icons/arrowDown.png"}
              width={40}
              height={40}
              alt="user"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
