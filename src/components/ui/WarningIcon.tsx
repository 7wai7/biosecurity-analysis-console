type WarningIconProps = {
  size?: number;
  className?: string;
  color?: string;
  strokeBgColor?: string;
};

type Point = {
  x: number;
  y: number;
};

export default function WarningIcon({
  size = 64,
  className,
  color = "#F5A623",
  strokeBgColor = "#865911",
}: WarningIconProps) {
  const side = 80;
  const height = (Math.sqrt(3) / 2) * side;
  const bevel = 10;

  const cx = 50;
  const cy = 50;

  // Вершини рівностороннього трикутника
  const top = { x: cx, y: cy - height / 2 };
  const left = { x: cx - side / 2, y: cy + height / 2 };
  const right = { x: cx + side / 2, y: cy + height / 2 };

  function offset(p1: Point, p2: Point, distance: number) {
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    const len = Math.sqrt(dx * dx + dy * dy);
    return { x: p1.x + (dx / len) * distance, y: p1.y + (dy / len) * distance };
  }

  // Top bevel
  const topLeft = offset(top, left, bevel);
  const topRight = offset(top, right, bevel);

  // Left bevel
  const leftTop = offset(left, top, bevel);
  const leftBottom = offset(left, right, bevel);

  // Right bevel
  const rightTop = offset(right, top, bevel);
  const rightBottom = offset(right, left, bevel);

  const path = `
    M ${topLeft.x} ${topLeft.y}
    L ${topRight.x} ${topRight.y}
    L ${rightTop.x} ${rightTop.y}
    L ${rightBottom.x} ${rightBottom.y}
    L ${leftBottom.x} ${leftBottom.y}
    L ${leftTop.x} ${leftTop.y}
    Z
  `;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d={path} stroke={strokeBgColor} strokeWidth="4" fill="none" />
      <path d={path} stroke={color} strokeWidth="1" fill="none" />
      <rect
        x="47"
        y="35"
        width="6"
        height="30"
        rx="3"
        fill={color}
        stroke={strokeBgColor}
        strokeWidth="1"
      />
      <circle
        cx="50"
        cy="72"
        r="4"
        fill={color}
        stroke={strokeBgColor}
        strokeWidth="1"
      />
    </svg>
  );
}
