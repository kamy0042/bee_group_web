import styles from "../styles/components/ConcernIllustration.module.scss";

export type Concern = "crown" | "hairline" | "full" | "scar";

type Point = [number, number];
type Dot = [number, number, number];

const round = (n: number) => Math.round(n * 10) / 10;

// eslint-disable-next-line no-unused-vars
type Density = (x: number, y: number) => number;

// SSR とクライアントで同じ結果になるよう、乱数は固定シードの線形合同法で生成する
const scatter = (density: Density, seed: number, step = 4.2): Dot[] => {
  let state = seed;
  const random = () => {
    state = (state * 9301 + 49297) % 233280;
    return state / 233280;
  };
  const dots: Dot[] = [];
  for (let gy = 0; gy <= 200; gy += step) {
    for (let gx = 0; gx <= 200; gx += step) {
      const x = gx + (random() - 0.5) * step;
      const y = gy + (random() - 0.5) * step;
      const size = 0.85 + random() * 0.6;
      if (random() < density(x, y)) dots.push([round(x), round(y), round(size)]);
    }
  }
  return dots;
};

const dotsToPath = (dots: Dot[]) =>
  dots.map(([x, y, r]) => `M${round(x - r)} ${y}a${r} ${r} 0 1 0 ${round(r * 2)} 0a${r} ${r} 0 1 0 ${round(-r * 2)} 0`).join("");

const toPath = (line: Point[]) => line.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x} ${y}`).join(" ");

const ellipseNorm = (x: number, y: number, cx: number, cy: number, rx: number, ry: number) =>
  ((x - cx) / rx) ** 2 + ((y - cy) / ry) ** 2;

const distanceToSegment = ([px, py]: Point, [ax, ay]: Point, [bx, by]: Point) => {
  const dx = bx - ax;
  const dy = by - ay;
  const t = Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / (dx * dx + dy * dy)));
  return Math.hypot(px - (ax + t * dx), py - (ay + t * dy));
};

const distanceToPolyline = (p: Point, line: Point[]) =>
  Math.min(...line.slice(1).map((point, i) => distanceToSegment(p, line[i], point)));

const yOnPolyline = (line: Point[], x: number) => {
  const i = line.findIndex(([px]) => px >= x);
  if (i === -1) return line[line.length - 1][1];
  if (i === 0) return line[0][1];
  const [x0, y0] = line[i - 1];
  const [x1, y1] = line[i];
  return y0 + ((y1 - y0) * (x - x0)) / (x1 - x0);
};

// 頭頂部を上から見た図（上側が顔の向き）
const insideTopHead = (x: number, y: number, limit: number) => ellipseNorm(x, y, 100, 106, 60, 74) < limit;

const PART_LINE: [Point, Point] = [
  [82, 48],
  [97, 128],
];

const SCAR_LINE: Point[] = [
  [122, 82],
  [131, 98],
  [135, 116],
  [133, 134],
  [126, 150],
];

const SCAR_STITCHES = SCAR_LINE.slice(1)
  .map(([bx, by], i) => {
    const [ax, ay] = SCAR_LINE[i];
    const length = Math.hypot(bx - ax, by - ay);
    const nx = (-(by - ay) / length) * 4;
    const ny = ((bx - ax) / length) * 4;
    const mx = (ax + bx) / 2;
    const my = (ay + by) / 2;
    return `M${round(mx - nx)} ${round(my - ny)}L${round(mx + nx)} ${round(my + ny)}`;
  })
  .join("");

// 生え際を正面から見た図
const M_LINE: Point[] = [
  [46, 88],
  [60, 70],
  [74, 56],
  [88, 66],
  [100, 72],
  [112, 66],
  [126, 56],
  [140, 70],
  [154, 88],
];

const IDEAL_LINE: Point[] = [
  [46, 88],
  [64, 80],
  [82, 76],
  [100, 75],
  [118, 76],
  [136, 80],
  [154, 88],
];

const DOT_PATHS: Record<Concern, string> = {
  crown: dotsToPath(
    scatter((x, y) => {
      if (!insideTopHead(x, y, 0.9)) return 0;
      const d = Math.hypot(x - 100, y - 140);
      const crown = d < 30 ? 0.15 + 0.85 * (1 - (d / 30) ** 2) : 0;
      const part = distanceToSegment([x, y], PART_LINE[0], PART_LINE[1]) < 3.4 ? 0.85 : 0;
      return Math.max(crown, part);
    }, 7, 3.6)
  ),
  hairline: dotsToPath(
    scatter((x, y) => {
      if (ellipseNorm(x, y, 100, 112, 57, 74) > 0.97) return 0;
      return y > yOnPolyline(M_LINE, x) && y < yOnPolyline(IDEAL_LINE, x) ? 0.95 : 0;
    }, 3, 3.2)
  ),
  full: dotsToPath(scatter((x, y) => (insideTopHead(x, y, 0.86) ? 0.78 : 0), 11)),
  scar: dotsToPath(
    scatter((x, y) => {
      if (!insideTopHead(x, y, 0.92)) return 0;
      const d = distanceToPolyline([x, y], SCAR_LINE);
      return d < 13 ? 0.95 * (1 - d / 15) : 0;
    }, 5, 3.4)
  ),
};

const TopHead = () => (
  <>
    <ellipse className={styles.head} cx="41" cy="108" rx="7" ry="15" />
    <ellipse className={styles.head} cx="159" cy="108" rx="7" ry="15" />
    <path className={styles.line} d="M92 35 Q100 16 108 35" />
    <ellipse className={styles.head} cx="100" cy="106" rx="60" ry="74" />
  </>
);

const ConcernIllustration = ({ type }: { type: Concern }) => (
  <svg className={styles.svg} viewBox="0 0 200 200" aria-hidden="true" focusable="false">
    {type === "hairline" ? (
      <>
        <ellipse className={styles.head} cx="43" cy="118" rx="8" ry="15" />
        <ellipse className={styles.head} cx="157" cy="118" rx="8" ry="15" />
        <ellipse className={styles.head} cx="100" cy="112" rx="57" ry="74" />
        <path className={styles.hair} d={`${toPath(M_LINE)} A57 74 0 0 0 46 88 Z`} />
        <path className={styles.line} d={toPath(M_LINE)} />
        <path className={styles.dots} d={DOT_PATHS.hairline} />
        <path className={styles.guide} d={toPath(IDEAL_LINE)} />
        <path
          className={styles.face}
          d="M76 113 Q84 108 92 112 M108 112 Q116 108 124 113 M79 124 Q84 121 89 124 M111 124 Q116 121 121 124 M100 122 L97 141 Q100 143 104 141"
        />
      </>
    ) : (
      <>
        <TopHead />
        <path className={styles.dots} d={DOT_PATHS[type]} />
        {type === "crown" && <circle className={styles.guide} cx="100" cy="140" r="34" />}
        {type === "scar" && (
          <>
            <path className={styles.scar} d={toPath(SCAR_LINE)} />
            <path className={styles.scar} d={SCAR_STITCHES} />
          </>
        )}
      </>
    )}
  </svg>
);

export default ConcernIllustration;
