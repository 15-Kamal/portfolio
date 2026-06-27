"use client";
import { motion } from "framer-motion";
import { personalInfo, education } from "@/lib/data";

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

        {/* Heading */}
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

          {/* ── LEFT: bio ─────────────────────────────────────── */}
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
              I&apos;m open to collaborating, learning from experienced professionals, and contributing to impactful AI/ML projects.
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

          {/* ── RIGHT: stat cards + education ─────────────────── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-6"
          >
            {/* Education — sits below stat cards on the right */}
            <motion.div variants={scrollReveal} className="pt-2">
              <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4">Education</p>
              <div className="space-y-4">
                {education.map((edu) => (
                  <motion.div
                    key={edu.degree}
                    variants={scrollReveal}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="border-l-2 border-accent/30 hover:border-accent pl-4 transition-colors duration-300"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-white text-sm font-semibold leading-snug">{edu.degree}</h4>
                      <span className="text-xs font-mono text-accent shrink-0 ml-3">{edu.period}</span>
                    </div>
                    <p className="text-accent text-xs mb-1">{edu.institution}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stat cards */}
            <div className="grid grid-cols-2 gap-4">
              <StatCard value="3+"  label="Years of experience in coding" />
              <StatCard value="4+"  label="Projects" />
            </div>
          </motion.div>
          {/* ── END RIGHT ─────────────────────────────────────── */}
        </div>
      </div>
    </section>
  );
}