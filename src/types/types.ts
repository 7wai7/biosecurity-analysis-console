export type Log = {
  time: number;
  content: string;
  level: LogLevel;
};

export type LogLevel = "INFO" | "WARN" | "ERROR";

export type VitalConfig = {
  label: string;
  unit: string;
  value: number;

  minCritical: number; // смертельно низьке
  normal: number; // ідеал (зелений)
  maxCritical: number; // смертельно високе
};
