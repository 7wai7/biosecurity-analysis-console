import clsx from "clsx";
import { useState } from "react";

export default function LeftPanel() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section
      className={"h-79 w-6"}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div
        className={clsx(
          "bg-black pl-6 relative h-full transition-all duration-400 overflow-hidden",
          "border border-l-0 border-white bevel rounded-tr-2xl rounded-br-2xl",
          isOpen ? "w-60" : "w-6"
        )}
      >
        <nav
          className={clsx(
            "text-gray-300 whitespace-nowrap w-54 h-full flex flex-col justify-between pl-4 py-3 absolute",
            "[&>button]:w-full [&>button]:text-left [&>button]:p-2 [&>button]:text-sm [&>button]:transition-colors [&>button:hover]:text-white [&>button:hover]:bg-white/10"
          )}
        >
          <button>OVERVIEW</button>

          <button>ANATOMY MAP</button>

          <button>VITAL SIGNS</button>

          <button>INFECTION TRACE</button>

          <button>CELLULAR ANALYSIS</button>

          <button>GENETIC LOG</button>

          <button>ENVIRONMENT</button>

          <button>EVENT LOGS</button>
        </nav>
      </div>
    </section>
  );
}
