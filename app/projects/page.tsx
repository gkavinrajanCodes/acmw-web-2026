"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";
import {
  Github,
  ExternalLink,
  Cpu,
  Network,
  BrainCircuit,
  Zap,
  Shield,
  BarChart3,
  Layers,
  Radio,
} from "lucide-react";

const projects = [
  {
    id: "orderbook",
    name: "Orderbook",
    tagline: "High-Frequency Trading Engine",
    description:
      "A high-performance, thread-safe orderbook implementation in C++ built for high-frequency trading (HFT) environments. Manages buy/sell orders, handles sub-microsecond order matching, and supports the full spectrum of financial order types used in live markets.",
    highlights: [
      { icon: Zap, label: "Sub-µs order processing", color: "text-amber-400" },
      { icon: Shield, label: "Full thread safety", color: "text-emerald-400" },
      { icon: BarChart3, label: "O(1) cancellation", color: "text-blue-400" },
      { icon: Layers, label: "GTC / FAK / FOK / GFD / Market", color: "text-violet-400" },
    ],
    techStack: ["C++17", "STL", "Multithreading", "Mutex", "Double-Linked List"],
    gradient: "from-amber-500 via-orange-500 to-red-500",
    bgGlow: "bg-amber-500/5",
    borderHover: "hover:border-amber-500/40",
    glowColor: "rgba(245,158,11,0.15)",
    icon: BarChart3,
    github: "https://github.com/gkavinrajanCodes/Orderbook",
    badge: "Systems • Finance",
    badgeColor: "bg-amber-500/10 border-amber-500/20 text-amber-300",
  },
  {
    id: "iisy",
    name: "IIsy",
    tagline: "Hybrid In-Network ML Classification",
    description:
      "Artifact for the IEEE/ACM Transactions on Networking paper — IIsy: Hybrid In-Network Classification Using Programmable Switches. Deploys a compact ML model directly inside the network switch and a larger model at the endpoint, achieving line-rate classification without sacrificing accuracy.",
    highlights: [
      { icon: BrainCircuit, label: "In-network ML inference", color: "text-violet-400" },
      { icon: Network, label: "Programmable P4 switches", color: "text-blue-400" },
      { icon: Zap, label: "Line-rate classification", color: "text-cyan-400" },
      { icon: Layers, label: "Hybrid split-model architecture", color: "text-purple-400" },
    ],
    techStack: ["Python", "P4", "Tofino", "BMv2", "Scikit-learn"],
    gradient: "from-violet-500 via-purple-500 to-blue-500",
    bgGlow: "bg-violet-500/5",
    borderHover: "hover:border-violet-500/40",
    glowColor: "rgba(139,92,246,0.15)",
    icon: BrainCircuit,
    github: "https://github.com/gkavinrajanCodes/iisy",
    badge: "Research • IEEE/ACM",
    badgeColor: "bg-violet-500/10 border-violet-500/20 text-violet-300",
  },
  {
    id: "tcp-sniffer",
    name: "TCP Sniffer",
    tagline: "Network Packet Analyzer in C++",
    description:
      "A low-level network packet capture and analysis tool written in C++. Uses raw sockets and libpcap to intercept live traffic with port and protocol filters, and supports offline `.pcap` file analysis — bridging the gap between systems programming and network forensics.",
    highlights: [
      { icon: Radio, label: "Raw socket live capture", color: "text-cyan-400" },
      { icon: Network, label: "libpcap integration", color: "text-blue-400" },
      { icon: Shield, label: "TCP / port filtering", color: "text-emerald-400" },
      { icon: Cpu, label: "Offline .pcap analysis", color: "text-rose-400" },
    ],
    techStack: ["C++", "Raw Sockets", "libpcap", "Linux", "Makefile"],
    gradient: "from-cyan-500 via-teal-500 to-emerald-500",
    bgGlow: "bg-cyan-500/5",
    borderHover: "hover:border-cyan-500/40",
    glowColor: "rgba(6,182,212,0.15)",
    icon: Network,
    github: "https://github.com/gkavinrajanCodes/tcp-sniffer",
    badge: "Systems • Networking",
    badgeColor: "bg-cyan-500/10 border-cyan-500/20 text-cyan-300",
  },
];

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = project.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`group relative rounded-[2rem] border border-white/[0.08] bg-white/[0.02] ${project.borderHover} transition-all duration-500 overflow-hidden`}
      style={{ willChange: "transform, opacity" }}
    >
      {/* Glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[2rem]"
        style={{ background: `radial-gradient(ellipse at top left, ${project.glowColor}, transparent 70%)` }}
      />

      {/* Gradient top bar */}
      <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${project.gradient} opacity-50 group-hover:opacity-100 transition-opacity`} />

      <div className="relative p-8 md:p-12">
        {/* Header row */}
        <div className="flex items-start justify-between mb-8">
          <div className="flex items-center gap-5">
            {/* Icon orb */}
            <div className="relative">
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-30 blur-xl rounded-full`} />
              <div className="relative w-14 h-14 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center shadow-[inset_0_2px_10px_rgba(255,255,255,0.05)]">
                <Icon className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <span className={`inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full border ${project.badgeColor} mb-2`}>
                {project.badge}
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-none">{project.name}</h2>
            </div>
          </div>

          {/* GitHub link */}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all text-sm font-medium"
          >
            <Github className="w-4 h-4" />
            <span className="hidden sm:inline">View Repo</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Tagline */}
        <p className={`text-lg md:text-xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent mb-4 inline-block pb-0.5`}>
          {project.tagline}
        </p>

        {/* Description */}
        <p className="text-white/50 leading-relaxed mb-10 max-w-3xl font-medium">
          {project.description}
        </p>

        {/* Highlights grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {project.highlights.map(({ icon: HIcon, label, color }) => (
            <div
              key={label}
              className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] group-hover:border-white/10 transition-colors"
            >
              <HIcon className={`w-4 h-4 flex-shrink-0 ${color}`} />
              <span className="text-xs font-semibold text-white/60 leading-tight">{label}</span>
            </div>
          ))}
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-xs font-bold text-white/40 border border-white/[0.06] bg-white/[0.02] tracking-wide"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      <section className="relative pt-40 pb-32 overflow-hidden">
        {/* Background ambience */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-gradient-to-b from-violet-600/8 via-blue-600/5 to-transparent blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full bg-amber-500/3 blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-[350px] h-[350px] rounded-full bg-cyan-500/3 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <motion.div
            ref={headerRef}
            className="text-center mb-24"
            initial={{ opacity: 0, y: 40 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <motion.span
              className="inline-block text-sm font-bold tracking-[0.3em] uppercase text-purple-400 mb-5"
              initial={{ opacity: 0 }}
              animate={headerInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              Built by SSN ACM-W
            </motion.span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-6 leading-none">
              Our{" "}
              <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent inline-block pb-1">
                Projects
              </span>
            </h1>
            <p className="text-xl text-white/50 font-medium max-w-2xl mx-auto leading-relaxed">
              From sub-microsecond trading engines to IEEE-published network ML research — open-source projects born out of SSN ACM-W.
            </p>


          </motion.div>

          {/* Project cards */}
          <div className="flex flex-col gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="mt-24 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-white/30 text-sm font-medium mb-4 tracking-wide">See all repositories on GitHub</p>
            <a
              href="https://github.com/gkavinrajanCodes"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/[0.03] text-white/60 hover:text-white hover:bg-white/[0.06] hover:border-white/20 transition-all text-sm font-semibold"
            >
              <Github className="w-4 h-4" />
              gkavinrajanCodes
              <ExternalLink className="w-3 h-3" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
