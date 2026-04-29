"use client";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";

const scrollReveal = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};
const stagger = {
  show: { transition: { staggerChildren: 0.1 } },
};

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <motion.div variants={scrollReveal} className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
      <p className="text-3xl font-bold text-accent">{value}</p>
      <p className="text-sm text-gray-400 mt-1">{label}</p>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">

        <motion.div
          variants={scrollReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-14"
        >
          <h1 className="text-4xl font-bold text-white">About Me</h1>
          <div className="w-12 h-0.5 bg-accent mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left: bio */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-5"
          >
            <motion.p variants={scrollReveal} className="text-gray-300 leading-relaxed">
              {personalInfo.bio}
            </motion.p>
            <motion.p variants={scrollReveal} className="text-gray-400 leading-relaxed">
              I enjoy breaking down complex problems into simple, logical steps and building solutions that create value.
            </motion.p>
            <motion.p variants={scrollReveal} className="text-gray-400 leading-relaxed">
              I'm open to collaborating, learning from experienced professionals, and contributing to impactful AI/ML projects.
            </motion.p>
            <motion.a
              variants={scrollReveal}
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-accent text-sm hover:underline underline-offset-4 mt-2"
            >
              View my GitHub →
            </motion.a>
          </motion.div>

          {/* Right: stat cards */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-2 gap-4"
          >
            <StatCard value="3+"  label="Years of experience in coding" />
            <StatCard value="4+" label="Projects" />
            <StatCard value="10+" label="Technologies" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}