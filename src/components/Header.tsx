import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <header>
      <nav>
        <div>
          <input type="text" placeholder="search" />
        </div>
        <div>
          <div>
            <button>
              <Image
                src={"/icons/settings.png"}
                alt="notification"
                width={20}
                height={18}
              />
            </button>
          </div>

          <div>
            <button>
              <Image
                src={"/icons/notification.png"}
                alt="notification"
                width={20}
                height={18}
              />
            </button>
          </div>

          <div>
            <button>
              <Image
                src={"/users/user-28.jpg"}
                alt="notification"
                width={40}
                height={40}
              />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
