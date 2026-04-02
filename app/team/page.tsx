"use client";

import { useRef } from "react";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { Linkedin, Twitter, Github, Mail, Star } from "lucide-react";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";

const team = [
  {
    name: "Dr. P. Mirunalini",
    role: "Faculty Coordinator",
    department: "Computer Science",
    bio: "Associate Professor and faculty coordinator. Guiding the chapter with years of academic excellence and research.",
    gradient: "from-violet-600 to-fuchsia-600",
    image: "/PMirunalini.jpeg",
    social: { linkedin: "https://www.linkedin.com/in/palaniappan-mirunalini-41a59145/", email: "mirunalini@ssn.edu.in" },
  },
  {
    name: "Ankitha Reddy",
    role: "Chairperson",
    department: "CSE, Final Year",
    bio: "Passionate about building inclusive tech communities and leading our technical initiatives.",
    gradient: "from-fuchsia-600 to-pink-600",
    image: "/Ankitha -2024.jpeg",
    social: { linkedin: "https://www.linkedin.com/in/ankitha-reddy-1b3204289/" },
  },
  {
    name: "Akshayalakshmi S",
    role: "Vice-Chairperson",
    department: "IT, Third Year",
    bio: "Assisting in chapter administration and ensuring smooth execution of all key ACM-W initiatives.",
    gradient: "from-rose-600 to-red-600",
    image: "/Akshayalakshmi S -2024.jpg",
    social: { linkedin: "https://www.linkedin.com/in/akshayalakshmi-s-43396a2b7/" },
  },
  {
    name: "Oviasree Sampath",
    role: "Secretary",
    department: "CSE, Final Year",
    bio: "Overseeing communications, documentation, and the core operational logistics of the student chapter.",
    gradient: "from-amber-600 to-orange-600",
    image: "/Oviasree Sampath -2024.jpg",
    social: { linkedin: "https://www.linkedin.com/in/oviasree-sampath-52018a266/" },
  },
  {
    name: "Ananya Raman",
    role: "Joint Secretary",
    department: "CSE, Third Year",
    bio: "Supporting the Secretariat and helping coordinate large-scale technical events to bridge the gender gap in tech.",
    gradient: "from-emerald-600 to-teal-600",
    image: "/Ananya -2024.jpeg",
    social: { linkedin: "https://www.linkedin.com/in/ananyasraman/" },
  },
  {
    name: "Ann Maria Thomas",
    role: "Treasurer",
    department: "CSE, Final Year",
    bio: "Managing the finances and driving the strategic growth and funding of the chapter.",
    gradient: "from-cyan-600 to-blue-600",
    image: "/AnnMariaThomas -2024.jpeg",
    social: { linkedin: "https://www.linkedin.com/in/ann-thomas-92953227b/" },
  },
  {
    name: "G Kavin Rajan",
    role: "Webmaster",
    department: "CSE, Final Year",
    bio: "Architecting, developing, and maintaining the cutting-edge digital platforms and online presence for ACM-W SSN.",
    gradient: "from-indigo-600 to-violet-600",
    image: "/GKavinRajan-2024.jpeg",
    imagePosition: "top", // Shifts image down to prevent head cropping
    social: { linkedin: "https://www.linkedin.com/in/g-kavin-rajan" },
  },
  {
    name: "Rethanya P",
    role: "CSpathshala Coordinator",
    department: "CSE, Third Year",
    bio: "Pioneering outreach programs and organizing CSpathshala initiatives to bring computer science education to schools.",
    gradient: "from-yellow-500 to-orange-500",
    image: "/RethanyaP-2024.jpeg",
    social: { linkedin: "https://www.linkedin.com/in/rethanya2218/" },
  },
];

const committees = [
  {
    domain: "Editorial",
    gradient: "from-emerald-600 to-teal-600",
    lead: { name: "Nilaa A J", dept: "IT", year: "III" },
    members: [
      { name: "Adithya Sivakumar", dept: "CSE", year: "II" },
      { name: "Rohan Amudhala", dept: "CSE", year: "II" },
      { name: "K S VIJAYARAAGHAVAN", dept: "MTECH INT CSE", year: "II" },
      { name: "Kavin Kishore I", dept: "IT", year: "II" },
    ],
  },
  {
    domain: "Social Media",
    gradient: "from-fuchsia-600 to-purple-600",
    lead: { name: "Gopika Ganesan", dept: "MTECH INT CSE", year: "III" },
    members: [
      { name: "Sanjana. Y", dept: "CSE", year: "III" },
      { name: "Darshana N", dept: "CHEM", year: "II" },
      { name: "Bellana Sowkya", dept: "IT", year: "III" },
    ],
  },
  {
    domain: "Technical",
    gradient: "from-cyan-600 to-blue-600",
    lead: { name: "Nivetha Dhanakoti", dept: "CSE", year: "IV" },
    members: [
      { name: "Saipranav M", dept: "CSE", year: "III" },
      { name: "Murari Sreekumar", dept: "CSE", year: "III" },
      { name: "S. Mokitha", dept: "CSE", year: "III" },
      { name: "Shalon Jovan", dept: "CSE", year: "II" },
      { name: "Anora Sharon Tessie", dept: "ECE", year: "III" },
    ],
  },
  {
    domain: "Visual Media",
    gradient: "from-blue-600 to-indigo-600",
    lead: { name: "Tarun Suresh", dept: "MTECH INT CSE", year: "III" },
    members: [
      { name: "Vishwajith L K", dept: "MTECH INT CSE", year: "III" },
      { name: "Srivathsan G", dept: "IT", year: "II" },
      { name: "Samyuktha V", dept: "MTECH INT CSE", year: "II" },
    ],
  },
  {
    domain: "Design",
    gradient: "from-pink-600 to-rose-600",
    lead: { name: "Sana Fathima F", dept: "IT", year: "III" },
    members: [
      { name: "Tushyent N P", dept: "CSE", year: "II" },
      { name: "Jaswanth Sridharan", dept: "CSE", year: "III" },
      { name: "Yaazhini Azhagarasan", dept: "IT", year: "III" },
    ],
  },
  {
    domain: "CSpathshala Coordinators",
    gradient: "from-amber-600 to-orange-600",
    lead: { name: "Rethanya P", dept: "CSE", year: "III" },
    members: [
      { name: "Dakshata Senthil", dept: "CSE", year: "III" },
      { name: "Sivasriraman P", dept: "MTECH INT CSE", year: "III" },
      { name: "V. Yadushree", dept: "CSE", year: "III" },
    ],
  },
];

// Extracted into its own component so hooks are called at the top level (React rules of hooks)
function TeamCard({
  member,
  index,
  totalCards,
  scrollYProgress,
}: {
  member: any;
  index: number;
  totalCards: number;
  scrollYProgress: any;
}) {
  const isFirst = index === 0;
  const start = isFirst ? 0 : (index - 1) * (1 / (totalCards - 1));
  const end = isFirst ? 0 : index * (1 / (totalCards - 1));

  const x = useTransform(
    scrollYProgress,
    [start, end],
    isFirst ? ["-50%", "-50%"] : ["100vw", "-50%"]
  );
  const scale = useTransform(scrollYProgress, [end, 1], [1, 1 - (totalCards - index - 1) * 0.05]);
  const yOffsetEnd = -50 - (totalCards - index - 1) * 2;
  const y = useTransform(scrollYProgress, [end, 1], ["-50%", `${yOffsetEnd}%`]);
  const opacity = useTransform(scrollYProgress, [end, 1], [1, 1 - (totalCards - index - 1) * 0.08]);

  return (
    <motion.div
      className={`absolute overflow-hidden rounded-[2.5rem] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-2xl ${
        member.isTitle
          ? "w-[95vw] h-[85vh] max-w-7xl bg-[#050505] flex items-center justify-center p-8"
          : "w-[92vw] md:w-[85vw] lg:w-[65vw] max-w-5xl bg-[#0f0f0f] p-8 md:p-16"
      }`}
      style={{
        left: "50%",
        top: "50%",
        x,
        y,
        scale,
        opacity,
        zIndex: index,
        transformOrigin: "top center",
        willChange: "transform, opacity",
        translateZ: 0, // Force GPU compositing layer
      }}
    >
      {member.isTitle ? (
        <>
          <div className="absolute inset-0 pointer-events-none rounded-[2.5rem] overflow-hidden">
            <div className="absolute inset-0 bg-[url('/placeholder.jpeg')] bg-cover bg-center opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-950/70 via-[#0a0a0a]/90 to-blue-950/70" />
          </div>
          <div className="relative z-20 text-center">
            <h1 className="mb-6 text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white">
              Our{" "}
              <span className="bg-gradient-to-r from-fuchsia-400 via-pink-400 to-rose-400 bg-clip-text text-transparent drop-shadow-lg">
                Team
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl md:text-2xl text-white/70 font-medium">
              Meet the passionate individuals driving SSN ACM-W forward.
            </p>
          </div>
        </>
      ) : (
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-14">
          <div className="flex-shrink-0">
            <div className={`relative flex h-36 w-36 md:h-48 md:w-48 items-center justify-center rounded-[2.5rem] bg-gradient-to-br ${member.gradient} shadow-2xl p-1 md:p-1.5`}>
              {member.image ? (
                <div className="relative w-full h-full rounded-[2.2rem] md:rounded-[2.1rem] overflow-hidden bg-[#050505]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    priority={index < 3}
                    className="object-cover"
                    style={{ objectPosition: member.imagePosition || "center" }}
                  />
                </div>
              ) : (
                <span className="relative z-10 text-5xl md:text-6xl font-black text-white">
                  {member.name.split(" ").filter(Boolean).slice(0, 2).map((n: string) => n[0]).join("")}
                </span>
              )}
              <div className={`absolute -inset-1 rounded-[2.5rem] bg-gradient-to-br ${member.gradient} opacity-30 blur-2xl -z-10`} />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h3 className="mb-3 text-4xl md:text-5xl font-black text-white tracking-tight">{member.name}</h3>
            <p className={`mb-4 text-xl md:text-2xl font-bold tracking-wide bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>{member.role}</p>
            <p className="mb-8 text-base md:text-lg font-semibold tracking-widest uppercase text-white/40">{member.department}</p>
            <div className="mb-12 text-lg md:text-xl text-white/60 leading-relaxed max-w-xl mx-auto md:mx-0">
              <p>{member.bio}</p>
            </div>
            <div className="flex justify-center md:justify-start gap-4">
              {member.social?.linkedin && (
                <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-white/5 p-3.5 text-white/40 transition-all hover:bg-white/10 hover:text-white hover:scale-105 active:scale-95">
                  <Linkedin className="h-5 w-5" />
                </a>
              )}
              {member.social?.email && (
                <a href={`mailto:${member.social.email}`} className="rounded-2xl bg-white/5 p-3.5 text-white/40 transition-all hover:bg-white/10 hover:text-white hover:scale-105 active:scale-95">
                  <Mail className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default function TeamPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      {/* Team Sticky Stacked Cards with Integrated Title Card */}
      <section ref={containerRef} className="relative h-[800vh] bg-[#0a0a0a]">
        <div className="sticky top-20 md:top-24 h-[calc(100vh-5rem)] md:h-[calc(100vh-6rem)] w-full overflow-hidden flex items-center justify-center">
          {(() => {
            const cards: any[] = [{ isTitle: true, name: "TitleCard" }, ...team];
            return cards.map((member, index) => (
              <TeamCard
                key={member.name}
                member={member}
                index={index}
                totalCards={cards.length}
                scrollYProgress={scrollYProgress}
              />
            ));
          })()}
        </div>
      </section>

      {/* Extended Committee Members Roster */}
      <section className="relative py-32 bg-[#0a0a0a]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6">
              Domain <span className="bg-gradient-to-r from-fuchsia-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">Committees</span>
            </h2>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto font-medium">
              The incredible minds working behind the scenes to execute our vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {committees.map((domain) => (
              <div
                key={domain.domain}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 transition-all duration-500 hover:border-white/20 hover:bg-white/10 hover:shadow-2xl hover:-translate-y-2"
              >
                {/* Background glow using the domain's gradient */}
                <div className={`absolute -top-32 -right-32 w-64 h-64 rounded-full bg-gradient-to-br ${domain.gradient} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500`} />

                <h3 className={`text-2xl md:text-3xl font-black mb-8 bg-gradient-to-r ${domain.gradient} bg-clip-text text-transparent inline-block tracking-tight`}>
                  {domain.domain}
                </h3>

                <ul className="space-y-4">
                  {domain.lead && (
                    <li className="flex flex-col mb-8 pb-6 border-b border-white/10">
                      <div className="flex items-center gap-2 mb-1">
                        <Star className="h-5 w-5 text-amber-400 fill-amber-400 drop-shadow-md" />
                        <span className="text-lg font-bold text-white tracking-wide">{domain.lead.name}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm font-semibold tracking-widest text-white/40 uppercase pl-7">
                        <span>Lead</span>
                        <span>{domain.lead.dept}, {domain.lead.year}</span>
                      </div>
                    </li>
                  )}
                  {domain.members.map((member) => (
                    <li key={member.name} className="flex justify-between items-end group/member border-b border-white/5 pb-3 last:border-0 last:pb-0">
                      <span className="text-white/80 font-medium transition-colors group-hover/member:text-white drop-shadow-sm">{member.name}</span>
                      <span className="text-xs font-semibold uppercase text-white/30 tracking-wider">
                        {member.dept}, Yr {member.year}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="relative py-16">
        <div className="container mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-950/50 via-fuchsia-950/50 to-pink-950/50 p-12 text-center backdrop-blur-sm">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Want to Join Our Team?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-white/60">
              We&apos;re always looking for passionate individuals to help us grow our community.
            </p>
            <a
              href="mailto:acm-w@ssn.edu.in"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 py-4 font-semibold text-white transition-all hover:shadow-lg hover:shadow-violet-500/25"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
