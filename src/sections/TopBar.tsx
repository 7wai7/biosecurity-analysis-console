export default function TopBar() {
  return (
    <header
      className="
        relative
        flex items-center justify-between
        font-mono text-[11px]
        px-10 py-2
        border-b border-emerald-500/20
        bg-black
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
          <div className="scan-bar">
            <div className="scan-bar__fill" />
            <div className="scan-bar__pulse" />
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
