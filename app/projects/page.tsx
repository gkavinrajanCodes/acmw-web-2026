"use client";

import { Github, ExternalLink, Code2, Cpu, Globe, BookOpen, Users, Sparkles } from "lucide-react";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";

const projects = [
  {
    title: "SheHacks Portal",
    description: "A comprehensive hackathon management platform built for women-centric tech events. Features team formation, project submissions, judging workflows, and real-time leaderboards.",
    status: "Live",
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    icon: Code2,
    gradient: "from-violet-600 to-fuchsia-600",
    github: "#",
    demo: "#",
    contributors: 8,
    impact: "Used in 3 hackathons, 500+ participants",
  },
  {
    title: "TechMentor Connect",
    description: "A mentorship matching platform connecting women students with industry professionals. Uses AI to match mentors and mentees based on skills, interests, and goals.",
    status: "Beta",
    tech: ["React", "Python", "FastAPI", "PostgreSQL"],
    icon: Users,
    gradient: "from-fuchsia-600 to-pink-600",
    github: "#",
    contributors: 5,
    impact: "50+ mentorship pairs formed",
  },
  {
    title: "CodeHer Learning",
    description: "An interactive learning platform with curated resources, coding challenges, and progress tracking specifically designed for women beginning their tech journey.",
    status: "Live",
    tech: ["Vue.js", "Node.js", "MongoDB", "Docker"],
    icon: BookOpen,
    gradient: "from-cyan-600 to-blue-600",
    github: "#",
    demo: "#",
    contributors: 12,
    impact: "1000+ active learners",
  },
  {
    title: "WiT Research Hub",
    description: "A collaborative platform for sharing and discovering research opportunities in computer science. Connects students with faculty for research projects.",
    status: "Development",
    tech: ["Next.js", "Prisma", "PostgreSQL", "tRPC"],
    icon: Cpu,
    gradient: "from-emerald-600 to-teal-600",
    github: "#",
    contributors: 4,
    impact: "Coming soon",
  },
  {
    title: "SafeSpace Bot",
    description: "A Discord bot providing resources, reporting mechanisms, and community moderation for women in tech Discord servers.",
    status: "Live",
    tech: ["Python", "Discord.py", "Redis", "NLP"],
    icon: Sparkles,
    gradient: "from-amber-600 to-orange-600",
    github: "#",
    contributors: 3,
    impact: "Active in 15+ servers",
  },
  {
    title: "WiC Network",
    description: "A professional networking platform exclusively for women in computing across India. Features job boards, events, and community forums.",
    status: "Planning",
    tech: ["React Native", "GraphQL", "AWS"],
    icon: Globe,
    gradient: "from-rose-600 to-red-600",
    github: "#",
    contributors: 0,
    impact: "Launching Q3 2026",
  },
];

const statusColors: Record<string, string> = {
  Live: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  Beta: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  Development: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  Planning: "bg-violet-500/20 text-violet-400 border-violet-500/30",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      
      {/* Header */}
      <section className="relative overflow-hidden pb-16 pt-32">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/30 via-[#0a0a0a] to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.15),transparent_50%)]" />
        
        <div className="max-w-7xl relative z-10 mx-auto px-6 lg:px-8">
          <h1 className="mb-4 text-5xl font-black tracking-tight text-white md:text-6xl lg:text-7xl">
            Our{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="max-w-2xl text-lg text-white/60 md:text-xl">
            Open source tools and platforms built by our community, for the community.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:bg-white/10"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Header with icon */}
                <div className="p-8 pb-4">
                  <div className="mb-4 flex items-start justify-between">
                    <div className={`rounded-2xl bg-gradient-to-br ${project.gradient} p-3`}>
                      <project.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className={`rounded-full border px-3 py-1 text-xs font-medium ${statusColors[project.status]}`}>
                      {project.status}
                    </span>
                  </div>

                  <h3 className="mb-2 text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-sm text-white/50">
                    {project.description}
                  </p>
                </div>

                {/* Tech stack */}
                <div className="px-8 pb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg bg-white/5 px-2 py-1 text-xs text-white/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Impact & contributors */}
                <div className="mt-auto border-t border-white/10 p-8 pt-4">
                  <div className="mb-4 flex items-center justify-between text-sm">
                    <span className="text-white/40">
                      {project.contributors} contributors
                    </span>
                    <span className="text-white/60">{project.impact}</span>
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2 text-sm text-white/60 transition-all hover:bg-white/10 hover:text-white"
                      >
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2 text-sm text-white/60 transition-all hover:bg-white/10 hover:text-white"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contribute CTA */}
      <section className="relative py-16">
        <div className="container mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-950/50 via-blue-950/50 to-violet-950/50 p-12 text-center backdrop-blur-sm">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Want to Contribute?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-white/60">
              All our projects are open source. Check out our GitHub organization to find issues, 
              submit PRs, or propose new project ideas.
            </p>
            <a
              href="https://github.com/acmw-ssn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-4 font-semibold text-white transition-all hover:shadow-lg hover:shadow-cyan-500/25"
            >
              <Github className="h-5 w-5" />
              Visit Our GitHub
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
