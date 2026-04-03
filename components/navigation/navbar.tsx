"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, ArrowRight } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/cspathshala", label: "CSPathshala" },
  { href: "/team", label: "Team" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? "bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/[0.08]"
            : "bg-transparent"
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center transition-transform hover:scale-105">
              <Image
                src="/acm-w logo.png"
                alt="ACM-W SSN Logo"
                width={240}
                height={70}
                className="h-14 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={() => setIsJoinModalOpen(true)}
                className="px-5 py-2 rounded-full bg-white/10 text-sm font-medium text-white hover:bg-white/20 transition-colors"
              >
                Join Us
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              className="absolute top-16 left-4 right-4 bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="p-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsJoinModalOpen(true);
                  }}
                  className="w-full text-center block px-4 py-3 mt-2 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium"
                >
                  Join Us
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Premium Intercept Modal for ACM Global */}
      <AnimatePresence>
        {isJoinModalOpen && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsJoinModalOpen(false)}
            />
            <motion.div
              className="relative w-full max-w-md bg-[#0a0a0a] border border-white/10 rounded-[2rem] overflow-hidden p-8 text-center shadow-[0_0_80px_rgba(0,0,0,0.8)]"
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
            >
              <div className="mx-auto w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/20 shadow-[inset_0_0_20px_rgba(59,130,246,0.2)]">
                <Globe className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Join ACM Global</h3>
              <p className="text-white/50 mb-8 leading-relaxed font-medium">
                To officially join the SSN chapter, you require an active global ACM Membership. Clicking proceed will securely route you to the official ACM portal.
              </p>

              <div className="flex flex-col gap-3">
                <a
                  href="https://www.acm.org/membership"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsJoinModalOpen(false)}
                  className="w-full py-4 px-6 rounded-xl bg-white text-black font-bold flex items-center justify-center gap-2 transition-transform hover:scale-[1.02]"
                >
                  Proceed to ACM.org <ArrowRight className="w-5 h-5" />
                </a>
                <button
                  onClick={() => setIsJoinModalOpen(false)}
                  className="w-full py-4 px-6 rounded-xl bg-white/5 border border-white/10 text-white/70 font-medium hover:bg-white/10 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
