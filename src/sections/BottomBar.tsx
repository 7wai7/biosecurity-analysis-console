import EventLog from "../components/EventLog";
import ToolTip from "../components/ui/ToolTip";

export default function BottomBar() {
  return (
    <footer
      className="
        relative
        flex items-center justify-between
        gap-6
        px-10 pt-2 pb-3
        font-mono text-[11px]
        border-t border-emerald-500/20
        bg-black/70
        backdrop-blur-sm
        text-gray-400
      "
    >
      {/* CENTER — DATA BUS */}
      <div className="flex flex-col items-center min-w-[320px]">
        <p className="text-[10px] tracking-[0.3em]">TELEMETRY BUS</p>

        <div className="relative w-full h-0.75 mt-1 bg-emerald-500/10 overflow-hidden">
          <div
            className="
              absolute inset-0
              bg-linear-to-r from-transparent via-emerald-400/60 to-transparent
              animate-[pulse_3s_ease_infinite]
            "
          />
        </div>

        <p className="mt-1 text-[10px]">LINK STATUS: SYNCHRONIZED</p>
      </div>

      {/* RIGHT — PERFORMANCE */}
      <div className="flex flex-col">
        <div className="grid grid-cols-[minmax(100px,0.5fr)_minmax(100px,0.5fr)_minmax(100px,1fr)_minmax(100px,1fr)] items-center">
          <Metric label="CPU" value="38%" info="Compute node load" />
          <Metric label="MEM" value="62%" info="Memory utilization" />
          <Metric label="LAT" value="17ms" info="IO latency" />
          <Metric
            label="ENV"
            value="STABLE"
            info="Environmental safety status"
          />
        </div>
        <div className="grid grid-cols-[minmax(100px,0.5fr)_minmax(100px,0.5fr)_minmax(100px,1fr)_minmax(100px,1fr)] items-center">
          <Metric
            label="MODE"
            value="LIVE"
            info="System operating in live monitoring mode"
          />
          <Metric
            label="NODE"
            value="LV-426"
            info="Current remote biosecurity node"
          />
          <Metric
            label="UPTIME"
            value="02:41:18"
            info="Time since session initialization"
          />
          <Metric
            label="DATA RATE"
            value="1.24 GB/s"
            info="Live telemetry throughput"
          />
        </div>
      </div>

      {/* FLOATING EVENT LOG */}
      <EventLog />
    </footer>
  );
}

function Metric({
  label,
  value,
  info,
  accent,
  pulse,
}: {
  label: string;
  value: string;
  info: string;
  accent?: boolean;
  pulse?: boolean;
}) {
  return (
    <ToolTip content={info} contentClassName="text-[11px]">
      <span
        className={`
          flex items-center gap-1
          px-1 py-px
          rounded-sm
          whitespace-nowrap
          tracking-wide
          border border-transparent
          transition-colors
          ${
            accent ? "text-emerald-300" : "text-gray-400 hover:text-emerald-300"
          }
          hover:border-emerald-300/40
        `}
      >
        <span>{label}:</span>
        <span
          className={`
            text-gray-300
            ${pulse ? "animate-[heartbeat_1.4s_ease-in-out_infinite]" : ""}
          `}
        >
          {value}
        </span>
      </span>
    </ToolTip>
  );
}
