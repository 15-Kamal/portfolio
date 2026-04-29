"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { personalInfo } from "@/lib/data";

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};
const fadeRight = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" as const, delay: 0.2 } },
};
const stagger = {
  show: { transition: { staggerChildren: 0.12 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-24 pb-16">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center"
      >
        {/* Left: text */}
        <motion.div variants={fadeLeft}>
          <motion.p variants={fadeUp} className="font-mono text-accent text-sm mb-2">
            Hi there, I'm
          </motion.p>

          <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-3">
            {personalInfo.name}
          </motion.h1>

          <motion.h2 variants={fadeUp} className="text-2xl text-gray-400 font-light mb-6">
            {personalInfo.role}
          </motion.h2>

          <motion.p variants={fadeUp} className="text-gray-300 leading-relaxed mb-8 max-w-md">
            {personalInfo.bio}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <a href="#projects" className="px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-indigo-500 transition-all duration-200 hover:-translate-y-0.5">
              View Projects
            </a>
            <a href="#contact" className="px-6 py-3 border border-white/20 text-gray-300 rounded-lg hover:border-accent hover:text-white transition-all duration-200">
              Contact Me
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="flex gap-5 mt-8">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white text-sm transition-colors">
              GitHub ↗
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white text-sm transition-colors">
              LinkedIn ↗
            </a>
          </motion.div>
        </motion.div>

        {/* Right: profile image */}
        <motion.div variants={fadeRight} className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-accent/20 blur-3xl scale-110" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden ring-2 ring-accent ring-offset-4 ring-offset-black">
              <Image
                src={personalInfo.profileImage}
                alt={`Profile photo of ${personalInfo.name}`}
                fill
                className="object-cover"
                priority
              />
            </div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" as const }}
              className="absolute -bottom-2 -right-2 bg-black border border-white/10 text-white text-xs px-3 py-2 rounded-full shadow-xl"
            >
              💻 Open to work
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}