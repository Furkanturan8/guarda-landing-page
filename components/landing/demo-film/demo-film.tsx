"use client";

import {
  Archive,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Bell,
  BookOpen,
  Briefcase,
  CalendarClock,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Folder,
  FolderInput,
  Inbox,
  LayoutDashboard,
  LinkIcon,
  List,
  LoaderCircle,
  Lock,
  MousePointer2,
  Pause,
  Play,
  Plus,
  Puzzle,
  RotateCw,
  Settings,
  Sparkles,
  SquareArrowOutUpRight,
  Star,
  Tag,
  Upload,
  type LucideIcon,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import type { Dictionary } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { LogoMark } from "../primitives";
import {
  A,
  CHAPTER_BOUNDS,
  clamp,
  cursorAt,
  DUR,
  pressed,
  STAGE_H,
  STAGE_W,
  TIME_TEXT,
  URL_TEXT,
  W,
  type CursorKey,
  type Point,
} from "./timeline";

type DemoText = Dictionary["demo"];

const STORAGE_KEY = "guarda-film-t";

const darkBtn =
  "flex h-[30px] shrink-0 items-center gap-1.5 rounded-[7px] bg-ink-soft px-2.5 text-[12.5px] font-medium text-paper";
const lightBtn =
  "flex h-[30px] items-center gap-1.5 rounded-[7px] border border-line bg-white px-2.5 text-[12.5px] font-medium shadow-[0_1px_2px_rgba(0,0,0,.04)]";
const typeBadge = "rounded bg-wash px-2 py-0.5 font-mono text-[11px] tracking-[.04em] text-muted uppercase";
const actionBadge =
  "rounded-[3px] border border-line bg-wash px-1.5 py-px font-mono text-[10px] tracking-[.04em] text-muted uppercase";
const monoLabel = "font-mono text-[9.5px] tracking-[.16em] text-muted uppercase";
const panel = "rounded-[14px] border border-line bg-white shadow-[0_1px_2px_rgba(0,0,0,.04)]";
const modal =
  "absolute z-[6] rounded-2xl border border-line bg-white shadow-[0_24px_60px_-20px_rgba(0,0,0,.35)] transition-[opacity,transform] duration-300 ease-[cubic-bezier(.2,.7,.2,1)]";
const key =
  "flex h-12 min-w-12 items-center justify-center rounded-[10px] border border-[#d4d4d4] bg-white px-3 shadow-[0_2px_0_#d4d4d4]";

const fmt = (template: string, n: number | string) => template.replace("{n}", String(n));
const show = (on: boolean) => ({ opacity: on ? 1 : 0 });
const rise = (on: boolean) => ({ opacity: on ? 1 : 0, transform: on ? "translateY(0)" : "translateY(6px)" });
const press = (on: boolean) => ({ transform: on ? "scale(.95)" : "scale(1)" });

type CalItem = { time: string; title: string; done?: boolean; focus?: boolean };
type CalDay = { day: number; items: CalItem[]; today?: boolean; allDone?: boolean };

const WEEK: CalDay[] = [
  {
    day: 28,
    allDone: true,
    items: [
      { time: "09:00", title: "Rust Ownership", done: true },
      { time: "20:30", title: "System Design Primer", done: true },
    ],
  },
  { day: 29, items: [{ time: "19:00", title: "Redis Streams" }] },
  {
    day: 30,
    today: true,
    items: [
      { time: "19:00", title: "PostgreSQL Indexing", focus: true },
      { time: "21:00", title: "Go Concurrency Patterns" },
      { time: "23:59", title: "Junior Backend Developer" },
    ],
  },
  { day: 1, items: [{ time: "20:00", title: "gRPC vs REST" }] },
  { day: 2, items: [] },
  { day: 3, items: [{ time: "11:00", title: "Kubernetes Basics" }] },
  { day: 4, items: [] },
];

export function DemoFilm({ t }: { t: DemoText }) {
  const [T, setT] = useState(0);
  const reducedMotion = usePrefersReducedMotion();
  const [userPlaying, setUserPlaying] = useState<boolean | null>(null);
  const playing = userPlaying ?? !reducedMotion;
  const [scale, setScale] = useState(0);
  const [pos, setPos] = useState<Partial<Record<CursorKey, Point>>>({});

  const outerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const playingRef = useRef(playing);
  const timeRef = useRef(0);

  const measure = useCallback(() => {
    const outer = outerRef.current;
    const stage = stageRef.current;
    if (!outer || !stage) return;
    const s = outer.clientWidth / STAGE_W;
    if (!s) return;
    const sr = stage.getBoundingClientRect();
    const next: Partial<Record<CursorKey, Point>> = {};
    for (const el of stage.querySelectorAll<HTMLElement>("[data-cursor]")) {
      const b = el.getBoundingClientRect();
      next[el.dataset.cursor as CursorKey] = {
        x: (b.left - sr.left + b.width / 2) / s,
        y: (b.top - sr.top + b.height / 2) / s,
      };
    }
    setScale(s);
    setPos(next);
  }, []);

  useEffect(() => {
    playingRef.current = playing;
  }, [playing]);

  useEffect(() => {
    try {
      const saved = parseFloat(localStorage.getItem(STORAGE_KEY) ?? "");
      if (!isNaN(saved)) {
        timeRef.current = saved % DUR;
        setT(timeRef.current);
      }
    } catch {}

    measure();
    const ro = new ResizeObserver(measure);
    if (outerRef.current) ro.observe(outerRef.current);

    let last = performance.now();
    let lastSave = 0;
    let raf = 0;
    const loop = (now: number) => {
      raf = requestAnimationFrame(loop);
      const dt = now - last;
      if (dt < 30) return;
      last = now;
      if (playingRef.current) {
        timeRef.current = (timeRef.current + Math.min(dt, 100)) % DUR;
        setT(timeRef.current);
      }
      measure();
      if (now - lastSave > 1000) {
        lastSave = now;
        try {
          localStorage.setItem(STORAGE_KEY, String(Math.round(timeRef.current)));
        } catch {}
      }
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [measure]);

  const seek = (ms: number) => {
    timeRef.current = ms;
    setT(ms);
    setUserPlaying(true);
  };

  // --- frame values -------------------------------------------------------
  const tt = T - A;
  const td = tt - W;
  const p = (a: number, b: number) => clamp((tt - a) / (b - a));
  const inW = (a: number, b: number) => tt >= a && tt < b;
  const blink = Math.floor(tt / 480) % 2 === 0;

  // Browser extension scene
  const extSaved = T >= 1600;
  const tagN = Math.floor(clamp((T - 2000) / 1200) * t.toast.tagsTyped.length);
  const toastOn = T >= 1000 && T < 4500;
  const addr =
    T < 5300
      ? "go.dev/blog/pipelines"
      : T >= 29900
        ? "guarda.app"
        : T >= 26200
          ? "guarda.app/planner?tab=calendar"
          : T >= 25400
            ? "guarda.app/planner"
            : "guarda.app/inbox";

  // App scenes
  const capOn = inW(450, 5000);
  const taskOn = inW(15000, 18600);
  const dash = td >= 18800;
  const done = td >= 20800;
  const planOn = T >= 25500 && T < 30300;
  const calOn = T >= 26300;
  const thuSel = T >= 28200;
  const urlN = Math.floor(p(1100, 3300) * URL_TEXT.length);
  const timeN = Math.floor(p(15900, 16500) * TIME_TEXT.length);
  const inboxCount = tt >= 5300 ? 3 : 2;
  const ready = tt >= 7400;

  const counts = {
    today: done ? 2 : 3,
    inbox: inboxCount,
    planner: tt >= 18000 ? 5 : 4,
    bookmarks: tt >= 5300 ? 24 : 23,
  };
  const active = T >= 29900 ? "today" : T >= 25400 ? "planner" : "inbox";
  const cursor = cursorAt(T, pos);

  const navItems: { id: string; icon: LucideIcon; label: string; count: number; ref?: CursorKey }[] = [
    { id: "today", icon: LayoutDashboard, label: t.sidebar.today, count: counts.today, ref: "navToday" },
    { id: "inbox", icon: Inbox, label: t.sidebar.inbox, count: counts.inbox },
    { id: "planner", icon: CalendarClock, label: t.sidebar.planner, count: counts.planner, ref: "navPlanner" },
    { id: "bookmarks", icon: List, label: t.sidebar.bookmarks, count: counts.bookmarks },
    { id: "collections", icon: Folder, label: t.sidebar.collections, count: 9 },
    { id: "tags", icon: Tag, label: t.sidebar.tags, count: 14 },
    { id: "archive", icon: Archive, label: t.sidebar.archive, count: 6 },
  ];

  const dashTasks = [
    {
      action: t.planner.read,
      title: "PostgreSQL Indexing",
      meta: ["use-the-index-luke.com", "19:00", `18 ${t.planner.min}`],
      at: 18950,
      check: true,
    },
    {
      action: t.planner.read,
      title: "Go Concurrency Patterns",
      meta: ["go.dev", "21:00", `12 ${t.planner.min}`],
      at: 19030,
    },
    { action: t.planner.apply, title: "Junior Backend Developer", meta: [t.jobSite, t.dashboard.deadline], at: 19110 },
  ];

  return (
    <div id="demo" className="mt-16 animate-rise scroll-mt-[84px] [animation-delay:360ms]">
      <div
        ref={outerRef}
        className="relative w-full overflow-hidden rounded-2xl border border-line bg-white shadow-[0_1px_2px_rgba(0,0,0,.04),0_30px_70px_-30px_rgba(0,0,0,.22)]"
        style={{ aspectRatio: `${STAGE_W}/${STAGE_H}` }}
        aria-hidden
      >
        <div
          ref={stageRef}
          className="absolute top-0 left-0 origin-top-left overflow-hidden bg-white"
          style={{ width: STAGE_W, height: STAGE_H, transform: `scale(${scale || 1})` }}
        >
          {/* Browser chrome */}
          <div className="absolute inset-x-0 top-0 h-[78px] border-b border-[#dcdcdc] bg-[#ececec]">
            <div className="flex h-[38px] items-end gap-0.5 px-2.5">
              <div
                className="flex h-[30px] w-[236px] items-center gap-2 rounded-t-[9px] px-3 text-xs text-[#3f3f3f] transition-colors duration-200"
                style={{ background: T < 5300 ? "#fff" : "transparent" }}
              >
                <span className="flex size-4 shrink-0 items-center justify-center rounded bg-line font-mono text-[7.5px] text-muted">
                  GO
                </span>
                <span className="flex-1 truncate">Go Concurrency Patterns: Pipelines</span>
              </div>
              <div
                data-cursor="gTab"
                className="flex h-[30px] w-[170px] items-center gap-2 rounded-t-[9px] px-3 text-xs text-[#3f3f3f] transition-[background,transform] duration-150"
                style={{ background: T < 5300 ? "transparent" : "#fff", ...press(pressed(T, "gTab")) }}
              >
                <span className="flex size-4 shrink-0 items-center justify-center rounded bg-ink-soft text-paper">
                  <LogoMark className="size-[62%]" check={null} />
                </span>
                <span>GuardaFlow</span>
              </div>
            </div>
            <div className="flex h-10 items-center gap-3 bg-white px-3.5">
              <ArrowLeft className="size-[15px] opacity-45" />
              <ArrowRight className="size-[15px] opacity-30" />
              <RotateCw className="size-3.5 opacity-45" />
              <div className="flex h-7 flex-1 items-center gap-2 rounded-full bg-[#f1f1f1] px-3.5 text-[13px] text-[#3f3f3f]">
                <Lock className="size-3 opacity-45" />
                <span>{addr}</span>
              </div>
              <span
                className="flex size-[22px] items-center justify-center rounded-md bg-ink-soft text-paper transition-shadow duration-250"
                style={{
                  boxShadow: T >= 1000 && T < 1800 ? "0 0 0 3px rgba(23,23,23,.18)" : "0 0 0 0 rgba(0,0,0,0)",
                }}
              >
                <LogoMark className="size-[60%]" />
              </span>
              <Puzzle className="size-[15px] opacity-45" />
            </div>
          </div>

          <div className="absolute inset-x-0 top-[78px] h-[680px] overflow-hidden">
            {/* Sidebar */}
            <div className="absolute inset-y-0 left-0 flex w-[216px] flex-col gap-3.5 border-r border-line bg-paper px-2.5 py-3.5">
              <div className="flex items-center gap-2 px-1">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-ink-soft text-paper">
                  <LogoMark className="size-[60%]" />
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-[22px] leading-none font-semibold tracking-[-.02em]">GuardaFlow</span>
                  <span className="font-mono text-[9px] tracking-[.16em] text-ink/50 uppercase">
                    {t.sidebar.brandSub}
                  </span>
                </div>
              </div>
              <div
                data-cursor="quick"
                className="flex h-8 items-center justify-center gap-2 rounded-lg bg-ink-soft text-[13px] font-medium text-paper transition-transform duration-150"
                style={press(pressed(T, "quick"))}
              >
                <LinkIcon className="size-[15px]" />
                <span>{t.sidebar.quickSave}</span>
              </div>
              <div className="flex flex-col gap-0.5">
                {navItems.map(({ id, icon: Icon, label, count, ref }) => (
                  <div
                    key={id}
                    data-cursor={ref}
                    className="flex h-8 items-center gap-[9px] rounded-md px-2 text-[13.5px] transition-colors duration-300"
                    style={{
                      background: id === active ? "#ededed" : "transparent",
                      fontWeight: id === active ? 500 : 400,
                    }}
                  >
                    <Icon className="size-4 opacity-70" />
                    <span className="flex-1">{label}</span>
                    <span className="text-[11.5px] text-muted tabular-nums">{count}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-0.5">
                <div className="flex h-7 items-center gap-1.5 px-2 text-[11.5px] font-medium text-ink/70">
                  <Star className="size-3 text-amber-500" />
                  <span>{t.sidebar.quickAccess}</span>
                </div>
                <div className="flex h-[30px] items-center gap-[9px] pr-2 pl-4 text-[13.5px]">
                  <span className="size-2 rounded-full bg-[#2563EB]" />
                  <span>Backend</span>
                </div>
                <div className="flex h-[30px] items-center gap-[9px] pr-2 pl-4 text-[13.5px]">
                  <span className="size-2 rounded-full bg-faint" />
                  <span>{t.sidebar.career}</span>
                </div>
              </div>
              <div className="mt-auto flex flex-col gap-0.5">
                <div className="flex h-8 items-center gap-[9px] px-2 text-[13.5px]">
                  <Upload className="size-4 opacity-70" />
                  <span>{t.sidebar.import}</span>
                </div>
                <div className="flex h-8 items-center gap-[9px] px-2 text-[13.5px]">
                  <Settings className="size-4 opacity-70" />
                  <span>{t.sidebar.settings}</span>
                </div>
              </div>
            </div>

            <div className="absolute inset-y-0 right-0 left-[216px] overflow-hidden">
              {/* Inbox */}
              <div
                className="absolute inset-0 px-12 py-[38px] transition-opacity duration-[450ms]"
                style={show(T < 25500)}
              >
                <h2 className="m-0 text-[28px] font-semibold tracking-[-.02em]">{t.inbox.title}</h2>
                <p className="mt-[5px] text-[13.5px] text-muted">{t.inbox.subtitle}</p>
                <div className="mt-6 flex gap-1.5 border-b border-line pb-3.5 text-xs font-medium">
                  <span className="rounded-full bg-ink-soft px-3 py-1.5 text-paper">
                    {t.inbox.all} <span className="opacity-70">{inboxCount}</span>
                  </span>
                  <span className="rounded-full px-3 py-1.5 text-muted">
                    {t.inbox.article} <span className="text-faint">{tt >= 5300 ? 2 : 1}</span>
                  </span>
                  <span className="rounded-full px-3 py-1.5 text-muted">
                    {t.inbox.job} <span className="text-faint">1</span>
                  </span>
                </div>
                <div className="mt-3.5 flex flex-col gap-3">
                  <div
                    className="overflow-hidden transition-[max-height,opacity] duration-500 ease-[cubic-bezier(.2,.7,.2,1)]"
                    style={{ maxHeight: tt >= 5300 ? 260 : 0, opacity: tt >= 5300 ? 1 : 0 }}
                  >
                    <div className="grid">
                      <div
                        className="flex items-center justify-between gap-3 self-start rounded-[14px] border border-dashed border-[#d4d4d4] bg-paper p-5 transition-opacity duration-300 [grid-area:1/1]"
                        style={show(!ready)}
                      >
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <LoaderCircle
                              className="size-3.5 opacity-55"
                              style={{ transform: `rotate(${(tt * 0.45) % 360}deg)` }}
                            />
                            <span className="text-xs font-medium text-muted">
                              {tt < 6300 ? t.inbox.queued : t.inbox.analyzing}
                            </span>
                          </div>
                          <div className="mt-1.5 font-mono text-sm text-ink/80">{URL_TEXT}</div>
                        </div>
                        <span className="text-xs text-faint italic">{t.inbox.wait}</span>
                      </div>
                      <div
                        className="flex items-center justify-between gap-4 rounded-[14px] border border-line bg-white px-5 py-[18px] transition-opacity duration-300 [grid-area:1/1]"
                        style={show(ready)}
                      >
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <span className={typeBadge}>{t.inbox.article}</span>
                            <span className="text-xs text-faint">·</span>
                            <span className="text-xs text-faint">{t.inbox.justAdded}</span>
                          </div>
                          <div className="mt-2 text-lg font-semibold tracking-[-.01em]">PostgreSQL Indexing</div>
                          <div className="mt-1.5 flex gap-2 text-xs text-muted">
                            <span>use-the-index-luke.com</span>
                            <span className="text-faint">·</span>
                            <span>{fmt(t.inbox.readTime, 18)}</span>
                          </div>
                          <div
                            className="overflow-hidden transition-[max-height] duration-[450ms] ease-[cubic-bezier(.2,.7,.2,1)]"
                            style={{ maxHeight: tt >= 10500 ? 60 : 0 }}
                          >
                            <div className="flex flex-wrap items-center gap-2 pt-2.5">
                              <span
                                className="inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 text-xs transition-[opacity,transform] duration-300"
                                style={rise(tt >= 10600)}
                              >
                                <span className="size-2 rounded-full bg-[#2563EB]" />
                                Learning / Backend
                              </span>
                              <span
                                className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-muted transition-[opacity,transform] duration-300"
                                style={rise(tt >= 11200)}
                              >
                                postgresql
                              </span>
                              <span
                                className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-muted transition-[opacity,transform] duration-300"
                                style={rise(tt >= 11600)}
                              >
                                backend
                              </span>
                              <span
                                className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[11px] text-muted transition-[opacity,transform] duration-300"
                                style={{
                                  ...rise(tt >= 12300),
                                  border: tt >= 13400 ? "1px solid #e5e5e5" : "1px dashed #a1a1a1",
                                }}
                              >
                                <Sparkles
                                  className="size-3 transition-opacity"
                                  style={{ opacity: tt >= 13400 ? 0.35 : 0.65 }}
                                />
                                <span>indexing</span>
                                <span
                                  data-cursor="accept"
                                  className="overflow-hidden font-sans text-[11.5px] font-medium whitespace-nowrap text-ink underline transition-[max-width,opacity] duration-300"
                                  style={{
                                    maxWidth: tt >= 13450 ? 0 : 70,
                                    opacity: tt >= 13450 ? 0 : 1,
                                    ...press(pressed(T, "accept")),
                                  }}
                                >
                                  {t.inbox.accept}
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex shrink-0 items-center gap-2">
                          <span className={darkBtn}>
                            {t.inbox.openLink}
                            <SquareArrowOutUpRight className="size-[13px]" />
                          </span>
                          <span
                            data-cursor="move"
                            className={cn(lightBtn, "transition-transform duration-150")}
                            style={press(pressed(T, "move"))}
                          >
                            <FolderInput className="size-[13px] opacity-70" />
                            {t.inbox.move}
                          </span>
                          <span
                            data-cursor="toTask"
                            className={cn(lightBtn, "transition-transform duration-150")}
                            style={press(pressed(T, "toTask"))}
                          >
                            <CalendarClock className="size-[13px] opacity-70" />
                            {t.inbox.toTask}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4 rounded-[14px] border border-line bg-white px-5 py-[18px]">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={typeBadge}>{t.inbox.article}</span>
                        <span className="text-xs text-faint">·</span>
                        <span className="text-xs text-faint">{t.inbox.fromExtension}</span>
                      </div>
                      <div className="mt-2 text-lg font-semibold tracking-[-.01em]">Go Concurrency Patterns</div>
                      <div className="mt-1.5 flex gap-2 text-xs text-muted">
                        <span>go.dev</span>
                        <span className="text-faint">·</span>
                        <span>{fmt(t.inbox.readTime, 12)}</span>
                      </div>
                      <div className="flex gap-2 pt-2.5">
                        <span className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-muted">
                          golang
                        </span>
                        <span className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-muted">
                          concurrency
                        </span>
                      </div>
                    </div>
                    <div className="flex shrink-0 items-center gap-2">
                      <span className={darkBtn}>
                        {t.inbox.openLink}
                        <SquareArrowOutUpRight className="size-[13px]" />
                      </span>
                      <span className={cn(lightBtn, "shadow-none")}>
                        <FolderInput className="size-[13px] opacity-70" />
                        {t.inbox.move}
                      </span>
                      <span className={cn(lightBtn, "shadow-none")}>
                        <CalendarClock className="size-[13px] opacity-70" />
                        {t.inbox.toTask}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4 rounded-[14px] border border-line bg-white px-5 py-[18px]">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={typeBadge}>{t.inbox.job}</span>
                        <span className="text-xs text-faint">·</span>
                        <span className="text-xs text-faint">{t.inbox.daysAgo}</span>
                      </div>
                      <div className="mt-2 text-lg font-semibold tracking-[-.01em]">Junior Backend Developer</div>
                      <div className="mt-1.5 flex gap-2 text-xs text-muted">
                        <span>{t.jobSite}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Planner */}
              <div
                className="absolute inset-0 px-10 py-[30px] transition-opacity duration-[450ms]"
                style={show(planOn)}
              >
                <h2 className="m-0 text-4xl leading-[1.1] font-normal tracking-[-.025em]">{t.planner.title}</h2>
                <div className="mt-4 flex gap-2 border-b border-line pb-3 text-xs font-medium">
                  <span
                    className="rounded-full px-3.5 py-1.5 transition-colors duration-250"
                    style={{ background: calOn ? "transparent" : "#171717", color: calOn ? "#737373" : "#fafafa" }}
                  >
                    {t.planner.today}
                  </span>
                  <span className="rounded-full px-3.5 py-1.5 text-muted">{t.planner.upcoming}</span>
                  <span
                    data-cursor="calTab"
                    className="rounded-full px-3.5 py-1.5 transition-[background,color,transform] duration-250"
                    style={{
                      background: calOn ? "#171717" : "transparent",
                      color: calOn ? "#fafafa" : "#737373",
                      ...press(pressed(T, "calTab")),
                    }}
                  >
                    {t.planner.calendar}
                  </span>
                  <span className="rounded-full px-3.5 py-1.5 text-muted">{t.planner.completed}</span>
                </div>
                <div className="relative mt-[22px]">
                  <div className="absolute top-0 left-0 w-[560px] transition-opacity duration-300" style={show(!calOn)}>
                    <div className="mb-3 font-mono text-[11px] tracking-[.14em] text-faint uppercase">
                      {t.planner.evening}
                    </div>
                    <div className="flex flex-col gap-3">
                      {[
                        { title: "PostgreSQL Indexing", time: "19:00", min: 18, tags: ["postgresql", "backend"] },
                        { title: "Go Concurrency Patterns", time: "21:00", min: 12, tags: ["golang", "concurrency"] },
                      ].map((it) => (
                        <div key={it.title} className={cn(panel, "flex justify-between gap-4 p-4")}>
                          <div className="flex gap-3.5">
                            <span className="mt-[3px] size-[19px] shrink-0 rounded-full border border-line" />
                            <div>
                              <div className="text-base font-medium">{it.title}</div>
                              <div className="mt-2 flex items-center gap-2">
                                <span className={actionBadge}>{t.planner.read}</span>
                                <span className="rounded bg-wash px-2 py-0.5 text-[11px] font-medium text-muted">
                                  {it.time} • {it.min} {t.planner.min}
                                </span>
                                {it.tags.map((tag) => (
                                  <span key={tag} className="text-xs text-faint">
                                    #{tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                          <span className={darkBtn}>
                            {t.inbox.openLink}
                            <ArrowUpRight className="size-[13px]" />
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="transition-opacity duration-300" style={show(calOn)}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-baseline gap-3">
                        <span className="text-[15px] font-semibold">{t.planner.weekRange}</span>
                        <span className="font-mono text-xs text-faint">{t.planner.month}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="rounded-md border border-line px-2.5 py-1 text-xs font-medium">
                          {t.planner.today}
                        </span>
                        <span className="flex items-center overflow-hidden rounded-md border border-line">
                          <ChevronLeft className="m-[5px] size-4 opacity-55" />
                          <span className="h-3.5 w-px bg-line" />
                          <ChevronRight className="m-[5px] size-4 opacity-55" />
                        </span>
                      </div>
                    </div>
                    <div className="mt-3.5 grid grid-cols-[minmax(0,1fr)_232px] items-start gap-[26px]">
                      <div>
                        <div className={cn(panel, "overflow-hidden")}>
                          <div className="grid grid-cols-7 border-b border-line bg-wash/40 text-center text-[10px] font-semibold tracking-[.06em] text-muted uppercase">
                            {t.planner.days.map((d, i) => (
                              <div key={d} className={cn("py-2", i === 2 && "bg-ink-soft/5 text-ink-soft")}>
                                {i === 2 ? `${d} ${t.planner.todaySuffix}` : d}
                              </div>
                            ))}
                          </div>
                          <div className="grid min-h-[330px] grid-cols-7">
                            {WEEK.map((day, i) => {
                              const on = T >= 26350 + i * 60;
                              return (
                                <div
                                  key={day.day}
                                  data-cursor={day.day === 1 ? "thu" : undefined}
                                  className={cn(
                                    "flex flex-col gap-2 p-2 transition-shadow duration-200",
                                    i > 0 && "border-l border-line",
                                  )}
                                  style={{
                                    boxShadow: day.today
                                      ? "inset 0 0 0 2px rgba(23,23,23,.4)"
                                      : day.day === 1 && thuSel
                                        ? "inset 0 0 0 2px rgba(161,161,161,.55)"
                                        : "none",
                                  }}
                                >
                                  <div className="flex items-center justify-between">
                                    <span
                                      className={cn(
                                        "flex size-6 items-center justify-center rounded-full text-xs font-semibold",
                                        day.today ? "bg-ink-soft text-paper" : "text-muted",
                                      )}
                                    >
                                      {day.day}
                                    </span>
                                    {day.allDone ? (
                                      <span className="rounded border border-[#a7f3d0] bg-[#ecfdf5] px-1 py-px text-[10px] text-[#047857]">
                                        2/2 ✓
                                      </span>
                                    ) : day.today ? (
                                      <span className="rounded border border-ink-soft/30 bg-ink-soft/10 px-[5px] py-px text-[10px] font-semibold">
                                        {t.planner.today}
                                      </span>
                                    ) : (
                                      <span className="font-mono text-[10px] text-faint">
                                        {day.items.length ? t.planner.onePlan : t.planner.empty}
                                      </span>
                                    )}
                                  </div>
                                  {day.items.length ? (
                                    <div
                                      className="flex flex-col gap-2 transition-[opacity,transform] duration-300"
                                      style={rise(on)}
                                    >
                                      {day.items.map((it) => (
                                        <div
                                          key={it.title}
                                          className={cn(
                                            "rounded-md border px-1.5 py-1 text-[11px]",
                                            it.focus
                                              ? "border-ink-soft shadow-[0_0_0_2px_rgba(23,23,23,.1)]"
                                              : "border-line",
                                            it.done && "opacity-60",
                                          )}
                                        >
                                          <div className="font-mono text-[10px] text-muted">{it.time}</div>
                                          <div
                                            className={cn(
                                              "line-clamp-2 leading-[1.3] font-medium [overflow-wrap:anywhere]",
                                              it.done && "text-faint line-through",
                                            )}
                                          >
                                            {it.title}
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  ) : (
                                    <div
                                      className="flex flex-col items-center gap-1 rounded-lg border border-dashed border-line px-1 py-2 transition-opacity duration-300"
                                      style={show(on)}
                                    >
                                      <span className="text-[11px] text-faint">{t.planner.noPlan}</span>
                                      <span className="rounded bg-wash px-2 py-0.5 text-[10px] font-medium">
                                        {t.planner.add}
                                      </span>
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                        <div className="mt-3 flex items-center justify-between px-1 text-xs text-muted">
                          <div className="flex gap-3 whitespace-nowrap">
                            <span>
                              <strong className="font-medium text-ink">8</strong> {t.planner.total}
                            </span>
                            <span>
                              <strong className="font-medium text-ink">2</strong> {t.planner.done}
                            </span>
                            <span>
                              <strong className="font-medium text-ink">6</strong> {t.planner.left}
                            </span>
                          </div>
                          <div className="flex gap-3 text-[11px]">
                            <span className="flex items-center gap-1.5">
                              <span className="size-2 rounded-full bg-ink-soft" />
                              {t.planner.today}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <span className="size-2 rounded-full bg-emerald-500" />
                              {t.planner.done}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3.5">
                        <div className={cn(panel, "grid p-4")}>
                          <div className="transition-opacity duration-250 [grid-area:1/1]" style={show(!thuSel)}>
                            <div className="mb-2.5 flex items-center justify-between border-b border-[#eee] pb-2.5">
                              <div>
                                <div className="font-mono text-[9.5px] tracking-[.18em] text-faint uppercase">
                                  {t.planner.notes}
                                </div>
                                <div className="mt-0.5 text-[13px] font-semibold">{t.planner.wedDate}</div>
                              </div>
                              <span className="rounded border border-ink-soft/30 bg-ink-soft/10 px-1.5 py-px text-[10.5px] font-semibold">
                                {t.planner.today}
                              </span>
                            </div>
                            <div className="flex flex-col gap-2">
                              <DayNote
                                icon={BookOpen}
                                title="PostgreSQL Indexing"
                                meta={`19:00 • 18 ${t.planner.min} • ${t.planner.read}`}
                              />
                              <DayNote
                                icon={BookOpen}
                                title="Go Concurrency Patterns"
                                meta={`21:00 • 12 ${t.planner.min} • ${t.planner.read}`}
                              />
                              <DayNote
                                icon={Briefcase}
                                title="Junior Backend Developer"
                                meta={`23:59 • ${t.planner.apply}`}
                              />
                            </div>
                          </div>
                          <div className="transition-opacity duration-250 [grid-area:1/1]" style={show(thuSel)}>
                            <div className="mb-2.5 border-b border-[#eee] pb-2.5">
                              <div className="font-mono text-[9.5px] tracking-[.18em] text-faint uppercase">
                                {t.planner.notes}
                              </div>
                              <div className="mt-0.5 text-[13px] font-semibold">{t.planner.thuDate}</div>
                            </div>
                            <DayNote
                              icon={BookOpen}
                              title="gRPC vs REST"
                              meta={`20:00 • 25 ${t.planner.min} • ${t.planner.read}`}
                            />
                          </div>
                          <div className="mt-3 flex h-8 items-center justify-center gap-1.5 rounded-lg border border-line text-xs font-medium">
                            <Plus className="size-[13px] opacity-60" />
                            {t.planner.addToDay}
                          </div>
                        </div>
                        <div className={cn(panel, "p-4")}>
                          <div className="flex items-start justify-between gap-2">
                            <span className="font-mono text-[9.5px] tracking-[.18em] text-faint uppercase">
                              {t.planner.rhythm}
                            </span>
                            <span className="font-mono text-[11px] whitespace-nowrap text-faint">
                              {t.planner.plans}
                            </span>
                          </div>
                          <div className="mt-3 flex justify-between text-xs">
                            <span className="text-muted">{t.planner.completedLabel}</span>
                            <span className="font-mono font-medium">{t.planner.ratio}</span>
                          </div>
                          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-wash">
                            <div className="h-full w-1/4 rounded-full bg-ink-soft" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Today dashboard */}
              <div className="absolute inset-0 px-12 py-10 transition-opacity duration-[450ms]" style={show(dash)}>
                <div className="font-mono text-[10.5px] tracking-[.16em] text-faint uppercase">
                  {t.dashboard.eyebrow}
                </div>
                <h2 className="mt-1.5 text-[32px] leading-[1.2] font-normal tracking-[-.025em]">{t.dashboard.title}</h2>
                <p className="mt-2 text-[13.5px] text-muted">{fmt(t.dashboard.summary, done ? 2 : 3)}</p>
                <div className="mt-9 grid grid-cols-[1fr_240px] items-start gap-9">
                  <div>
                    <div className="flex items-center justify-between border-b border-line pb-1">
                      <span className="font-mono text-xs tracking-[.14em] text-faint uppercase">
                        {t.dashboard.todayActions}
                      </span>
                      <span className="text-xs text-faint">{t.dashboard.byPriority}</span>
                    </div>
                    <div className="flex flex-col gap-3 pt-4">
                      {dashTasks.map((task) => (
                        <div
                          key={task.title}
                          className={cn(
                            panel,
                            "flex items-center justify-between gap-4 p-4 transition-[opacity,transform] duration-400",
                          )}
                          style={rise(td >= task.at)}
                        >
                          <div className="flex items-start gap-3.5">
                            {task.check ? (
                              <span
                                data-cursor="check"
                                className="mt-[3px] flex size-[19px] shrink-0 items-center justify-center rounded-full border transition-[border-color,transform] duration-200"
                                style={{ borderColor: done ? "#171717" : "#e5e5e5", ...press(pressed(T, "check")) }}
                              >
                                <span
                                  className="size-[45%] rounded-full bg-ink-soft transition-transform duration-250 ease-[cubic-bezier(.3,1.6,.5,1)]"
                                  style={{ transform: done ? "scale(1)" : "scale(0)" }}
                                />
                              </span>
                            ) : (
                              <span className="mt-[3px] size-[19px] shrink-0 rounded-full border border-line" />
                            )}
                            <div>
                              <div className="flex items-center gap-2">
                                <span className={actionBadge}>{task.action}</span>
                                <span
                                  className="text-sm font-semibold transition-colors duration-300"
                                  style={
                                    task.check && done
                                      ? { color: "#a1a1a1", textDecoration: "line-through" }
                                      : undefined
                                  }
                                >
                                  {task.title}
                                </span>
                              </div>
                              <div className="mt-1.5 flex gap-2 text-xs text-muted">
                                {task.meta.map((m, i) => (
                                  <span key={m} className="flex gap-2">
                                    {i > 0 && <span className="text-faint">·</span>}
                                    <span className={i === 0 ? "font-mono text-[11px]" : undefined}>{m}</span>
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                          <span className={darkBtn}>
                            {t.inbox.openLink}
                            <ArrowUpRight className="size-[13px]" />
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={cn(panel, "p-5 transition-opacity duration-400")} style={show(td >= 19030)}>
                    <div className="font-mono text-[10px] tracking-[.18em] text-faint uppercase">
                      {t.dashboard.inboxPool}
                    </div>
                    <p className="mt-1.5 text-[13.5px] leading-[1.55] text-muted">{t.dashboard.inboxPoolBody}</p>
                    <div className="mt-4 flex h-8 items-center justify-center gap-1.5 rounded-lg border border-line text-xs font-medium shadow-[0_1px_2px_rgba(0,0,0,.04)]">
                      {t.dashboard.goInbox}
                      <ArrowRight className="size-[13px] opacity-50" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="pointer-events-none absolute inset-0 z-[5] bg-ink/30 transition-opacity duration-300"
              style={show(capOn || taskOn)}
            />

            {/* Quick save modal */}
            <div
              className={cn(modal, "top-[120px] left-[290px] w-[540px] p-7")}
              style={{
                opacity: capOn ? 1 : 0,
                transform: capOn ? "translateY(0) scale(1)" : "translateY(10px) scale(.98)",
              }}
            >
              <div className="text-[22px] font-normal tracking-[-.02em]">{t.capture.title}</div>
              <div className={cn(monoLabel, "mt-[22px]")}>{t.capture.urlLabel}</div>
              <div className="mt-3 flex h-11 items-center border-b border-line pb-3 font-mono text-[22px] whitespace-nowrap">
                <span>{URL_TEXT.slice(0, urlN)}</span>
                <span className="text-faint">{urlN === 0 ? "https://" : ""}</span>
                <span className="ml-px h-6 w-0.5 bg-ink" style={show(tt < 4300 && (inW(1100, 3300) || blink))} />
              </div>
              <div className="mt-[18px] flex items-center gap-1.5 text-[13.5px] font-medium text-muted">
                <Plus className="size-3.5 opacity-60" />
                {t.capture.details}
              </div>
              <div className="mt-[22px] flex items-center justify-between border-t border-line-soft pt-4">
                <span className="font-mono text-[11px] text-faint">
                  {tt >= 4400 ? t.capture.saved : t.capture.hint}
                </span>
                <span
                  data-cursor="capSave"
                  className="flex h-[34px] items-center rounded-lg bg-ink-soft px-3.5 text-[13px] font-medium text-paper transition-[opacity,transform] duration-200"
                  style={{ opacity: urlN > 0 ? 1 : 0.5, ...press(pressed(T, "capSave")) }}
                >
                  {t.capture.save}
                </span>
              </div>
            </div>

            {/* New task modal */}
            <div
              className={cn(modal, "top-[110px] left-[310px] w-[500px] p-[26px]")}
              style={{
                opacity: taskOn ? 1 : 0,
                transform: taskOn ? "translateY(0) scale(1)" : "translateY(10px) scale(.98)",
              }}
            >
              <div className="text-lg font-semibold tracking-[-.01em]">{t.task.title}</div>
              <div className="mt-3.5 flex items-center gap-2.5 rounded-[10px] border border-line bg-paper px-3 py-2.5">
                <span className="size-7 shrink-0 rounded-md bg-[repeating-linear-gradient(135deg,#ececec_0_4px,#f6f6f6_4px_8px)]" />
                <div>
                  <div className="text-[13.5px] font-medium">PostgreSQL Indexing</div>
                  <div className="mt-0.5 font-mono text-[11px] text-muted">use-the-index-luke.com</div>
                </div>
              </div>
              <div className="mt-[18px] grid grid-cols-3 gap-3">
                <div>
                  <div className={monoLabel}>{t.task.action}</div>
                  <div className="mt-2 flex h-[38px] items-center justify-between rounded-lg border border-line bg-paper px-3 text-sm">
                    <span className="flex items-center gap-1.5">
                      <BookOpen className="size-3.5" />
                      {t.task.read}
                    </span>
                    <ChevronDown className="size-3.5 opacity-45" />
                  </div>
                </div>
                <div>
                  <div className={monoLabel}>{t.task.date}</div>
                  <div className="mt-2 flex h-[38px] items-center rounded-lg border border-line bg-paper px-3 text-sm">
                    {t.task.today}
                  </div>
                </div>
                <div>
                  <div className={monoLabel}>{t.task.time}</div>
                  <div
                    className="mt-2 flex h-[38px] items-center rounded-lg border bg-paper px-3 text-sm tabular-nums transition-colors duration-200"
                    style={{ borderColor: inW(15800, 16700) ? "#a1a1a1" : "#e5e5e5" }}
                  >
                    <span>{TIME_TEXT.slice(0, timeN)}</span>
                    <span className="text-faint">{timeN === 0 ? "--:--" : ""}</span>
                  </div>
                </div>
              </div>
              <div className="mt-5 flex items-center justify-between gap-4 border-t border-line-soft pt-4">
                <div className="flex items-center gap-2.5">
                  <Bell className="size-4 opacity-60" />
                  <div>
                    <div className="text-[14.5px] font-medium">{t.task.reminder}</div>
                    <div className="mt-px text-xs text-muted">{t.task.reminderMeta}</div>
                  </div>
                </div>
                <span
                  data-cursor="sw"
                  className="h-5 w-[34px] shrink-0 rounded-full p-0.5 transition-colors duration-250"
                  style={{ background: tt >= 16900 ? "#171717" : "#e5e5e5" }}
                >
                  <span
                    className="block size-4 rounded-full bg-white shadow-[0_1px_2px_rgba(0,0,0,.2)] transition-transform duration-250 ease-[cubic-bezier(.2,.7,.2,1)]"
                    style={{ transform: tt >= 16900 ? "translateX(14px)" : "translateX(0)" }}
                  />
                </span>
              </div>
              <div className="mt-[22px] flex justify-end gap-2">
                <span className="flex h-[34px] items-center rounded-lg border border-line px-3.5 text-[13px] font-medium">
                  {t.task.cancel}
                </span>
                <span
                  data-cursor="taskSave"
                  className="flex h-[34px] items-center rounded-lg bg-ink-soft px-3.5 text-[13px] font-medium text-paper transition-transform duration-150"
                  style={press(pressed(T, "taskSave"))}
                >
                  {t.task.save}
                </span>
              </div>
            </div>

            {/* The web page the extension saves from */}
            <div
              className="pointer-events-none absolute inset-0 z-[8] bg-white transition-opacity duration-[450ms]"
              style={show(T < 5400)}
            >
              <div className="flex h-14 items-center justify-between border-b border-[#eee] px-16">
                <span className="text-[15px] font-semibold">The Go Blog</span>
                <div className="flex gap-[22px] text-[13px] text-muted">
                  <span>Docs</span>
                  <span>Packages</span>
                  <span>Blog</span>
                </div>
              </div>
              <div className="mx-auto mt-11 w-[640px]">
                <div className="text-[34px] leading-[1.15] font-semibold tracking-[-.02em]">
                  Go Concurrency Patterns: Pipelines and cancellation
                </div>
                <div className="mt-3 text-[13px] text-muted">Sameer Ajmani · 13 March 2014</div>
                <TextLines widths={[100, 96, 91, 58]} className="mt-[30px]" />
                <div className="mt-[26px] flex h-[130px] items-center justify-center rounded-lg bg-[repeating-linear-gradient(135deg,#f3f3f3_0_6px,#f9f9f9_6px_12px)] font-mono text-[11px] text-faint">
                  {t.web.codeSample}
                </div>
                <TextLines widths={[100, 88, 94]} className="mt-[26px]" />
              </div>
              <div
                className="absolute inset-x-0 bottom-11 flex justify-center gap-2 transition-[opacity,transform] duration-200"
                style={{
                  opacity: T >= 500 && T < 1500 ? 1 : 0,
                  transform: T >= 500 && T < 1500 ? "translateY(0)" : "translateY(8px)",
                }}
              >
                <span className={cn(key, "text-xl")}>⌘</span>
                <span className={cn(key, "text-xl")}>⇧</span>
                <span className={cn(key, "text-lg font-medium")}>S</span>
              </div>
              <div
                className="absolute inset-x-0 bottom-11 flex justify-center transition-[opacity,transform] duration-200"
                style={{
                  opacity: T >= 3900 && T < 4700 ? 1 : 0,
                  transform: T >= 3900 && T < 4700 ? "translateY(0)" : "translateY(8px)",
                }}
              >
                <span className={cn(key, "gap-2 px-[18px] text-base font-medium")}>↵ Enter</span>
              </div>
              <div
                className="absolute top-4 right-4 w-80 rounded-xl border border-[#e4e4e4] bg-white px-3.5 py-3 text-[13px] leading-[1.35] text-[#1b1a18] shadow-[0_2px_3px_rgba(27,26,24,.04),0_24px_48px_-24px_rgba(27,26,24,.35)] transition-[opacity,transform] duration-100 ease-out"
                style={{
                  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, system-ui, sans-serif",
                  opacity: toastOn ? 1 : 0,
                  transform: toastOn ? "translateY(0)" : "translateY(-6px)",
                }}
              >
                <div className="flex items-center gap-2.5">
                  <span className="grid size-7 flex-none place-items-center rounded-[7px] border border-[#e4e4e4] bg-[#f5f5f4] font-mono text-[10px] text-[#6b6b6b]">
                    GO
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="truncate font-semibold">Go Concurrency Patterns: Pipelines and cancellation</div>
                    <div className="text-[11.5px] text-[#6b6b6b]">go.dev</div>
                  </div>
                  <span
                    className="flex-none text-[11.5px] font-semibold"
                    style={{ color: extSaved ? "#15803d" : "#6b6b6b" }}
                  >
                    {extSaved ? t.toast.saved : t.toast.saving}
                  </span>
                </div>
                <div
                  className="grid gap-1.5 overflow-hidden transition-[max-height,margin-top] duration-200"
                  style={{ maxHeight: extSaved ? 90 : 0, marginTop: extSaved ? 10 : 0 }}
                >
                  <div
                    className="flex min-h-[30px] items-center rounded-[7px] border bg-[#f5f5f4] px-2 py-1.5"
                    style={{ borderColor: extSaved ? "#1b1a18" : "#e4e4e4" }}
                  >
                    <span>{t.toast.tagsTyped.slice(0, tagN)}</span>
                    <span
                      className="h-[15px] w-[1.5px] bg-[#1b1a18]"
                      style={show(extSaved && T < 4500 && ((T >= 2000 && T < 3200) || Math.floor(T / 480) % 2 === 0))}
                    />
                    <span className="text-[#6b6b6b]">{tagN === 0 ? t.toast.tagsPlaceholder : ""}</span>
                  </div>
                  <div className="flex items-center gap-[7px] rounded-[7px] border border-[#e4e4e4] bg-[#f5f5f4] px-2 py-1.5">
                    <span className="size-[7px] rounded-full shadow-[inset_0_0_0_1.5px_#6b6b6b]" />
                    <span className="flex-1">{t.toast.inbox}</span>
                    <ChevronDown className="size-[13px] opacity-50" />
                  </div>
                </div>
                <div className="mt-2 font-mono text-[10px] tracking-[.08em] text-[#6b6b6b] uppercase">
                  {t.toast.keys}
                </div>
              </div>
            </div>
          </div>

          {/* Cursor */}
          <div
            className="pointer-events-none absolute z-10 transition-opacity duration-300"
            style={{ left: cursor.x, top: cursor.y }}
          >
            <span
              className="absolute -top-4 -left-4 size-8 rounded-full border-2 border-ink/35"
              style={{
                transform: `scale(${0.4 + cursor.ripple * 1.2})`,
                opacity: cursor.clicked ? 1 - cursor.ripple : 0,
              }}
            />
            <MousePointer2
              className="absolute -top-1 -left-1 size-6 fill-white"
              style={{ filter: "drop-shadow(0 0 1.5px #fff) drop-shadow(0 2px 3px rgba(0,0,0,.25))" }}
            />
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-start gap-5">
        <button
          type="button"
          onClick={() => setUserPlaying(!playing)}
          aria-label={t.playPause}
          className="flex size-[38px] shrink-0 cursor-pointer items-center justify-center rounded-full border border-line bg-white transition-colors hover:border-faint"
        >
          {playing ? <Pause className="size-[15px]" /> : <Play className="size-[15px]" />}
        </button>
        <div className="grid flex-1 grid-cols-[repeat(7,minmax(96px,1fr))] items-start gap-3.5 overflow-x-auto pb-1">
          {t.chapters.map((c, i) => {
            const [a, b] = CHAPTER_BOUNDS[i];
            const current = T >= a && T < b;
            return (
              <button
                key={c.title}
                type="button"
                onClick={() => seek(a)}
                aria-current={current ? "step" : undefined}
                className="cursor-pointer text-left"
              >
                <div className="h-0.5 overflow-hidden rounded-sm bg-line">
                  <div className="h-full bg-ink-soft" style={{ width: `${clamp((T - a) / (b - a)) * 100}%` }} />
                </div>
                <div
                  className="mt-3 flex gap-2 text-[15px] font-medium transition-colors duration-300"
                  style={{ color: current ? "#0a0a0a" : "#737373" }}
                >
                  <span className="text-faint tabular-nums">{i + 1}</span>
                  <span>{c.title}</span>
                </div>
                <div className="mt-1 text-xs leading-[1.45] text-pretty text-muted">{c.cap}</div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function DayNote({ icon: Icon, title, meta }: { icon: LucideIcon; title: string; meta: string }) {
  return (
    <div className="rounded-lg border border-line px-2.5 py-2">
      <div className="flex items-center gap-1.5 text-xs font-semibold">
        <Icon className="size-3" />
        {title}
      </div>
      <div className="mt-1 text-[11px] text-muted">{meta}</div>
    </div>
  );
}

function TextLines({ widths, className }: { widths: number[]; className?: string }) {
  return (
    <div className={cn("flex flex-col gap-[11px]", className)}>
      {widths.map((w, i) => (
        <div key={i} className="h-2.5 rounded-[5px] bg-[#efefef]" style={{ width: `${w}%` }} />
      ))}
    </div>
  );
}
