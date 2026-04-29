"use client";
import { motion } from "framer-motion";
import { experience } from "@/lib/data";

const scrollReveal = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};
const slideLeft = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};
const stagger = {
  show: { transition: { staggerChildren: 0.18 } },
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-3xl mx-auto">

        <motion.div
          variants={scrollReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-14"
        >
          <h1 className="text-4xl font-bold text-white">Experience</h1>
          <div className="w-12 h-0.5 bg-accent mt-4" />
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="relative"
        >
          <div className="absolute left-0 top-2 bottom-2 w-px bg-white/10" />

          <div className="space-y-12 pl-8">
            {experience.map((job) => (
              <motion.div key={`${job.company}-${job.role}`} variants={slideLeft} className="relative">

                <div className="absolute -left-[2.15rem] top-1.5 w-3 h-3 rounded-full bg-accent ring-4 ring-black" />

                <span className="text-xs font-mono text-accent bg-accent/10 px-2.5 py-1 rounded-md inline-block mb-3">
                  {job.period}
                </span>

                <h3 className="text-white font-semibold text-lg">{job.role}</h3>
                <p className="text-accent text-sm mb-4">{job.company}</p>

                <ul className="space-y-2">
                  {job.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                      <span className="text-accent mt-0.5 shrink-0">▸</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}