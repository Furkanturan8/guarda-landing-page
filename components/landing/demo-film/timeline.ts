// All times are milliseconds into the looping film.
export const DUR = 34500;
// Offset where the in-app part starts (after the browser extension scene).
export const A = 6200;
// Extra time the weekly-calendar scene adds before the final dashboard.
export const W = 5300;

export const STAGE_W = 1120;
export const STAGE_H = 758;

export const CHAPTER_BOUNDS: [number, number][] = [
  [0, 6200],
  [6200, 11400],
  [11400, 16200],
  [16200, 20700],
  [20700, 25000],
  [25000, 30300],
  [30300, 34500],
];

export type CursorKey =
  | "gTab"
  | "quick"
  | "capSave"
  | "move"
  | "accept"
  | "toTask"
  | "sw"
  | "taskSave"
  | "navPlanner"
  | "calTab"
  | "thu"
  | "navToday"
  | "check";

// Where the fake cursor clicks, in order.
export const CURSOR: { at: number; k: CursorKey }[] = [
  { at: 5300, k: "gTab" },
  { at: 400 + A, k: "quick" },
  { at: 4300 + A, k: "capSave" },
  { at: 10300 + A, k: "move" },
  { at: 13400 + A, k: "accept" },
  { at: 14800 + A, k: "toTask" },
  { at: 16900 + A, k: "sw" },
  { at: 18000 + A, k: "taskSave" },
  { at: 25400, k: "navPlanner" },
  { at: 26200, k: "calTab" },
  { at: 28200, k: "thu" },
  { at: 29900, k: "navToday" },
  { at: 20800 + A + W, k: "check" },
];

export const URL_TEXT = "https://use-the-index-luke.com/";
export const TIME_TEXT = "19:00";

export type Point = { x: number; y: number };

const clamp = (v: number) => Math.max(0, Math.min(1, v));
const ease = (x: number) => (x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2);

/** Cursor position and click ripple at time T, gliding between measured targets. */
export function cursorAt(T: number, pos: Partial<Record<CursorKey, Point>>) {
  let prev: Point = { x: 700, y: 470 };
  let x = prev.x;
  let y = prev.y;
  let moving = false;
  for (const c of CURSOR) {
    const target = pos[c.k] ?? prev;
    const arrive = c.at - 80;
    const start = arrive - 560;
    if (T >= arrive) {
      prev = target;
      continue;
    }
    if (T >= start) {
      const e = ease((T - start) / (arrive - start));
      x = prev.x + (target.x - prev.x) * e;
      y = prev.y + (target.y - prev.y) * e;
      moving = true;
    }
    break;
  }
  if (!moving) {
    x = prev.x;
    y = prev.y;
  }
  const lastClick = [...CURSOR].reverse().find((c) => T >= c.at);
  const ripple = lastClick ? clamp((T - lastClick.at) / 420) : 1;
  return { x, y, ripple, clicked: Boolean(lastClick) };
}

/** True for the 170ms after the cursor clicks the given target. */
export function pressed(T: number, k: CursorKey) {
  const c = CURSOR.find((c) => c.k === k);
  return Boolean(c && T >= c.at && T < c.at + 170);
}

export { clamp };
