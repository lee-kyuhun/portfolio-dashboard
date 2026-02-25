"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4 }}
      className="mb-10 flex items-center gap-4"
    >
      <span className="font-mono text-accent text-sm">{number}.</span>
      <h2 className="text-section font-bold text-slate-lightest whitespace-nowrap">
        {title}
      </h2>
      <div className="h-px flex-1 bg-navy-lighter" />
    </motion.div>
  );
}
