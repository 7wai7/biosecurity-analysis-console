import type { Log } from "../types/types";

// placeholders
export const logs: Log[] = [
  { time: Date.now(), content: "Hello world!", level: "INFO" },
  { time: Date.now(), content: "Scan initialized", level: "INFO" },
  { time: Date.now(), content: "Foreign cells detected", level: "WARN" },
  { time: Date.now(), content: "Immune response triggered", level: "WARN" },
  { time: Date.now(), content: "Mutation spike observed", level: "WARN" },
];
