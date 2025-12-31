import type { VitalConfig } from "../types/types";

export const vitals: VitalConfig[] = [
  {
    label: "HEART RATE",
    unit: "BPM",
    value: 92,

    minCritical: 30,
    normal: 70,
    maxCritical: 180,
  },
  {
    label: "BLOOD PRESSURE",
    unit: "mmHg",
    value: 130,

    minCritical: 60,
    normal: 120,
    maxCritical: 200,
  },
  {
    label: "BODY TEMP",
    unit: "°C",
    value: 38.6,

    minCritical: 30,
    normal: 36.6,
    maxCritical: 42,
  },
  {
    label: "OXYGEN LEVEL",
    unit: "%",
    value: 96,

    minCritical: 70,
    normal: 98,
    maxCritical: 100,
  },
];

export const COLORS = {
  red: [220, 38, 38], // red-600
  orange: [234, 88, 12], // orange-600
  green: [22, 163, 74], // green-600
};
