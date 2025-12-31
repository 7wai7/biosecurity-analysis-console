import clsx from "clsx";
import type { Log } from "../types/types";
import { formatTimeInput } from "../utils/date";
import { useEffect, useState } from "react";
import useLogs from "../hooks/useLogs";

export default function EventLog() {
  const [isOpen, setIsOpen] = useState(true);
  const { logs, start, cancel } = useLogs();

  useEffect(() => {
    start();
    return () => cancel();
  }, [start, cancel]);

  return (
    <div
      className="w-[30%] relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div
        className={clsx(
          "absolute bottom-0 w-full overflow-hidden bg-black border border-white bevel rounded-tr-2xl rounded-tl-2xl transition-all duration-300",
          isOpen ? "h-96" : "h-20"
        )}
      >
        <div className="absolute bottom-0 w-full flex flex-col gap-0.5 p-2 pt-4">
          {logs.map((l, index) => (
            <LogItem key={index} log={l} />
          ))}
        </div>
      </div>
    </div>
  );
}

function LogItem({ log }: { log: Log }) {
  return (
    <span className="text-white text-xs font-mono whitespace-pre-wrap break-all text-start">
      <span>{`> [${formatTimeInput(log.time)}]`}: </span>
      {log.content}
    </span>
  );
}
