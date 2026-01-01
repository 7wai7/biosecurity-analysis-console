import clsx from "clsx";

export default function CenterView() {
  return (
    <section
      className={clsx(
        "flex-1 m-4 flex items-center justify-center",
        "mask-radial-[50%_50%] mask-radial-from-30%",
        "bg-[rgba(255,255,255,0.02)]",
      )}
    >
      <p
        className={clsx(
          "text-gray-400 text-2xl",
          "mask-radial-at-center",
          "no-signal"
        )}
      >
        No signal.
      </p>
    </section>
  );
}
