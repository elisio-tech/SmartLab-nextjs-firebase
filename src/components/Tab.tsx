import React from "react";
import Image from "next/image";
export default function Tab() {
  return (
    <div>
      <div className="flex items-center gap-3">
        <Image
          src={"/icons/folder120.png"}
          alt="folder"
          width={24}
          height={24}
        />
        <h3>Home Page</h3>
        <Image src={"/icons/arrow01.png"} alt="folder" width={20} height={20} />
        <Image
          src={"/icons/folder120.png"}
          alt="folder"
          width={24}
          height={24}
        />
        <h3>Users</h3>
      </div>
    </div>
  );
}
