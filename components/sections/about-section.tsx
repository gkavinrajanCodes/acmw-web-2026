"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Globe, Calendar, Award } from "lucide-react";

const stats = [
  { icon: Calendar, value: "50+", label: "Years of ACM-W" },
  { icon: Users, value: "150K+", label: "Global Members" },
  { icon: Globe, value: "500+", label: "Chapters Worldwide" },
  { icon: Award, value: "80+", label: "Countries" },
];

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-32 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full bg-gradient-to-r from-purple-600/5 to-blue-600/5 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-sm font-medium tracking-widest uppercase text-purple-400 mb-4">
              About ACM-W
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Empowering Women in{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Computing
              </span>
            </h2>
            <div className="space-y-4 text-white/60 leading-relaxed">
              <p>
                ACM-W supports, celebrates, and advocates for women in computing.
                We provide a platform for networking, mentorship, and
                professional development opportunities.
              </p>
              <p>
                Our mission is to create an environment where women in computing
                can thrive, share their achievements, and inspire the next
                generation of technologists.
              </p>
              <p>
                Through workshops, hackathons, conferences, and community
                building, we&apos;re shaping a more inclusive future in technology.
              </p>
            </div>

            {/* CTA */}
            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <a
                href="/events"
                className="group relative px-6 py-3 rounded-full overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative text-sm font-medium text-white">
                  Explore Events
                </span>
              </a>
              <a
                href="/team"
                className="px-6 py-3 rounded-full border border-white/20 text-sm font-medium text-white hover:bg-white/5 transition-colors"
              >
                Meet the Team
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Stats grid */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="group relative p-6 rounded-2xl overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                {/* Card background */}
                <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-xl border border-white/[0.08]" />

                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative">
                  <stat.icon className="w-8 h-8 text-purple-400 mb-4" />
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/50">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* SSN Section */}
        <motion.div
          className="mt-32 relative rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10" />
          <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-xl border border-white/[0.08]" />

          <div className="relative p-8 md:p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block text-sm font-medium tracking-widest uppercase text-blue-400 mb-4">
                  Our Chapter
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  SSN College of Engineering
                </h3>
                <p className="text-white/60 leading-relaxed mb-6">
                  The ACM-W chapter at SSN College of Engineering is one of the
                  most active student chapters in India. We organize workshops,
                  hackathons, speaker sessions, and networking events to foster a
                  community of women technologists.
                </p>
                <p className="text-white/60 leading-relaxed">
                  Located in Chennai, SSN has been a hub of technical excellence
                  since 1996, consistently ranked among the top engineering
                  colleges in Tamil Nadu.
                </p>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "200+", label: "Active Members" },
                  { value: "10+", label: "Events/Year" },
                  { value: "5+", label: "Schools visited every year" },
                  { value: "8", label: "Years Active" },
                ].map((item, index) => (
                  <div
                    key={item.label}
                    className="p-6 rounded-xl bg-white/[0.03] border border-white/[0.06]"
                  >
                    <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-1">
                      {item.value}
                    </div>
                    <div className="text-sm text-white/50">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
