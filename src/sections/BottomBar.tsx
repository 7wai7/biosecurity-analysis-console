import EventLog from "../components/EventLog";
import ToolTip from "../components/ui/ToolTip";

export default function BottomBar() {
  return (
    <footer
      className="
        relative
        px-10 pt-2 pb-5
        flex items-center justify-between
        font-mono text-[11px]
        border-t border-emerald-500/20
        bg-black
      "
    >
      {/* LEFT — SYSTEM STATUS */}
      <div className="flex flex-col gap-0.5 text-gray-400 text-start">
        <p>
          SYSTEM STATE:
          <span className="ml-1 text-emerald-400">OPERATIONAL</span>
        </p>
        <p>
          MODE:
          <span className="ml-1 text-gray-300">QUARANTINE / OBSERVE</span>
        </p>
        <p>
          ACTIVE MODULES:
          <span className="ml-1 text-gray-300">SCAN · LOG · AI</span>
        </p>
      </div>

      {/* RIGHT — TELEMETRY */}
      <div className="flex flex-col gap-1">
        <div className="grid grid-cols-[minmax(200px,2fr)_minmax(200px,auto)_minmax(200px,auto)] items-center gap-x-4 gap-y-1">
          <Metric label="UPTIME" value="01:42:19" />
          <Metric label="DATA RATE" value="248 KB/s" />
          <Metric label="LATENCY" value="12 ms" />
        </div>
        <div className="grid grid-cols-[minmax(200px,2fr)_minmax(200px,auto)_minmax(200px,auto)] items-center gap-x-4 gap-y-1">
          <Metric label="NEURAL ACTIVITY" value="IRREGULAR" />
          <Metric label="IMMUNE RESPONSE" value="SUPPRESSED" />
          <Metric label="THERMAL ANOMALY" value="LOCALIZED" />
        </div>
      </div>

      {/* FLOATING EVENT LOG */}
      <EventLog />
    </footer>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <ToolTip content="info" contentClassName="text-[11px]">
      <span
        className="
          flex gap-1 rounded-sm px-1 whitespace-nowrap
          border border-transparent
          hover:border-emerald-300/50
        "
      >
        <span className="text-gray-400">{label}:</span>
        <span className="text-emerald-400">{value}</span>
      </span>
    </ToolTip>
  );
}
