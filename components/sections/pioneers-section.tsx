"use client";

import { useRef } from "react";
import { motion, useInView, useMotionValue, useMotionTemplate } from "framer-motion";
import { ExternalLink, Code2, Bug, Brain, Rocket, Layers, Network, Sparkles } from "lucide-react";

const pioneers = [
  {
    name: "Ada Lovelace",
    years: "1815 - 1852",
    title: "First Computer Programmer",
    description:
      "Wrote the first algorithm intended for a machine. She saw the potential of computers beyond pure calculation, envisioning them as tools for creating music and art.",
    gradient: "from-blue-500 to-indigo-500",
    icon: Code2,
    span: "md:col-span-2",
    wikiUrl: "https://en.wikipedia.org/wiki/Ada_Lovelace",
  },
  {
    name: "Grace Hopper",
    years: "1906 - 1992",
    title: "Pioneer of Computer Programming",
    description:
      "Developed the first compiler and was instrumental in creating COBOL. She popularized the term 'debugging' after removing a moth from a computer.",
    gradient: "from-emerald-500 to-teal-500",
    icon: Bug,
    span: "md:col-span-1",
    wikiUrl: "https://en.wikipedia.org/wiki/Grace_Hopper",
  },
  {
    name: "Fei-Fei Li",
    years: "1976 - Present",
    title: "Pioneer of Modern AI & Computer Vision",
    description:
      "Created ImageNet, the landmark dataset that ignited the deep learning revolution. As Chief Scientist of AI/ML at Google Cloud, she champions human-centered AI and founded AI4ALL.",
    gradient: "from-violet-500 to-pink-500",
    icon: Brain,
    span: "md:col-span-1",
    wikiUrl: "https://en.wikipedia.org/wiki/Fei-Fei_Li",
  },
  {
    name: "Katherine Johnson",
    years: "1918 - 2020",
    title: "NASA Mathematician",
    description:
      "Her calculations were critical to the success of the first U.S. crewed spaceflights. John Glenn specifically requested her to verify calculations.",
    gradient: "from-pink-500 to-rose-500",
    icon: Rocket,
    span: "md:col-span-2",
    wikiUrl: "https://en.wikipedia.org/wiki/Katherine_Johnson",
  },
  {
    name: "Margaret Hamilton",
    years: "1936 - Present",
    title: "Software Engineering Pioneer",
    description:
      "Led the team that developed the onboard flight software for NASA's Apollo missions. She coined the term 'software engineering'.",
    gradient: "from-amber-500 to-orange-500",
    icon: Layers,
    span: "md:col-span-2",
    wikiUrl: "https://en.wikipedia.org/wiki/Margaret_Hamilton_(software_engineer)",
  },
  {
    name: "Radia Perlman",
    years: "1951 - Present",
    title: "Mother of the Internet",
    description:
      "Invented the Spanning Tree Protocol (STP), fundamental to the operation of network bridges. Her work enabled the internet as we know it.",
    gradient: "from-cyan-500 to-blue-500",
    icon: Network,
    span: "md:col-span-1",
    wikiUrl: "https://en.wikipedia.org/wiki/Radia_Perlman",
  },
];

export function PioneersSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-32 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        <div className="absolute top-1/4 right-0 w-[30vw] h-[30vw] rounded-full bg-purple-600/5 blur-[100px]" />
        <div className="absolute bottom-1/4 left-0 w-[25vw] h-[25vw] rounded-full bg-blue-600/5 blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block text-sm font-medium tracking-widest uppercase text-purple-400 mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Standing on the Shoulders of Giants
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Women Who{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Changed Computing
            </span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            These remarkable women broke barriers and laid the foundation for
            modern technology. Their legacy inspires us every day.
          </p>
        </motion.div>

        {/* Pioneer cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pioneers.map((pioneer, index) => (
              <motion.div
                key={pioneer.name}
                className={pioneer.span}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <PioneerDetailCard {...pioneer} />
              </motion.div>
          ))}

          {/* "And Many More" Dedicated Sign-off Card */}
          <motion.div
            className="col-span-1 md:col-span-2 lg:col-span-3 flex items-center justify-center p-12 md:p-16 relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-emerald-500/5 border border-white/10 group cursor-default"
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: pioneers.length * 0.1 }}
          >
            {/* Soft pulsing glow behind */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-emerald-500/20 opacity-0 transition-opacity duration-700 group-hover:opacity-100 blur-3xl" />
            
            <div className="relative flex flex-col items-center text-center z-10 w-full">
              <Sparkles className="w-10 h-10 text-white/80 mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.7)] animate-pulse" />
              <h3 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/40 tracking-tight mb-4">
                ...and many more.
              </h3>
              <p className="text-base md:text-xl text-white/50 font-medium max-w-3xl leading-relaxed">
                The legacy continues today. Women across the globe are actively architecting the future of artificial intelligence, quantum computing, and global infrastructure every single day.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PioneerDetailCard({
  name,
  years,
  title,
  description,
  gradient,
  icon: Icon,
  wikiUrl,
}: {
  name: string;
  years: string;
  title: string;
  description: string;
  gradient: string;
  icon: React.ElementType;
  wikiUrl: string;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      className="group relative h-full rounded-[2rem] overflow-hidden cursor-pointer bg-white/[0.01] border border-white/[0.05]"
      onMouseMove={handleMouseMove}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {/* Magnetic Spotlight Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.1),
              transparent 80%
            )
          `,
        }}
      />

      {/* Persistent gradient accent line */}
      <div
        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient} opacity-60 group-hover:opacity-100 transition-opacity`}
      />

      <div className="relative p-8 h-full flex flex-col z-10">
        {/* Header with Holographic Orb */}
        <div className="flex items-start justify-between mb-8">
          <div className="relative">
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-40 blur-xl rounded-full transition-opacity group-hover:opacity-80`} />
            <div className="relative w-16 h-16 rounded-full bg-white/10 backdrop-blur-2xl border border-white/20 flex items-center justify-center shadow-[inset_0_2px_20px_rgba(255,255,255,0.1)]">
              <Icon className="w-7 h-7 text-white drop-shadow-md" />
            </div>
          </div>
          <a
            href={wikiUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              className="opacity-0 group-hover:opacity-100 transition-opacity p-2 bg-white/5 rounded-full border border-white/10 hover:bg-white/10"
              whileHover={{ scale: 1.1, rotate: 12 }}
            >
              <ExternalLink className="w-4 h-4 text-white" />
            </motion.div>
          </a>
        </div>

        {/* Name and years */}
        <h3 className="text-2xl font-black text-white mb-1 tracking-tight">{name}</h3>
        <p className="text-sm font-medium tracking-widest uppercase text-white/40 mb-6">{years}</p>

        {/* Title */}
        <p
          className={`text-lg font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-4`}
        >
          {title}
        </p>

        {/* Description */}
        <p className="text-base text-white/50 leading-relaxed font-medium max-w-sm">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
