import clsx from "clsx";
import HeartbeatWaveform from "./HeartbeatWaveform";

export default function RightPanel() {
  return (
    <section className="mr-4 flex flex-col items-end">
      <div className="flex flex-row gap-6 items-center hide">
        <p className="text-orange-300 text-9xl pulse-warning">⚠</p>
        <div className="relative pr-4 overflow-hidden">
          <div
            className={clsx(
              "absolute inset-0",
              "bg-[repeating-linear-gradient(-45deg,rgba(255,166,0,0.3)_0,rgba(255,166,0,0.3)_20px,transparent_20px,transparent_30px)] bg-size-[42px_42px]",
              "animate-[stripes-move_1s_linear_infinite]",
              "mask-[linear-gradient(to_right,transparent,black)] [-webkit-mask-image:linear-gradient(to_right,transparent,black)]"
            )}
          />
          <p className="relative text-white text-6xl">WARNING</p>
        </div>
      </div>
      <HeartbeatWaveform />
    </section>
  );
}
