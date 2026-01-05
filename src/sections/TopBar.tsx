export default function TopBar() {
  return (
    <header
      className="
        relative
        flex items-center justify-between
        font-mono text-[11px]
        px-10 py-2
        border-b border-emerald-500/20
        bg-black hide
      "
    >
      {/* LEFT — SYSTEM INFO */}
      <div className="flex flex-col gap-0.5 text-gray-400 tracking-wide">
        <p>
          SYSTEM:
          <span className="ml-1 text-emerald-400">BIOSCAN-IX</span>
        </p>
        <p>
          SECURITY LEVEL:
          <span className="ml-1 text-orange-400">OMEGA</span>
        </p>
        <p>
          SESSION ID:
          <span className="ml-1 text-gray-300">#SD-249/1063</span>
        </p>
      </div>

      {/* CENTER — ACTIVE PROCESS */}
      <div className="flex flex-col items-center gap-1 min-w-105">
        {/* top separator */}
        <div className="w-full h-px bg-linear-to-r from-transparent via-emerald-500/40 to-transparent" />

        <p
          className="
            px-6 py-1
            text-emerald-300
            tracking-[0.25em]
            text-[10px]
            bg-emerald-500/5
            border border-emerald-500/20
          "
        >
          OBJECT IDENTIFICATION :: IN PROGRESS
        </p>

        {/* animated scan bar */}
        <div className="w-full">
          <div
            className="
              relative w-full h-1 overflow-hidden
              bg-linear-to-r from-[rgba(120,255,180,0.05)] via-[rgba(120,255,180,0.15)] to-[rgba(120,255,180,0.05)]
            "
          >
            <div
              className="
                absolute inset-0 animate-[scan-flow_2.4s_linear_infinite]
                bg-[linear-gradient(90deg,transparent,rgba(120,255,180,0.4),rgba(120,255,180,0.8),rgba(120,255,180,0.4),transparent)]
              "
            />
            <div
              className="
                absolute top-0 left-[-30%]
                w-[30%] h-full
                bg-[linear-gradient(90deg,transparent,rgba(180,255,210,0.9),transparent)]
                blur-[2px]
                animate-[scan-pulse_2.4s_ease-in-out_infinite]
              "
            />
          </div>
        </div>
      </div>

      {/* RIGHT — STATUS */}
      <div className="flex flex-col gap-0.5 text-gray-400 tracking-wide text-right">
        <p>
          STATUS:
          <span className="ml-1 text-emerald-400">ACTIVE</span>
        </p>
        <p>
          SIGNAL:
          <span className="ml-1 text-emerald-300">STABLE</span>
        </p>
        <p>
          SYNC:
          <span className="ml-1 text-emerald-400">92%</span>
        </p>
      </div>
    </header>
  );
}
