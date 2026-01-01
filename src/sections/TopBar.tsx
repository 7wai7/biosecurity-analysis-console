export default function TopBar() {
  return (
    <header className="flex flex-row justify-between font-mono py-1 mx-10 text-xs">
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
      <div className="text-gray-300 text-sm flex flex-col gap-1">
        <div className="bg-(--darkgray) w-full h-1"></div>
        <p className="bg-(--darkgray) py-2 px-10">OBJECT IDENTIFICATION :: IN PROGRESS</p>
      </div>
      <div className="flex flex-col gap-1 items-start text-gray-300">
        <p>STATUS: ACTIVE</p>
        <p>SIGNAL: STABLE</p>
        <p>SYNC: 92%</p>
      </div>
    </header>
  );
}
