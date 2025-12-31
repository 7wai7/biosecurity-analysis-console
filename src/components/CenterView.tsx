import clsx from "clsx";
import { useEffect, useState } from "react";

export default function CenterView() {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setIsHidden((prev) => !prev), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex-1 m-4 flex items-center justify-center">
      <p
        className={clsx(
          "text-gray-400 text-2xl",
          isHidden ? "invisible" : "visible"
        )}
      >
        No signal.
      </p>
    </section>
  );
}
