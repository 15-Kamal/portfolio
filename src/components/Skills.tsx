"use client";
import { motion } from "framer-motion";
import { skillCategories } from "@/lib/data";

const scrollReveal = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};
const stagger = {
  show: { transition: { staggerChildren: 0.08 } },
};

function SkillPill({ name }: { name: string }) {
  return (
    <motion.span
      variants={scrollReveal}
      whileHover={{ scale: 1.06, y: -2 }}
      className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 hover:border-accent hover:text-white transition-colors duration-200 cursor-default"
    >
      {name}
    </motion.span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-5xl mx-auto">

        <motion.div
          variants={scrollReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-14"
        >
          <h2 className="text-4xl font-bold text-white">Skills & Technologies</h2>
          <div className="w-12 h-0.5 bg-accent mt-4" />
        </motion.div>

        <div className="space-y-10">
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.category}
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
            >
              <motion.p variants={scrollReveal} className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4">
                {cat.category}
              </motion.p>
              <div className="flex flex-wrap gap-3">
                {cat.items.map((skill) => (
                  <SkillPill key={skill} name={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}