export default function LeftNavBar() {
  return (
    <div className="relative w-6 h-79 my-auto">
      <div className="absolute left-0 h-full z-50">
        <div
          className="
                bg-black pl-6 h-full w-6 overflow-hidden
                transition-[width] duration-300 ease-out hover:w-60
                border border-l-0 border-emerald-500/20 bevel rounded-tr-2xl rounded-br-2xl
            "
        >
          <nav
            className="
                text-gray-300 whitespace-nowrap w-full h-full flex flex-col justify-between pl-4 py-3
                [&>button]:w-full [&>button]:text-left [&>button]:p-2 [&>button]:text-xs
                [&>button]:transition-colors [&>button:hover]:text-emerald-300 [&>button:hover]:bg-white/10
            "
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
      </div>
    </div>
  );
}
