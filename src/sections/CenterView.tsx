import clsx from "clsx";

export default function CenterView() {
  return (
    <section
      className={clsx(
        "flex-1 m-4 flex items-center justify-center",
        "mask-radial-[50%_50%] mask-radial-from-30%",
        "bg-[rgba(255,255,255,1)] animate-[bg-pulse_4s_ease_infinite]",
      )}
    >
      <p
        className={clsx(
          "text-gray-400 text-xl",
          "mask-radial-at-center",
          "animate-[flashing_2s_steps(1,end)_infinite]"
        )}
      >
        No signal.
      </p>
    </section>
  );
}
