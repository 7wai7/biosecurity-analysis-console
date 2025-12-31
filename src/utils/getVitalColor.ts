import { COLORS } from "../constants/vitals";
import { lerpColor } from "./interpolation";

export default function getVitalColor(
  value: number,
  min: number,
  normal: number,
  max: number
) {
  if (value <= min) return `rgb(${COLORS.red.join(",")})`;
  if (value >= max) return `rgb(${COLORS.red.join(",")})`;

  // min → normal (red → orange → green)
  if (value < normal) {
    const t = (value - min) / (normal - min);
    return t < 0.5
      ? lerpColor(COLORS.red, COLORS.orange, t * 2)
      : lerpColor(COLORS.orange, COLORS.green, (t - 0.5) * 2);
  }

  // normal → max (green → orange → red)
  const t = (value - normal) / (max - normal);
  return t < 0.5
    ? lerpColor(COLORS.green, COLORS.orange, t * 2)
    : lerpColor(COLORS.orange, COLORS.red, (t - 0.5) * 2);
}
