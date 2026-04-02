"use client";

import { useRef, useId, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { Code2, Bug, Rocket, Layers, Network, BrainCircuit } from "lucide-react";

const pioneers = [
  {
    name: "Ada Lovelace",
    tagline: "The First Programmer",
    year: "1815-1852",
    image: "/pioneers/ada-lovelace.jpg",
    gradient: "from-blue-500 to-indigo-500",
    icon: Code2,
  },
  {
    name: "Grace Hopper",
    tagline: "Queen of Code",
    year: "1906-1992",
    image: "/pioneers/grace-hopper.jpg",
    gradient: "from-emerald-500 to-teal-500",
    icon: Bug,
  },
  {
    name: "Katherine Johnson",
    tagline: "The Human Computer",
    year: "1918-2020",
    image: "/pioneers/katherine-johnson.jpg",
    gradient: "from-pink-500 to-rose-500",
    icon: Rocket,
  },
  {
    name: "Margaret Hamilton",
    tagline: "Software Pioneer",
    year: "1936-Present",
    image: "/pioneers/margaret-hamilton.jpg",
    gradient: "from-amber-500 to-orange-500",
    icon: Layers,
  },
  {
    name: "Radia Perlman",
    tagline: "Mother of the Internet",
    year: "1951-Present",
    image: "/pioneers/radia-perlman.jpg",
    gradient: "from-cyan-500 to-blue-500",
    icon: Network,
  },
  {
    name: "Fei-Fei Li",
    tagline: "AI Visionary",
    year: "1976-Present",
    image: "/pioneers/fei-fei-li.jpg",
    gradient: "from-purple-500 to-fuchsia-500",
    icon: BrainCircuit,
  },
];

// Extracted so useTransform is at the top level of a real component (Rules of Hooks)
function ProgressDot({
  pioneer,
  index,
  scrollYProgress,
}: {
  pioneer: (typeof pioneers)[0];
  index: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const start = index / (pioneers.length + 1);
  const end = (index + 1) / (pioneers.length + 1);
  const backgroundColor = useTransform(
    scrollYProgress,
    [start, end],
    ["rgba(255,255,255,0.15)", "rgba(59,130,246,1)"]
  );

  return (
    <motion.div className="group relative">
      <motion.div
        className="w-1.5 h-1.5 rounded-full"
        style={{ backgroundColor, willChange: "background-color" }}
      />
      <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <span className="text-xs text-white/60 whitespace-nowrap bg-white/5 px-2 py-1 rounded">
          {pioneer.name}
        </span>
      </div>
    </motion.div>
  );
}

// Mobile: snappy. Desktop: just one notch slower (heavier mass, lower stiffness)
const SPRING_MOBILE  = { stiffness: 120, damping: 30, mass: 0.5,  restDelta: 0.001 };
const SPRING_DESKTOP = { stiffness: 70,  damping: 30, mass: 0.85, restDelta: 0.001 };

export function ScrollHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const maskId = useId();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // ── Spring-smooth all motion values ──────────────────────────────────────
  // Raw scrollYProgress is stepped; springs add momentum. Desktop is one notch slower.
  const [springCfg, setSpringCfg] = useState(SPRING_DESKTOP);
  useEffect(() => {
    const update = () => setSpringCfg(window.innerWidth < 768 ? SPRING_MOBILE : SPRING_DESKTOP);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  const smoothProgress = useSpring(scrollYProgress, springCfg);

  // ── Carousel travel distance (dynamic, pixel-precise) ──────────────────
  const [scrollEnd, setScrollEnd] = useState("-200px");

  useEffect(() => {
    const TOTAL_CARDS = pioneers.length + 1; // 6 pioneers + 1 CTA
    const compute = () => {
      const vw = window.innerWidth;
      const cardWidth = vw < 768 ? vw * 0.85 : vw < 1024 ? vw * 0.5 : vw * 0.4;
      const gap = vw < 768 ? 24 : 40;
      const paddingLeft = vw * 0.05;
      const totalWidth = paddingLeft + TOTAL_CARDS * cardWidth + (TOTAL_CARDS - 1) * gap;
      const travel = Math.max(0, totalWidth - vw * 0.95);
      setScrollEnd(`-${Math.round(travel)}px`);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  // ── Motion values (all driven off the spring for buttery smoothness) ─────
  const pioneersX    = useTransform(smoothProgress, [0.5, 1], ["0px", scrollEnd]);
  const textScale    = useTransform(smoothProgress, [0, 0.4], [1, 3]);
  const maskOpacity  = useTransform(smoothProgress, [0.3, 0.5], [1, 0]);
  const bgY          = useTransform(smoothProgress, [0, 1], ["0%", "-10%"]);
  const scrollHintOp = useTransform(smoothProgress, [0, 0.08], [1, 0]);
  const textStroke   = useTransform(
    smoothProgress,
    [0, 0.4],
    ["3px rgba(255,255,255,1)", "1px rgba(255,255,255,0)"]
  );

  return (
    <section ref={containerRef} className="relative h-[500vh] bg-slate-950">
      {/* ── Sticky viewport ── */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* Ambient background glow */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ y: bgY, willChange: "transform" }}
        >
          <div className="absolute top-[-10%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-blue-900/10 blur-[150px]" />
          <div className="absolute bottom-[-10%] right-[10%] w-[40vw] h-[40vw] rounded-full bg-indigo-900/10 blur-[150px]" />
        </motion.div>

        {/* ── PIONEERS CAROUSEL ── */}
        <div className="absolute inset-0 flex items-center">
          <motion.div
            className="flex gap-6 md:gap-10 pl-[5vw]"
            style={{ x: pioneersX, willChange: "transform" }}
          >
            {pioneers.map((pioneer, index) => (
              <div
                key={pioneer.name}
                className="relative flex-shrink-0 w-[85vw] md:w-[50vw] lg:w-[40vw] h-[75vh] rounded-[2rem] overflow-hidden group"
                style={{ willChange: "transform" }}
              >
                {/* Pioneer image */}
                <div className="absolute inset-0">
                  <Image
                    src={pioneer.image}
                    alt={pioneer.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority={index < 2}
                  />
                  <div className="absolute inset-0 bg-slate-950/20 mix-blend-multiply" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90" />
                </div>

                {/* Pioneer info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-12">
                  <div className="flex items-end justify-between mb-6">
                    <div>
                      <span className="inline-block text-blue-400 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3">
                        {pioneer.year}
                      </span>
                      <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-2 tracking-tight leading-none">
                        {pioneer.name}
                      </h2>
                      <p className={`text-lg md:text-xl lg:text-2xl bg-gradient-to-r ${pioneer.gradient} bg-clip-text text-transparent font-bold tracking-wide`}>
                        {pioneer.tagline}
                      </p>
                    </div>
                    <div className="relative group/badge">
                      <div className={`absolute inset-0 bg-gradient-to-br ${pioneer.gradient} opacity-50 blur-md rounded-full transition-opacity group-hover/badge:opacity-100`} />
                      <div className="relative w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
                        <pioneer.icon className="w-7 h-7 text-white drop-shadow-sm" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative number */}
                <div className="absolute top-6 right-6 md:top-10 md:right-10">
                  <span className="text-[100px] md:text-[150px] lg:text-[200px] font-black text-white/[0.03] leading-none select-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Border glow */}
                <div className="absolute inset-0 rounded-[2rem] border border-white/10 group-hover:border-blue-500/30 transition-colors duration-500" />
              </div>
            ))}

            {/* Final CTA card */}
            <div className="relative flex-shrink-0 w-[85vw] md:w-[50vw] lg:w-[40vw] h-[75vh] rounded-[2rem] overflow-hidden flex items-center justify-center bg-gradient-to-br from-slate-900/50 via-[#020617] to-blue-900/20 border border-blue-500/20">
              <div className="text-center px-8">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight">
                  Continue the<br />
                  <span className="bg-gradient-to-r from-blue-300 via-indigo-400 to-blue-500 bg-clip-text text-transparent">
                    Legacy
                  </span>
                </h2>
                <p className="text-lg md:text-xl text-slate-400 max-w-sm mx-auto">
                  Join SSN ACM-W and shape the future of technology
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── SVG TEXT MASK OVERLAY ── */}
        <motion.div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{ opacity: maskOpacity, willChange: "opacity" }}
        >
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <defs>
              <mask id={maskId}>
                <rect width="100%" height="100%" fill="white" />
                <motion.text
                  x="50" y="55"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="black"
                  fontSize="18"
                  fontWeight="900"
                  fontFamily="system-ui, -apple-system, sans-serif"
                  letterSpacing="-0.02em"
                  style={{ scale: textScale }}
                >
                  ACM-W
                </motion.text>
              </mask>
            </defs>
            <rect width="100%" height="100%" fill="#020617" mask={`url(#${maskId})`} />
          </svg>

          {/* SSN eyebrow pill + ACM-W outline */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center gap-4"
            style={{ scale: textScale, willChange: "transform" }}
          >
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.05)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400" />
              </span>
              <span className="text-[2.5vw] md:text-[0.7vw] font-bold tracking-[0.35em] text-white/70 uppercase select-none whitespace-nowrap">
                SSN College of Engineering
              </span>
            </div>
            <motion.span
              className="text-[18vw] font-black tracking-tighter select-none leading-none"
              style={{ color: "transparent", WebkitTextStroke: textStroke, willChange: "transform" }}
            >
              ACM-W
            </motion.span>
          </motion.div>
        </motion.div>

        {/* ── Scroll indicator ── */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
          style={{ opacity: scrollHintOp }}
        >
          <span className="text-[10px] text-white/30 tracking-[0.4em] uppercase font-medium">
            Scroll to explore
          </span>
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1.5">
            <motion.div
              className="w-1 h-1.5 rounded-full bg-white/50"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

        {/* ── Progress dots (desktop only) ── */}
        <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col gap-2">
          {pioneers.map((pioneer, index) => (
            <ProgressDot
              key={pioneer.name}
              pioneer={pioneer}
              index={index}
              scrollYProgress={smoothProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
