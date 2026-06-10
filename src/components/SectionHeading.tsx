import { motion } from 'motion/react';

interface SectionHeadingProps {
  number: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ number, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-16">
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="font-mono text-[10px] tracking-widest text-brand-emerald mb-4 flex items-center gap-4"
      >
        <span className="opacity-40">{number}</span>
        <div className="h-[1px] w-8 bg-brand-emerald opacity-20" />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-brand-beige font-medium tracking-wide"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
