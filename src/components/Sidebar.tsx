import Image from "next/image";
import Link from "next/link";
import { Rocket } from "lucide-react";
import { menu, otherMenu, footer } from "@/data/menu";

export default function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 bottom-0 z-1 bg-zinc-100 border-r">
      <nav className="flex flex-col justify-between items-center h-screen py-4 px-4">
        <div>
          <div className="flex flex-col items-center gap-8">
            <Link href={"/dashboard"}>
              <Image
                src={"/logo/logo2.svg"}
                alt="logo"
                width={34}
                height={34}
              />
            </Link>
            <div className="h-px w-6 bg-gray-300" />
          </div>

          <div className="flex flex-col items-center mt-8 gap-8">
            <div className="flex flex-col gap-5">
              {menu.map((item, i) => (
                <div key={i}>
                  <Link href={item.path} className="">
                    <Image
                      src={item.icon}
                      alt={item.name}
                      width={22}
                      height={22}
                      className="grayscale brightness-0 opacity-80 hover:opacity-100"
                    />
                    {/*<span className="text-sm">{item.name}</span> */}
                  </Link>
                </div>
              ))}
            </div>

            <div className="h-px w-6 bg-gray-300" />

            <div className="flex flex-col gap-5">
              {otherMenu.map((item, i) => (
                <div key={i}>
                  <Link href={item.path} className="flex items-center gap-2">
                    <Image
                      src={item.icon}
                      alt={item.name}
                      width={22}
                      height={22}
                      className="grayscale brightness-0 opacity-80 hover:opacity-100"
                    />
                    {/*<span className="text-sm">{item.name}</span> */}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 items-center">
          {footer.map((item, i) => (
            <div key={i}>
              <Link href={item.path}>
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={22}
                  height={22}
                  className="grayscale brightness-0 opacity-80 hover:opacity-100"
                />
              </Link>
            </div>
          ))}
          <div>
            <button className="bg-orange-500 w-8 h-8 rounded-sm flex items-center justify-center cursor-pointer">
              <Rocket size={18} color="white" />
            </button>
          </div>
        </div>
      </nav>
    </aside>
  );
}
