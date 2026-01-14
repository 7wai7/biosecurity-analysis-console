import { useRef, useLayoutEffect, useState } from "react";
import clsx from "clsx";

interface Props {
  content: string;
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
}

export default function ToolTip({
  children,
  content,
  className,
  contentClassName,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState(directions.top);

  useLayoutEffect(() => {
    if (!contentRef.current || !triggerRef.current) return;

    const contentRect = contentRef.current.getBoundingClientRect();
    const triggerRect = triggerRef.current.getBoundingClientRect();

    const tooltipSize = {
      width: contentRect.width,
      height: contentRect.height,
    };

    setSize(tooltipSize);
    setDirection(resolveDirection(triggerRect, tooltipSize));
  }, [content]);

  const startWidth = direction.isVertical ? "12px" : "1px";
  const startHeight = direction.isVertical ? "1px" : "12px";

  const centerWidth = direction.isVertical ? `${size.width}px` : startWidth;
  const centerHeight = direction.isVertical ? startHeight : `${size.height}px`;

  const targetWidth = `${size.width}px`;
  const targetHeight = `${size.height}px`;

  return (
    <div className={clsx("relative w-min h-min", className)}>
      <div
        ref={triggerRef}
        className="cursor-pointer"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {children}
      </div>

      <div
        className={clsx(
          "absolute pointer-events-none z-50",
          direction.panelClassName
        )}
      >
        <div
          style={
            {
              "--start-width": startWidth,
              "--start-height": startHeight,
              "--center-width": centerWidth,
              "--center-height": centerHeight,
              "--target-width": targetWidth,
              "--target-height": targetHeight,
              "--translate": direction.translate,
            } as React.CSSProperties
          }
          className={clsx(
            `
              bg-black border border-white
              rounded-tl-xl rounded-br-xl bevel
              overflow-hidden
            `,
            isOpen
              ? "animate-[tooltip-panel_300ms_ease-out_both]"
              : "animate-[tooltip-panel-hide_300ms_ease-in_both]"
          )}
        >
          <div
            ref={contentRef}
            className={clsx(
              "px-3 py-2 text-white whitespace-nowrap text-xs w-min h-min",
              contentClassName,
              isOpen
                ? "animate-[tooltip-content_200ms_ease-out_250ms_both]"
                : "animate-[tooltip-content-hide_100ms_ease-in_both]"
            )}
          >
            {content}
          </div>
        </div>
      </div>
    </div>
  );
}

function resolveDirection(
  triggerRect: DOMRect,
  tooltipSize: { width: number; height: number }
) {
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  const top = triggerRect.top >= tooltipSize.height;
  const right = vw - triggerRect.right >= tooltipSize.width;
  const left = triggerRect.left >= tooltipSize.width;
  const bottom = vh - triggerRect.bottom >= tooltipSize.height;

  if (top && left && right) return directions.top;
  if (bottom && left && right) return directions.bottom;
  if (right) return directions.right;
  if (left) return directions.left;
  return directions.top; // fallback
}

const directions = {
  top: {
    panelClassName: "bottom-full left-1/2 -translate-x-1/2",
    isVertical: true,
    translate: "0, -10px",
  },
  bottom: {
    panelClassName: "top-full left-1/2 -translate-x-1/2",
    isVertical: true,
    translate: "0, 10px",
  },
  right: {
    panelClassName: "top-1/2 left-full -translate-y-1/2",
    isVertical: false,
    translate: "10px, 0",
  },
  left: {
    panelClassName: "top-1/2 right-full -translate-y-1/2",
    isVertical: false,
    translate: "-10px, 0",
  },
};
