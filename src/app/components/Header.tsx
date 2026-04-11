import React from "react";
import { Search } from "lucide-react";

export default function Header() {
  return (
    <section className="fixed right-0 w-full">
      <nav>
        <div>
          <h1>Dasboard</h1>
        </div>
        <div>
          <button>
            <Search />
          </button>
          <div>
            <p>AM</p>
          </div>
        </div>
      </nav>
    </section>
  );
}
