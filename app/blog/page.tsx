import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";
import { ArrowRight, BookOpen, Download, Rocket, Globe, FlaskConical } from "lucide-react";

const newsletters = [
  {
    slug: "march-2026",
    vol: "Vol 5.0",
    edition: "Edition V",
    month: "March 2026",
    title: "March 2026 Edition",
    description:
      "Highlights premier global academic and internship opportunities — the A*STAR Singapore SIPGA award, IIT Bhubaneswar Summer Research, and the French Charpak Master's Scholarship, independently compiled by our team.",
    tags: ["Scholarships", "Internships", "Global"],
    pdfPath: "/SSN ACM-W Newsletter March 2026 (1).pdf",
    gradient: "from-rose-950/50 to-orange-950/50",
    accent: "rose",
    icon: Globe,
    featured: true,
  },
  {
    slug: "february-2026",
    vol: "Vol 4.0",
    edition: "Edition IV",
    month: "February 2026",
    title: "February 2026 Edition",
    description:
      "Features world-class research internship opportunities: IIT Madras SFP, Caltech SURF (USA), IISc CNI, and the prestigious ETH Zurich Robotics Student Fellowship in Switzerland.",
    tags: ["Research", "Fellowships", "Robotics"],
    pdfPath: "/SSN ACM-W Newsletter February 2026.pdf",
    gradient: "from-violet-950/50 to-blue-950/50",
    accent: "violet",
    icon: FlaskConical,
    featured: false,
  },
  {
    slug: "january-2026",
    vol: "Vol 3.0",
    edition: "Edition III",
    month: "January 2026",
    title: "January 2026 Edition",
    description:
      "Curates high-impact opportunities including ISRO's Student Project Trainee Scheme, the HENNGE Global Internship in Tokyo, Japan, and the Aalto Science Institute Summer Research Programme in Finland.",
    tags: ["Space Tech", "Japan", "Finland"],
    pdfPath: "/SSN ACM-W Newsletter January 2026.pdf",
    gradient: "from-emerald-950/50 to-cyan-950/50",
    accent: "emerald",
    icon: Rocket,
    featured: false,
  },
  {
    slug: "december-2025",
    vol: "Vol 2.0",
    edition: "Edition II",
    month: "December 2025",
    title: "December 2025 Edition",
    description:
      "Details the NUS IRIS Fully Funded Research Programme in Singapore, the iconic CERN Summer Student Program 2026, the Santa Fe Institute UCR program, and a CNI Research Internship at IISc.",
    tags: ["CERN", "Singapore", "Complexity Science"],
    pdfPath: "/SSN ACM-W_December_2025.pdf",
    gradient: "from-sky-950/50 to-indigo-950/50",
    accent: "sky",
    icon: Globe,
    featured: false,
  },
  {
    slug: "september-2025",
    vol: "Vol 1.0",
    edition: "Edition I",
    month: "September 2025",
    title: "September 2025 Edition",
    description:
      "Our inaugural edition — covering the Google Application Engineering Intern (Winter 2026), the Lady Ada Programming Contest by ACM-W India, Tata Crucible Campus Quiz 2025, and the OIST Research Internship in Japan.",
    tags: ["Google", "ACM-W India", "OIST Japan"],
    pdfPath: "/SSN ACM-W Newsletter September 2025.pdf",
    gradient: "from-amber-950/50 to-orange-950/50",
    accent: "amber",
    icon: BookOpen,
    featured: false,
  },
];

const accentColors: Record<string, string> = {
  rose: "border-rose-500/50 shadow-[0_0_80px_rgba(244,63,94,0.2)] text-rose-400",
  violet: "border-violet-500/50 shadow-[0_0_60px_rgba(139,92,246,0.15)] text-violet-400",
  emerald: "border-emerald-500/50 shadow-[0_0_60px_rgba(52,211,153,0.15)] text-emerald-400",
  sky: "border-sky-500/50 shadow-[0_0_60px_rgba(14,165,233,0.15)] text-sky-400",
  amber: "border-amber-500/50 shadow-[0_0_60px_rgba(251,191,36,0.15)] text-amber-400",
};

const tagColors: Record<string, string> = {
  rose: "bg-rose-500/10 border-rose-500/20 text-rose-300",
  violet: "bg-violet-500/10 border-violet-500/20 text-violet-300",
  emerald: "bg-emerald-500/10 border-emerald-500/20 text-emerald-300",
  sky: "bg-sky-500/10 border-sky-500/20 text-sky-300",
  amber: "bg-amber-500/10 border-amber-500/20 text-amber-300",
};

export default function BlogPage() {
  const featured = newsletters[0];
  const archive = newsletters.slice(1);

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      <section className="relative pt-40 pb-24 overflow-hidden min-h-screen">
        {/* Background ambient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-rose-500/10 blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                Newsletters
              </span>
            </h1>
            <p className="text-xl text-white/60 font-medium max-w-2xl mx-auto">
              Five editions of the SSN ACM-W monthly newsletter — curating global internships, research fellowships, competitions, and academic opportunities for women in computing.
            </p>
          </div>

          {/* ── Featured Latest Card ── */}
          {(() => {
            const n = featured;
            const Icon = n.icon;
            const colors = accentColors[n.accent];
            return (
              <a
                href={n.pdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-xl transition-all duration-500 hover:${colors} mb-16`}
              >
                <div className="flex flex-col md:flex-row items-stretch">
                  {/* Visual Block — AI generated abstract image */}
                  <div className={`w-full md:w-2/5 bg-gradient-to-br ${n.gradient} p-12 flex flex-col items-center justify-center relative overflow-hidden`}>
                    <div
                      className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-20 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-30"
                      style={{ backgroundImage: "url('/newsletter-hero-bg.png')" }}
                    />
                    <Icon className="w-24 h-24 text-rose-400 mb-6 relative z-10 drop-shadow-[0_0_30px_rgba(251,113,133,0.8)]" />
                    <div className="text-center relative z-10">
                      <p className="text-rose-400 font-bold uppercase tracking-widest text-sm mb-2">Latest Release</p>
                      <p className="text-white font-black text-3xl">{n.vol}</p>
                    </div>
                  </div>

                  {/* Content Block */}
                  <div className="flex-1 p-10 md:p-14 flex flex-col justify-center">
                    <div className="inline-flex max-w-max items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6">
                      <span className="text-xs font-semibold text-white/70 tracking-widest uppercase">{n.month}</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                      {n.title}
                    </h2>
                    <p className="text-lg text-white/50 font-medium mb-8 leading-relaxed">{n.description}</p>
                    <div className="flex flex-wrap gap-2 mb-10">
                      {n.tags.map((tag) => (
                        <span key={tag} className={`px-3 py-1 rounded-full border text-xs font-semibold ${tagColors[n.accent]}`}>{tag}</span>
                      ))}
                    </div>
                    <div className="flex items-center gap-6 mt-auto">
                      <span className="inline-flex items-center gap-3 text-rose-400 font-bold text-lg group-hover:text-rose-300 transition-colors">
                        Read Online <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                      </span>
                      <span className="inline-flex items-center gap-2 text-white/40 font-medium hover:text-white transition-colors">
                        <Download className="w-4 h-4" /> PDF
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            );
          })()}

          {/* ── Archive Grid ── */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Past Editions</h2>
            <p className="text-white/40 font-medium">Browse all previous issues of the SSN ACM-W newsletter.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {archive.map((n) => {
              const Icon = n.icon;
              return (
                <a
                  key={n.slug}
                  href={n.pdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-[2rem] bg-white/[0.02] border border-white/10 backdrop-blur-xl transition-all duration-500 hover:bg-white/[0.05] hover:border-white/[0.15] flex flex-col"
                >
                  {/* Top accent bar */}
                  <div className={`h-1 w-full bg-gradient-to-r ${n.gradient.replace("/50", "")}`} />

                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`p-3 rounded-2xl bg-gradient-to-br ${n.gradient} border border-white/10`}>
                        <Icon className={`w-6 h-6 ${accentColors[n.accent].split(" ").find(c => c.startsWith("text-"))}`} />
                      </div>
                      <span className="text-xs font-bold text-white/30 tracking-widest uppercase pt-1">{n.edition}</span>
                    </div>

                    <div className="inline-flex max-w-max items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-4">
                      <span className="text-xs font-semibold text-white/60 tracking-widest uppercase">{n.month}</span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-black text-white mb-3 leading-tight">{n.title}</h3>
                    <p className="text-sm text-white/40 font-medium leading-relaxed mb-6 flex-1">{n.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {n.tags.map((tag) => (
                        <span key={tag} className={`px-3 py-1 rounded-full border text-xs font-semibold ${tagColors[n.accent]}`}>{tag}</span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/[0.06]">
                      <span className={`inline-flex items-center gap-2 font-bold text-sm transition-colors ${accentColors[n.accent].split(" ").find(c => c.startsWith("text-"))}`}>
                        Read Edition <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </span>
                      <span className="inline-flex items-center gap-2 text-white/30 text-xs font-medium">
                        <Download className="w-3.5 h-3.5" /> PDF
                      </span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
