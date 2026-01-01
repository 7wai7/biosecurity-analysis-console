import clsx from "clsx";
import { vitals } from "../constants/vitals";
import getVitalColor from "../utils/getVitalColor";
import HeartbeatWaveform from "../components/HeartbeatWaveform";
import WarningIcon from "../components/ui/WarningIcon";

export default function RightPanel() {
  return (
    <section className="mr-4 flex flex-col items-end justify-between">
      <div>
        <div className="flex flex-row items-center">
          <WarningIcon size={164} className="pulse-warning" />
          <div>
            <div className="relative pr-6 overflow-hidden mb-4">
              <div
                className={clsx(
                  "absolute inset-0",
                  "bg-[repeating-linear-gradient(-45deg,rgba(255,166,0,0.3)_0,rgba(255,166,0,0.3)_20px,transparent_20px,transparent_30px)] bg-size-[42px_42px]",
                  "animate-[stripes-move_1s_linear_infinite]",
                  "mask-[linear-gradient(to_right,transparent,black)] [-webkit-mask-image:linear-gradient(to_right,transparent,black)]"
                )}
              />
              <p className="relative text-gray-300 text-5xl font-serif">
                WARNING
              </p>
            </div>
            <p className="text-orange-200">UNIDENTIFIED ORGANISM</p>
          </div>
        </div>
        <div className="flex flex-row justify-between w-full mb-6">
          <p className="px-2 py-0.5 w-max text-gray-300 text-xs bg-yellow-950">
            INFECTION STATUS:{" "}
            <span className="text-red-400 font-semibold">{`[ACTIVE]`}</span>
          </p>
          <button className="text-orange-200 text-xs hover-scale">{`[REVIEW]`}</button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {vitals.map((v) => {
          const color = getVitalColor(
            v.value,
            v.minCritical,
            v.normal,
            v.maxCritical
          );

          return (
            <div
              key={v.label}
              className="grid grid-cols-[minmax(20px,2fr)_minmax(20px,auto)] items-center gap-x-4 gap-y-1"
            >
              <p className="text-sm text-gray-300 text-start">
                {v.label}: {v.value} {v.unit}
              </p>

              <div
                className="h-1 w-30 transition-colors duration-300"
                style={{ backgroundColor: color }}
              />
            </div>
          );
        })}
      </div>

      <HeartbeatWaveform />
    </section>
  );
}
