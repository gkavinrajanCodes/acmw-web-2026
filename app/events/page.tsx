"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";
import Image from "next/image";
import { PlayCircle, Brain, Stethoscope, Activity, Trophy, Users, Target } from "lucide-react";

const cspGalleryItems = [
  { id: 1, title: "Logical Foundations", desc: "Introducing core computational concepts to beginners." },
  { id: 2, title: "Interactive Puzzles", desc: "Teaching problem-solving through hands-on play." },
  { id: 3, title: "Algorithmic Thinking", desc: "Breaking down complex problems into actionable steps." },
  { id: 4, title: "Team Collaboration", desc: "Working together to build creative logical solutions." },
  { id: 5, title: "Unplugged Activities", desc: "Engaging students without the need for computers." },
  { id: 6, title: "Empowering Futures", desc: "Inspiring the next generation of rural technologists." }
];

const CSPathshalaGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex h-[60vh] min-h-[400px] w-full gap-2 md:gap-4 overflow-hidden rounded-[2.5rem] mt-16 shadow-[0_0_80px_rgba(16,185,129,0.1)]">
      {cspGalleryItems.map((item, i) => (
        <motion.div
          key={item.id}
          onHoverStart={() => setHoveredIndex(i)}
          onHoverEnd={() => setHoveredIndex(null)}
          animate={{
            flex: hoveredIndex === null ? 1 : hoveredIndex === i ? 6 : 0.5,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="relative h-full overflow-hidden rounded-2xl md:rounded-[2rem] cursor-pointer bg-white/5 border border-white/10"
          style={{ flex: 1 }} // Initial state for SSR to prevent layout shifts
        >
          <Image
            src={`/csp${item.id}.jpeg`}
            alt={item.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

          {/* Details that fade in when hovered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: hoveredIndex === i ? 1 : 0,
              y: hoveredIndex === i ? 0 : 20
            }}
            transition={{ duration: 0.3 }}
            className="absolute inset-x-0 bottom-0 p-6 md:p-8 whitespace-nowrap"
          >
            <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">{item.title}</h3>
            <p className="text-white/70 text-sm font-medium hidden md:block">{item.desc}</p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

const YugoHackathonSection = () => {
  return (
    <section id="yugo-hackathon" className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-[#0a0a0a] to-[#050505]">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <div className="mb-16 md:mb-24 flex flex-col lg:flex-row gap-10 lg:gap-12 items-start lg:items-end justify-between border-b border-white/[0.05] pb-16">
          <div className="max-w-3xl w-full">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md mb-6">
              <span className="text-sm font-semibold tracking-widest text-blue-400 uppercase">First-ever ACM-W Hackathon at SSN</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
              YŪGO’26 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Hackathon</span>
            </h2>
            <p className="text-white/60 text-xl font-medium leading-relaxed">
              A premium AI-driven healthcare hackathon challenging the brightest minds to build end-to-end Machine Learning solutions.
              From raw data pipelines to live clinical dashboards, participants architected real-world impact.
            </p>
          </div>

          <div className="w-full lg:w-auto flex-shrink-0 grid grid-cols-2 gap-4">
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm min-w-[140px] md:min-w-[200px]">
              <Activity className="w-8 h-8 text-blue-400 mb-4" />
              <p className="text-3xl font-black text-white mb-1">60+</p>
              <p className="text-white/50 text-sm font-medium">Teams Registered</p>
            </div>
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm min-w-[200px]">
              <Target className="w-8 h-8 text-purple-400 mb-4" />
              <p className="text-3xl font-black text-white mb-1">13</p>
              <p className="text-white/50 text-sm font-medium">Finalists Chosen</p>
            </div>
          </div>
        </div>

        {/* Problem Statements */}
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">Clinical Problem Statements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-24">
          <div className="group p-8 md:p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] transition-colors relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Brain className="w-32 h-32 text-blue-400" />
            </div>
            <Activity className="w-10 h-10 text-blue-400 mb-6 relative z-10" />
            <h4 className="text-2xl font-bold text-white mb-4 relative z-10">Sleep Apnea Detection</h4>
            <p className="text-white/50 leading-relaxed mb-8 relative z-10 text-lg">
              Translating raw accelerometer data into accurate AHI (Apnea-Hypopnea Index) estimation models to assess sleep disorders non-invasively.
            </p>
            <div className="flex flex-wrap gap-2 relative z-10">
              <span className="px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-sm font-medium text-blue-300">Data Pipeline</span>
              <span className="px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-sm font-medium text-blue-300">Regression ML</span>
            </div>
          </div>

          <div className="group p-8 md:p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] transition-colors relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Stethoscope className="w-32 h-32 text-purple-400" />
            </div>
            <Stethoscope className="w-10 h-10 text-purple-400 mb-6 relative z-10" />
            <h4 className="text-2xl font-bold text-white mb-4 relative z-10">Cough Detection</h4>
            <p className="text-white/50 leading-relaxed mb-8 relative z-10 text-lg">
              Advanced audio processing to isolate specific cough events from noisy environments, outputting precise timestamps and confidence probability arrays.
            </p>
            <div className="flex flex-wrap gap-2 relative z-10">
              <span className="px-4 py-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-sm font-medium text-purple-300">Audio Processing</span>
              <span className="px-4 py-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-sm font-medium text-purple-300">Classification</span>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-white">Live Finals Presentation</h3>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-medium">
            <Trophy className="w-4 h-4" /> 2 Winners Crowned
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[auto] md:h-[600px]">
          <div className="md:col-span-2 md:row-span-2 h-[300px] md:h-full relative rounded-3xl overflow-hidden group">
            <Image src="/yugo4.jpg" alt="Yugo Event 4" fill priority className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
          </div>
          <div className="md:col-span-2 h-[200px] md:h-auto relative rounded-3xl overflow-hidden group">
            <Image src="/yugo5.jpg" alt="Yugo Event 5" fill priority className="object-cover transition-transform duration-700 group-hover:scale-105 object-top" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
          </div>
          <div className="h-[200px] md:h-auto relative rounded-3xl overflow-hidden group">
            <Image src="/yugo2.jpeg" alt="Yugo Event 2" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
          </div>
          <div className="relative rounded-3xl overflow-hidden group">
            <Image src="/yugo6.jpg" alt="Yugo Event 6" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
          </div>
        </div>

        {/* Champions Podium */}
        <div className="mt-32 border-t border-white/5 pt-20">
          <div className="flex flex-col items-center justify-center text-center mb-16">
            <div className="p-4 bg-yellow-500/10 rounded-2xl border border-yellow-500/20 mb-6 drop-shadow-[0_0_30px_rgba(250,204,21,0.15)]">
              <Trophy className="w-10 h-10 text-yellow-400" />
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-6">Champions of YŪGO</h3>
            <p className="text-white/50 text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
              The elite teams who pushed the absolute boundaries of algorithmic healthcare, outperforming 60+ competitors to deliver production-ready clinical AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {/* Winner 1 */}
            <div className="group relative rounded-[2.5rem] overflow-hidden p-[2px]">
              {/* Animated Border Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/40 via-blue-500/40 to-yellow-400/40 opacity-50 blur-xl group-hover:opacity-100 transition-opacity duration-700 animate-pulse" />
              <div className="relative h-[350px] md:h-[450px] rounded-[2.4rem] overflow-hidden bg-black/90">
                <div className="absolute top-6 left-6 z-20 px-5 py-2.5 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,1)]" />
                  <span className="text-white font-bold text-xs tracking-widest uppercase">Winner: Cough Detection</span>
                </div>
                <Image src="/yugo_winner1.jpeg" alt="Yugo Winners Sleep Apnea" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                {/* Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Winner 2 */}
            <div className="group relative rounded-[2.5rem] overflow-hidden p-[2px]">
              {/* Animated Border Glow */}
              <div className="absolute inset-0 bg-gradient-to-bl from-yellow-400/40 via-purple-500/40 to-yellow-400/40 opacity-50 blur-xl group-hover:opacity-100 transition-opacity duration-700 animate-pulse" />
              <div className="relative h-[350px] md:h-[450px] rounded-[2.4rem] overflow-hidden bg-black/90">
                <div className="absolute top-6 left-6 z-20 px-5 py-2.5 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,1)]" />
                  <span className="text-white font-bold text-xs tracking-widest uppercase">Winner: Sleep Apnea Detection</span>
                </div>
                <Image src="/yugo_winner2.jpeg" alt="Yugo Winners Cough Detection" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            id="hero-video"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60 blur-0"
          >
            <source src="/ACMctFinal.mp4" type="video/mp4" />
          </video>
          {/* Gradients overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/80" />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 backdrop-blur-md mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
            </span>
            <span className="text-sm font-semibold tracking-widest text-violet-300 uppercase">On-Campus Flagship</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-6 leading-tight">
            Computational <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent drop-shadow-2xl">
              Thinking Workshop
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 font-medium max-w-3xl mx-auto leading-relaxed mb-12">
            An engaging, activity-driven hands-on workshop specifically curated for MTech Integrated students at our college to sharpen their computational logic and problem-solving skills.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#csp-initiative" className="px-8 py-4 rounded-full bg-white text-black font-bold text-lg transition-transform hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.3)]">
              View CSPathshala Initiative
            </a>
            <button
              onClick={() => {
                const vid = document.getElementById('hero-video') as HTMLVideoElement;
                if (vid) {
                  vid.muted = false; // Unmute when viewing fullscreen
                  if (vid.requestFullscreen) vid.requestFullscreen();
                }
              }}
              className="px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-bold text-lg transition-all hover:bg-white/10 flex items-center gap-3"
            >
              <PlayCircle className="w-6 h-6" />
              Watch Full Video
            </button>
          </div>
        </div>
      </section>

      {/* Yugo Hackathon Section */}
      <YugoHackathonSection />

      {/* CSPathshala Section */}
      <section id="csp-initiative" className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-emerald-900/10 to-transparent pointer-events-none" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
                The <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">CSPathshala</span> <br /> Initiative
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-6">
                Started by ACM India in 2016, CSpathshala aims to introduce computational thinking into K-12 education across India. The objective is to promote logical problem solving and initiate dialogues with educational boards to formalize computing curricula.
              </p>
              <p className="text-white/60 text-lg leading-relaxed">
                With India's 1.6 million schools and incredible regional diversity, delivering computing education poses unique challenges. Our ACM-W student chapter proudly works at the grassroots level—visiting local schools catering to underprivileged students to teach basic to intermediate computational skills through unplugged, fun, and interactive curriculum activities.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-12 backdrop-blur-md">
              <blockquote className="text-xl md:text-2xl text-white font-medium italic leading-relaxed mb-6">
                "Teaching computing is not just about digital literacy; it is about equipping rural and under-resourced students with formal, analytical logic to shape the future."
              </blockquote>
            </div>
          </div>

          <CSPathshalaGallery />
        </div>
      </section>

      <Footer />
    </main>
  );
}
