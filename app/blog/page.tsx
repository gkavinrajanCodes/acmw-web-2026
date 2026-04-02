import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";
import { ArrowRight, BookOpen, Download } from "lucide-react";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      <section className="relative pt-40 pb-24 overflow-hidden min-h-screen">
        {/* Background ambient light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-rose-500/20 blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6">
              Our <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">Newsletters</span>
            </h1>
            <p className="text-xl text-white/60 font-medium max-w-2xl mx-auto">
              Dive into the latest editions of the ACM-W SSN newsletter, highlighting our achievements, technical blogs, and community milestones.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Massive Featured Newsletter Card */}
            <a 
              href="/SSN ACM-W Newsletter March 2026 (1).pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-xl transition-all duration-500 hover:border-rose-500/50 hover:shadow-[0_0_80px_rgba(244,63,94,0.2)]"
            >
              <div className="flex flex-col md:flex-row items-stretch">
                {/* Visual Block */}
                <div className="w-full md:w-2/5 bg-gradient-to-br from-rose-950/50 to-orange-950/50 p-12 flex flex-col items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/placeholder.jpeg')] opacity-10 bg-cover bg-center mix-blend-overlay transition-transform duration-700 group-hover:scale-110" />
                  <BookOpen className="w-24 h-24 text-rose-400 mb-6 relative z-10" />
                  <div className="text-center relative z-10">
                    <p className="text-rose-400 font-bold uppercase tracking-widest text-sm mb-2">Latest Release</p>
                    <p className="text-white font-black text-3xl">Vol 1.0</p>
                  </div>
                </div>

                {/* Content Block */}
                <div className="flex-1 p-10 md:p-14 flex flex-col justify-center">
                  <div className="inline-flex max-w-max items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6">
                    <span className="text-xs font-semibold text-white/70 tracking-widest uppercase">March 2026</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                    March 2026 <br/> Edition
                  </h2>
                  <p className="text-lg text-white/50 font-medium mb-10 leading-relaxed">
                    This edition highlights premier global academic and internship opportunities, featuring highly sought-after details independently compiled by our team on the A*STAR Singapore SIPGA award, the IIT Bhubaneswar Summer Research program, and the French Charpak Master's Scholarship.
                  </p>

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
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
