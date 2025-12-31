import { useCallback, useRef } from "react";
import useHeartbeatCanvas from "../hooks/useHeartbeatCanvas";
import {
  useResizeDetector,
  type OnResizeCallback,
} from "react-resize-detector";
import clsx from "clsx";

export default function HeartbeatWaveform() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useHeartbeatCanvas(canvasRef);

  const onResize: OnResizeCallback = useCallback((payload) => {
    const canvas = canvasRef.current;
    if (!canvas || !payload.width || !payload.height) return;

    canvas.width = payload.width;
    canvas.height = payload.height;
  }, []);

  const { ref } = useResizeDetector({ onResize });

  return (
    <div
      ref={ref}
      className={clsx(
        "w-90 h-40 border border-white hide",
        "mask-[linear-gradient(to_right,transparent,black,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black,transparent)]"
      )}
    >
      <canvas ref={canvasRef} />
    </div>
  );
}
