import clsx from "clsx";
import type { Log } from "../types/types";
import { formatTimeInput } from "../utils/date";
import { useEffect, useState } from "react";
import useLogs from "../hooks/useLogs";

export default function EventLog() {
  const [isOpen, setIsOpen] = useState(false);
  const { logs, start, cancel } = useLogs();

  useEffect(() => {
    start();
    return () => cancel();
  }, [start, cancel]);

  return (
    <div
      className="w-[30%] absolute top-0"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div
        className={clsx(
          "absolute bottom-0 w-full overflow-hidden bg-black terminal-noise border border-emerald-500/20 bevel rounded-tr-2xl rounded-tl-2xl transition-[height] duration-300",
          isOpen ? "h-96" : "h-12"
        )}
      >
        <div
          className="
            absolute bottom-0 flex flex-col gap-0.5
            w-full p-2 pt-4
          "
        >
          {logs.map((l, index) => (
            <>
              <LogItem
                key={index}
                log={l}
                grip={
                  index === logs.length - 1 && (
                    <span className="text-emerald-400 animate-[pulse-warning_700ms_linear_infinite] ml-0.5">▌</span>
                  )
                }
              />
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

function LogItem({ log, grip }: { log: Log; grip?: React.ReactNode }) {
  return (
    <span
      className={clsx(
        "animate-[logFade_0.3s_ease-out] text-xs font-mono whitespace-pre-wrap break-all text-start",
        log.level === "INFO" && "text-gray-300",
        log.level === "WARN" && "text-amber-400",
        log.level === "ERROR" && "text-red-400"
      )}
    >
      <span>{`> [${formatTimeInput(log.time)}]`}: </span>
      {log.content}
      {grip}
    </span>
  );
}
