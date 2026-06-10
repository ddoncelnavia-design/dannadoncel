import { Mail, Linkedin, ArrowUpRight, Globe, Users } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 bg-brand-black text-white overflow-hidden min-h-[80vh] flex items-center">
      {/* Video Background Overlay */}
      <div className="absolute inset-0 z-0 opacity-40">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
        >
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-business-people-working-around-a-table-41716-large.mp4" 
            type="video/mp4" 
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-black/80 to-brand-black" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-[1px] bg-brand-emerald" />
                <span className="font-mono text-[10px] tracking-[0.5em] text-brand-emerald uppercase font-black italic">Partnership Inquiry</span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.85]"
              >
                Let's evolve <br />
                <span className="text-brand-emerald">together.</span>
              </motion.h2>
            </div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-brand-beige/80 max-w-xl leading-relaxed font-medium"
            >
              I am interested in collaborating with visionary brands and corporate partners to scale digital excellence. Whether it's a strategic consultancy or a long-term partnership, I invite you to participate in building the future of your digital footprint.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              <div className="flex items-start gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl group hover:border-brand-emerald/50 transition-colors">
                <Globe className="text-brand-emerald mt-1 shrink-0" size={24} />
                <div>
                  <h4 className="font-black uppercase text-xs tracking-widest mb-1 group-hover:text-brand-emerald transition-colors">Strategic Planning</h4>
                  <p className="text-[10px] text-brand-beige/40 leading-tight">Detailed roadmaps for long-term brand growth and digital visibility.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl group hover:border-brand-emerald/50 transition-colors">
                <Users className="text-brand-emerald mt-1 shrink-0" size={24} />
                <div>
                  <h4 className="font-black uppercase text-xs tracking-widest mb-1 group-hover:text-brand-emerald transition-colors">Performance Marketing</h4>
                  <p className="text-[10px] text-brand-beige/40 leading-tight">A results-driven approach focused on KPIs and measurable scaling.</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col items-center lg:items-end gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full max-w-md bg-white text-brand-black p-12 rounded-[40px] shadow-2xl space-y-8"
            >
              <div className="space-y-4 text-center">
                <h3 className="text-3xl font-black uppercase tracking-tighter leading-none">Schedule a Consultation</h3>
                <p className="text-xs font-semibold text-brand-black/40 uppercase tracking-widest">Formal inquiry channel</p>
              </div>

              <div className="space-y-4">
                <motion.a 
                  href="mailto:ddoncelnavia@gmail.com"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-5 bg-brand-emerald text-white font-black text-[11px] md:text-[12px] tracking-[0.2em] md:tracking-[0.4em] uppercase rounded-full flex items-center justify-center gap-3 shadow-xl shadow-brand-emerald/30 group transition-all"
                >
                  Send a Message
                  <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </motion.a>
                
                <div className="grid grid-cols-2 gap-4">
                  <a 
                    href="https://www.linkedin.com/in/danna-doncel-95007719a/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-6 border border-brand-black/10 rounded-3xl hover:bg-brand-black hover:text-white transition-all group"
                  >
                    <Linkedin size={20} className="mb-2" />
                    <span className="text-[8px] font-black uppercase tracking-[0.3em]">LinkedIn</span>
                  </a>
                  <a 
                    href="mailto:ddoncelnavia@gmail.com"
                    className="flex flex-col items-center justify-center p-6 border border-brand-black/10 rounded-3xl hover:bg-brand-black hover:text-white transition-all group"
                  >
                    <Mail size={20} className="mb-2" />
                    <span className="text-[8px] font-black uppercase tracking-[0.3em]">Direct Mail</span>
                  </a>
                </div>
              </div>
            </motion.div>

            <div className="text-center lg:text-right space-y-2">
              <p className="text-[10px] font-mono font-black text-brand-emerald tracking-[0.6em] uppercase transition-all">Based in Cali, Colombia</p>
              <p className="text-[8px] font-mono text-white/30 tracking-[0.4em] uppercase">Scale • Analysis • Performance • Success</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
