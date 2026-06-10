import { motion } from 'motion/react';
import { SKILLS, EXPERIENCES, EDUCATION, LANGUAGES, BIO } from '../constants';
import SectionHeading from './SectionHeading';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function About() {
  return (
    <div className="space-y-0">
      {/* Bio / Skills Section */}
      <section id="about-me" className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-12">
            <SectionHeading 
              number="01" 
              title="About & Skills" 
              subtitle="Digital Marketing Specialist | Content & SEO Strategist"
            />
          </div>
          
          <div className="lg:col-span-7">
            <p className="text-3xl font-light leading-snug text-brand-black tracking-tight mb-12">
              {BIO}
            </p>
            
            {/* Languages Subsection Redesign */}
            <div className="mt-20">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-brand-surface p-8 md:p-10 rounded-[32px] border border-brand-black/5 relative overflow-hidden"
              >
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-emerald/5 rounded-full blur-3xl -mr-16 -mt-16" />
                
                <h4 className="font-mono text-[10px] tracking-[0.4em] text-brand-emerald mb-10 uppercase flex items-center gap-3">
                  <span className="w-2 h-2 bg-brand-emerald rounded-full animate-pulse" />
                  Linguistic Technical Specs
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-12">
                  {LANGUAGES.map((lang, index) => (
                    <div key={index} className="flex flex-col gap-3 group">
                      <div className="flex justify-between items-end">
                        <span className="text-3xl font-black tracking-tighter uppercase leading-none group-hover:text-brand-emerald transition-colors duration-500">{lang.name}</span>
                        <span className="font-mono text-[10px] font-bold text-brand-beige uppercase tracking-widest leading-none border-b border-brand-beige/30 pb-1">{lang.level}</span>
                      </div>
                      
                      <div className="flex gap-1.5 h-2 w-full">
                        {[...Array(5)].map((_, i) => (
                          <motion.div 
                            key={i}
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                            className={`flex-grow h-full ${
                              lang.name === 'Spanish' ? 'bg-brand-emerald' : 
                              (i < 4 ? 'bg-brand-emerald' : 'bg-brand-emerald/10')
                            } rounded-full`}
                          />
                        ))}
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-[8px] text-brand-beige uppercase tracking-widest opacity-60">Status: Verified</span>
                        <span className="font-mono text-[8px] text-brand-emerald uppercase tracking-widest font-bold">
                          {lang.name === 'Spanish' ? 'L1-Native' : 'L2-Professional'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            {SKILLS.map((skill, index) => (
              <motion.div key={index} variants={item} className="space-y-3">
                <div className="flex justify-between items-end">
                  <span className="text-xs font-mono font-bold tracking-widest text-brand-beige uppercase">{skill.name}</span>
                  <span className="text-[10px] font-mono font-bold text-brand-emerald">{skill.level}%</span>
                </div>
                <div className="h-1 bg-brand-surface relative overflow-hidden">
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-0 left-0 h-full bg-brand-emerald w-full origin-left"
                    style={{ scaleX: skill.level / 100 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-brand-surface px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            number="02" 
            title="Experience" 
            subtitle="My Professional Journey"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
            {EXPERIENCES.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-10 flex flex-col justify-between border border-transparent hover:border-brand-emerald/20 transition-all duration-500"
              >
                <div>
                  <span className="font-mono text-[10px] text-brand-emerald tracking-widest uppercase block mb-6">
                    {exp.period}
                  </span>
                  <h3 className="text-2xl font-black tracking-tighter uppercase mb-2">{exp.company}</h3>
                  <p className="text-brand-beige font-semibold text-xs tracking-[0.2em] uppercase mb-8">{exp.role}</p>
                  <p className="text-brand-black/70 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            number="03" 
            title="Education" 
            subtitle="Academic Background & Certifications"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {EDUCATION.map((edu, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group p-8 border border-brand-surface hover:border-brand-emerald/30 transition-all duration-500 bg-white/50 backdrop-blur-sm rounded-2xl flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="font-mono text-[9px] text-brand-emerald tracking-[0.3em] uppercase block">
                      {edu.period}
                    </span>
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-emerald/20 group-hover:bg-brand-emerald transition-colors" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-black tracking-tighter uppercase leading-tight group-hover:text-brand-emerald transition-colors duration-300">
                      {edu.degree}
                    </h3>
                    <p className="text-brand-beige font-semibold text-[9px] tracking-[0.2em] uppercase">
                      {edu.institution}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
