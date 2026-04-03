"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";
import { BookOpen, Users, Lightbulb, Globe, ChevronLeft, ChevronRight, School } from "lucide-react";

// ── Photo sessions ──────────────────────────────────────────────────────────
const sessions = [
  {
    id: "nov-2025",
    label: "November 2025",
    subtitle: "Session I",
    color: "from-emerald-500 to-cyan-500",
    accent: "text-emerald-400",
    border: "border-emerald-500/30",
    bg: "bg-emerald-500/10",
    photos: [
      { src: "/csp1.jpeg", caption: "Logical Foundations" },
      { src: "/csp2.jpeg", caption: "Interactive Puzzles" },
      { src: "/csp3.jpeg", caption: "Algorithmic Thinking" },
      { src: "/csp4.jpeg", caption: "Team Collaboration" },
      { src: "/csp5.jpeg", caption: "Unplugged Activities" },
      { src: "/csp6.jpeg", caption: "Empowering Futures" },
    ],
  },
  {
    id: "feb-2026",
    label: "February 2026",
    subtitle: "Session II",
    color: "from-teal-500 to-blue-500",
    accent: "text-teal-400",
    border: "border-teal-500/30",
    bg: "bg-teal-500/10",
    photos: [
      { src: "/cspfeb1.jpg", caption: "Warm Welcome" },
      { src: "/cspfeb2.jpg", caption: "Hands-on Tasks" },
      { src: "/cspfeb3.jpg", caption: "Critical Thinking" },
      { src: "/cspfeb4.jpg", caption: "Group Activity" },
      { src: "/cspfeb5.jpg", caption: "Student Engagement" },
      { src: "/cspfeb6.jpg", caption: "Closing Reflection" },
    ],
  },
];

// ── Expanding gallery (reused from events page pattern) ──────────────────────
function ExpandingGallery({ photos }: { photos: { src: string; caption: string }[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="flex h-[55vh] min-h-[360px] w-full gap-2 md:gap-3 overflow-hidden rounded-[2rem] shadow-[0_0_80px_rgba(16,185,129,0.08)]">
      {photos.map((photo, i) => (
        <motion.div
          key={photo.src}
          onHoverStart={() => setHovered(i)}
          onHoverEnd={() => setHovered(null)}
          onClick={() => setHovered(hovered === i ? null : i)}
          animate={{ flex: hovered === null ? 1 : hovered === i ? 6 : 0.5 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="relative h-full overflow-hidden rounded-xl md:rounded-[1.5rem] cursor-pointer bg-white/5 border border-white/10"
          style={{ flex: 1 }}
        >
          <Image
            src={photo.src}
            alt={photo.caption}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 20vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: hovered === i ? 1 : 0, y: hovered === i ? 0 : 20 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-x-0 bottom-0 p-4 md:p-6"
          >
            <p className="text-white text-sm md:text-lg font-bold truncate">{photo.caption}</p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

// ── Stat card ────────────────────────────────────────────────────────────────
function StatCard({ icon: Icon, value, label, color }: { icon: React.ComponentType<{ className?: string }>; value: string; label: string; color: string }) {
  return (
    <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex flex-col">
      <Icon className={`w-7 h-7 ${color} mb-4`} />
      <p className="text-3xl font-black text-white mb-1">{value}</p>
      <p className="text-sm text-white/50 font-medium">{label}</p>
    </div>
  );
}

export default function CSPathshalaPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        {/* Background glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-gradient-to-b from-emerald-600/10 via-cyan-600/5 to-transparent blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            ref={heroRef}
            className="max-w-4xl"
            initial={{ opacity: 0, y: 40 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-md mb-6">
              <School className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-semibold tracking-widest text-emerald-400 uppercase">ACM India Initiative</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-6 leading-none">
              CS<span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent inline-block pb-1">pathshala</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/50 font-medium leading-relaxed max-w-3xl mb-8">
              Taking computational thinking to classrooms that never had it. SSN ACM-W volunteers visit schools across Tamil Nadu to teach logical reasoning through unplugged, activity-driven sessions.
            </p>

            <blockquote className="border-l-2 border-emerald-500/50 pl-6 text-lg text-white/40 italic font-medium">
              "Teaching computing is not just about digital literacy — it is about equipping rural and under-resourced students with formal, analytical logic to shape the future."
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <StatCard icon={BookOpen} value="2016" label="Year ACM India Started" color="text-emerald-400" />
            <StatCard icon={School} value="5+" label="Schools Visited / Year" color="text-cyan-400" />
            <StatCard icon={Users} value="1.6M" label="Schools Across India" color="text-teal-400" />
            <StatCard icon={Globe} value="10+" label="Sessions Documented" color="text-blue-400" />
          </motion.div>
        </div>
      </section>

      {/* ── What We Teach ── */}
      <section className="py-24 border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3 tracking-tight">What We Teach</h2>
            <p className="text-white/40 font-medium mb-12 max-w-2xl">
              Every session is designed to be accessible without a computer — stimulating logical thinking through play and creative problem-solving.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Lightbulb, title: "Algorithmic Thinking", desc: "Breaking down problems into clear, step-by-step instructions — the foundation of all computing.", color: "text-yellow-400", bar: "from-yellow-500 to-amber-500" },
                { icon: Users, title: "Collaborative Solving", desc: "Working in teams to tackle puzzles that mirror real-world software engineering challenges.", color: "text-emerald-400", bar: "from-emerald-500 to-teal-500" },
                { icon: BookOpen, title: "Unplugged Activities", desc: "Card games, sorting races, and maze-drawing — computing concepts delivered without a single device.", color: "text-cyan-400", bar: "from-cyan-500 to-blue-500" },
              ].map((item) => (
                <div key={item.title} className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/[0.06] hover:border-white/10 transition-colors">
                  <div className={`w-10 h-1 rounded-full bg-gradient-to-r ${item.bar} mb-6`} />
                  <item.icon className={`w-8 h-8 ${item.color} mb-4`} />
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-white/50 leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Photo Sessions ── */}
      {sessions.map((session, si) => (
        <section key={session.id} className="py-24 border-t border-white/[0.05]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: si * 0.1 }}
            >
              <div className="flex items-center justify-between mb-10">
                <div>
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border ${session.border} ${session.bg} mb-4`}>
                    <span className={`text-xs font-bold tracking-widest uppercase ${session.accent}`}>{session.subtitle}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
                    <span className={`bg-gradient-to-r ${session.color} bg-clip-text text-transparent`}>{session.label}</span>{" "}
                    Session
                  </h2>
                </div>
                <span className="hidden md:block text-white/20 text-sm font-semibold tracking-widest uppercase">
                  Hover to explore
                </span>
              </div>
              <ExpandingGallery photos={session.photos} />
            </motion.div>
          </div>
        </section>
      ))}

      {/* ── Get Involved CTA ── */}
      <section className="py-24 border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="relative rounded-[2.5rem] overflow-hidden border border-emerald-500/20 bg-gradient-to-br from-emerald-900/20 via-[#0a0a0a] to-cyan-900/10 p-12 md:p-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/5 to-transparent pointer-events-none" />
            <div className="relative">
              <School className="w-12 h-12 text-emerald-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">Want to Volunteer?</h2>
              <p className="text-white/50 text-lg font-medium max-w-xl mx-auto mb-10 leading-relaxed">
                Join the SSN ACM-W team on our next school visit. No prior teaching experience required — just enthusiasm and curiosity.
              </p>
              <a
                href="/#join"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_40px_rgba(16,185,129,0.3)]"
              >
                Join SSN ACM-W
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
