export const lerp = (a: number, b: number, t: number) =>
  a + (b - a) * t;

export const lerpColor = (c1: number[], c2: number[], t: number) =>
  `rgb(${c1.map((v, i) => Math.round(lerp(v, c2[i], t))).join(",")})`;
