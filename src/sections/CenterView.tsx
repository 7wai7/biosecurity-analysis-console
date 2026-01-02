export default function CenterView() {
  return (
    <section
      className="
        relative flex flex-col items-center justify-between flex-1 m-4
      "
    >
      {/* Фоновий ефект */}
      <div
        className="
          absolute inset-0
          mask-radial-[50%_50%] mask-radial-from-40%
          animate-[bg-pulse_4s_ease_infinite]
        "
      >
        <div
          className="
            absolute inset-0 pointer-events-none 
            bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.05),rgba(255,255,255,0.05)_1px,transparent_1px,transparent_3px)]
          "
        ></div>
      </div>

      {/* Верхня лінія */}
      <div className="w-40 h-2 border border-gray-300/70 border-b-0"></div>

      <div className="flex items-center justify-between w-full">
        <div className="h-20 border border-r-gray-300/70"></div>

        {/* Центр */}
        <p
          className="
          text-gray-400 text-xl
          mask-radial-at-center
          animate-[flashing_2s_steps(1,end)_infinite]
        "
        >
          No signal.
        </p>

        <div className="h-20 border border-l-gray-300/70"></div>
      </div>

      {/* Нижня лінія */}
      <div className="w-40 h-2 border border-gray-300/70 border-t-0"></div>

      {/* Точки у кутах */}
      {pointsPositions.map((p, i) => (
        <div
          key={i}
          className={`
            ${p} absolute w-0.5 h-0.5 rounded-full bg-gray-300/70
          `}
        ></div>
      ))}
    </section>
  );
}

const pointsOffset = "5%";
const pointsPositions = [
  `top-[${pointsOffset}] right-[${pointsOffset}]`,
  `bottom-[${pointsOffset}] right-[${pointsOffset}]`,
  `bottom-[${pointsOffset}] left-[${pointsOffset}]`,
  `top-[${pointsOffset}] left-[${pointsOffset}]`,
];
