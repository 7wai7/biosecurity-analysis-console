export default function TopBar() {
  return (
    <header className="flex flex-row justify-between font-mono py-1 mx-10 text-sm">
      <div className="flex flex-col gap-1 items-start text-gray-300">
        <p className="">
          SYSTEM: <span>BIOSCAN-IX</span>
        </p>
        <p>
          SECURITY LEVEL: <span>OMEGA</span>
        </p>
        <p>
          SESSION ID: <span>#SD-249/1063</span>
        </p>
      </div>
      <div className="text-gray-300">
        OBJECT IDENTIFICATION :: IN PROGRESS
      </div>
      <div className="flex flex-col gap-1 items-start text-gray-300">
        <p>STATUS: ACTIVE</p>
        <p>SIGNAL: STABLE</p>
        <p>SYNC: 92%</p>
      </div>
    </header>
  );
}
