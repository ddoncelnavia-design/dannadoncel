import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="pt-24 md:pt-32 pb-16 px-6 max-w-7xl mx-auto flex flex-col justify-center">
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-mono text-[10px] tracking-[0.5em] uppercase text-brand-emerald mb-8"
          >
            Digital Marketing Specialist | Content & SEO Strategist
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-[140px] font-black leading-[0.85] tracking-tighter uppercase mb-12"
          >
            Danna<br />
            Doncel
          </motion.h1>
        </div>
        
        <div className="lg:col-span-5">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="space-y-6"
          >
            <p className="text-xl text-brand-black font-medium leading-relaxed tracking-tight">
              Digital Marketing Specialist with over 6 years of experience leading content strategies, SEO, and Paid Media for global brands.
            </p>
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-brand-emerald" />
              <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-brand-beige">Based in Colombia</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
