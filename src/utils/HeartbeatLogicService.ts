export default class HeartbeatLogicService {
  private canvas: HTMLCanvasElement;

  y = 0; // позиція
  vy = 0; // швидкість
  private lineSpeed = 2.4;
  private t = 0;

  private p: IPoint[] = [];

  // параметри пружини
  stiffness = 1200; // k жорсткість
  damping = 20; // c

  bpm = 60;
  private lastBeat = performance.now(); // ms

  private dt = 0; // timestep ms
  private lastUpdate = performance.now(); // ms

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
  }

  // імпульс
  beat(power: number) {
    this.vy += -power;
  }

  update() {
    const now = performance.now();
    this.dt = (now - this.lastUpdate) / 1000;
    this.lastUpdate = now;

    // scheduler
    if (this.bpm > 0) {
      const periodMs = 60000 / this.bpm;
      if (now - this.lastBeat >= periodMs) {
        this.beat(5000);
        this.lastBeat += periodMs;
      }
    }

    // physics
    const force = -this.stiffness * this.y - this.damping * this.vy;
    this.vy += force * this.dt;
    this.y += this.vy * this.dt;

    this.t += this.lineSpeed;

    // семплінг кожні 2 апдейти
    // if ((this.t & 1) === 0) {
    this.p.push({
      t: this.t,
      y: this.y,
    });
    // }

    // тримаємо ~.5 ширини canvas по часу
    const maxAge = this.canvas.width / 2;
    while (this.p.length && this.t - this.p[0].t > maxAge) {
      this.p.shift();
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    if (this.p.length < 2) return;
    ctx.filter = "blur(1px)";

    const centerY = this.canvas.height / 2;
    const canvasWidth = this.canvas.width;
    const scaleX = 1; // px за tick
    const nowT = this.t;

    ctx.beginPath();

    for (let i = 0; i < this.p.length; i++) {
      const pt = this.p[i];

      // справа → зліва
      const x = canvasWidth / 2 - (nowT - pt.t) * scaleX;
      const y = centerY + pt.y;

      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.lineTo(canvasWidth / 2, centerY);
    ctx.lineTo(canvasWidth, centerY);

    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, centerY);
    ctx.lineTo(canvasWidth, centerY);
    ctx.strokeStyle = "red";
    ctx.lineWidth = 7;
    ctx.filter = "blur(17px)";
    ctx.stroke();
  }
}

interface IPoint {
  t: number;
  y: number;
}
