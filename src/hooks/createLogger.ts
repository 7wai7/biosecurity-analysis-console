import type { Log } from "../types/types";

interface IOptions {
  ticker?: (logs: Log[]) => void;
  maxDelay?: number;
}

export default function createLogger(
  logs: Log[],
  { ticker, maxDelay = 1000 }: IOptions = {}
) {
  let currentLogs: Log[] = [];
  let index = 0;
  let timeoutId: number | null = null;

  function tick() {
    if (index >= logs.length) return;

    const nextLog = logs[index++];
    currentLogs = [...currentLogs, nextLog];
    ticker?.(currentLogs);

    const delay = 10 + Math.random() * maxDelay;
    timeoutId = window.setTimeout(tick, delay);
  }

  const cancel = () => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
  };

  const start = () => {
    cancel();
    index = 0;
    currentLogs = [];
    tick();
  };

  return { logs: currentLogs, start, cancel };
}
