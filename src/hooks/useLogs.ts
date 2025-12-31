import createLogger from "./createLogger";
import { logs as constLogs } from "../constants/logs";
import { useCallback, useRef, useState } from "react";
import type { Log } from "../types/types";

export default function useLogs() {
  const [logs, setLogs] = useState<Log[]>([]);

  const ticker = useCallback((newLogs: Log[]) => {
    setLogs(newLogs);
  }, []);

  const logger = useRef(
    createLogger(constLogs, { ticker, maxDelay: 6000 })
  ).current;

  const start = useCallback(() => {
    logger.start();
  }, [logger]);

  const cancel = useCallback(() => {
    logger.cancel();
  }, [logger]);

  return {
    logs,
    start,
    cancel,
  };
}
