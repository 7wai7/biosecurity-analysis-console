import { useEffect, useRef } from "react";
import HeartbeatLogicService from "../utils/HeartbeatLogicService";

export default function useHeartbeatCanvas(
  canvasRef: React.RefObject<HTMLCanvasElement | null>
) {
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const heartbeatLogic = new HeartbeatLogicService(canvas);

    const animate = () => {
      if (!ctx) return;
      heartbeatLogic.update();
      heartbeatLogic.draw(ctx);
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationRef.current);
  }, [canvasRef]);
}
