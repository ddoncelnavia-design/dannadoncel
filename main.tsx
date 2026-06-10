import { useState, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Play, Zap, Cpu, Sparkles, Bot, Workflow, Terminal, MessageSquare } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Category } from '../types';
import SectionHeading from './SectionHeading';

interface ProjectGridProps {
  activeCategory: Category;
}

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
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

export default function ProjectGrid({ activeCategory }: ProjectGridProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [activeGalleryProjects, setActiveGalleryProjects] = useState<typeof PROJECTS>([]);
  const displayedProjects = PROJECTS.filter(p => p.category === activeCategory);

  const openLightbox = (projects: typeof PROJECTS, index: number) => {
    setActiveGalleryProjects(projects);
    setSelectedIndex(index);
  };
  
  const closeLightbox = () => {
    setSelectedIndex(null);
    setActiveGalleryProjects([]);
  };

  const nextProject = (e: MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % activeGalleryProjects.length);
    }
  };
  const prevProject = (e: MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + activeGalleryProjects.length) % activeGalleryProjects.length);
    }
  };

  const projectsBySubCategory = displayedProjects.reduce((acc, project) => {
    const sub = project.subCategory || 'GENERAL';
    if (!acc[sub]) acc[sub] = [];
    acc[sub].push(project);
    return acc;
  }, {} as Record<string, typeof displayedProjects>);

  const subCategories = activeCategory === 'PHOTOGRAPHY' 
    ? ['EVENTS', 'PRODUCT'] 
    : ['GENERAL'];

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto min-h-screen">
      {activeCategory !== 'AUTOMATION' && activeCategory !== 'DESIGN' && activeCategory !== 'VIDEO' && activeCategory !== 'PAID MEDIA' && activeCategory !== 'SEO' && activeCategory !== 'PHOTOGRAPHY' && (
        <SectionHeading 
          number="03" 
          title={activeCategory} 
          subtitle={`Selected works in ${activeCategory.toLowerCase()} branding and production.`}
        />
      )}

      {activeCategory === 'VIDEO' && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-16"
        >
          <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-8 leading-none">
            Video
          </h3>
          <div className="space-y-6">
            <p className="text-xl md:text-2xl text-brand-black font-medium leading-tight">
              This section showcases my work in video content creation focused on storytelling, engagement, and brand positioning.
            </p>
            <p className="text-brand-black/60 text-base md:text-lg leading-relaxed">
              I create dynamic and purposeful videos designed to capture attention, communicate value, and connect with audiences across digital platforms.
            </p>
          </div>
        </motion.div>
      )}

      {activeCategory === 'AUTOMATION' && (
        <div className="space-y-20 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-8 leading-none">
              Automation & <span className="text-brand-emerald">AI Workflows</span>
            </h3>
            <div className="space-y-8">
              <p className="text-xl md:text-2xl text-brand-black font-medium leading-tight">
                I use automation and AI tools to streamline marketing processes, reduce manual work, and improve efficiency across content creation and campaign execution.
              </p>

              <p className="text-brand-black/70 text-base md:text-lg leading-relaxed">
                I have experience building practical workflows that support day-to-day marketing tasks. For example:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                <div className="p-8 bg-brand-surface rounded-[30px] border border-brand-black/5 space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-emerald/10 flex items-center justify-center text-brand-emerald">
                    <Terminal size={24} />
                  </div>
                  <h4 className="font-black uppercase tracking-tighter text-lg">Process Documentation Bot</h4>
                  <p className="text-sm text-brand-black/60 leading-relaxed">
                    Designed to organize and structure internal information, making it easier to access, update, and scale workflows across teams.
                  </p>
                </div>
                <div className="p-8 bg-brand-surface rounded-[30px] border border-brand-black/5 space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-emerald/10 flex items-center justify-center text-brand-emerald">
                    <Workflow size={24} />
                  </div>
                  <h4 className="font-black uppercase tracking-tighter text-lg">ChatGPT Briefing Workflow</h4>
                  <p className="text-sm text-brand-black/60 leading-relaxed">
                    Developed for briefing processes, helping structure ideas, define objectives, and generate clear inputs for content and campaigns. This allows for faster alignment and more efficient execution.
                  </p>
                </div>
              </div>

              <p className="text-brand-black/70 text-base md:text-lg leading-relaxed max-w-3xl">
                I approach automation by identifying repetitive or time-consuming tasks and designing simple, effective systems that enhance efficiency without adding unnecessary complexity. My focus is always on practical solutions that support real marketing needs.
              </p>

              <p className="text-brand-black/70 text-base md:text-lg leading-relaxed pt-8 border-t border-brand-black/5">
                I have hands-on experience working with tools such as n8n, Google AI Studio, ChatGPT, and Claude, which I use to automate repetitive tasks, generate content, and improve overall productivity.
              </p>
            </div>
          </motion.div>

          <div className="pt-4 flex flex-wrap gap-12 md:gap-20 justify-center md:justify-start transition-all duration-700">
            {[
              { src: 'https://raw.githubusercontent.com/lobehub/lobe-icons/master/packages/static-png/light/n8n-color.png', label: 'n8n' },
              { src: 'https://static.wikia.nocookie.net/logopedia/images/c/c2/Google_AI_Studio.svg/revision/latest/scale-to-width-down/250?cb=20241223140928', label: 'Google AI Studio' },
              { src: 'https://www.icosix.com/uploads/icons/2025/09/chatgpt.png', label: 'ChatGPT' },
              { src: 'https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/light/claude-color.png', label: 'Claude' },
              { icon: Sparkles, label: 'AI Strategy' }
            ].map((tool, i) => (
              <div key={i} className="flex flex-col items-center gap-4 group active:scale-95 transition-transform">
                <div className="p-6 rounded-3xl bg-brand-surface border border-brand-black/5 hover:border-brand-emerald/30 hover:bg-white active:bg-white active:border-brand-emerald/30 transition-all duration-300 w-24 h-24 flex items-center justify-center">
                  {tool.src ? (
                    <img 
                      src={tool.src} 
                      alt={tool.label} 
                      className="w-10 h-10 object-contain" 
                      referrerPolicy="no-referrer"
                    />
                  ) : tool.icon ? (
                    <tool.icon size={40} strokeWidth={1.5} />
                  ) : null}
                </div>
                <span className="font-mono text-[9px] tracking-[0.2em] uppercase font-bold opacity-100 transition-all">{tool.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeCategory === 'PHOTOGRAPHY' || activeCategory === 'DESIGN' ? (
        <div className="space-y-24 mb-32">
          {activeCategory === 'DESIGN' && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-8 leading-none">
                Design
              </h3>
              <div className="space-y-6">
                <p className="text-xl md:text-2xl text-brand-black font-medium leading-tight">
                  This section highlights my work in visual content creation across different industries, always aligned with marketing goals.
                </p>
                <p className="text-brand-black/60 text-base md:text-lg leading-relaxed">
                  I focus on creating clear, engaging, and purposeful designs that support brand identity, improve communication, and drive engagement.
                </p>
              </div>
            </motion.div>
          )}

          {activeCategory === 'PHOTOGRAPHY' && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-8 leading-none">
                Photography
              </h3>
              <div className="space-y-6">
                <p className="text-xl md:text-2xl text-brand-black font-medium leading-tight">
                  I have experience in photography for both events and product-focused content, creating visuals that support brand identity and storytelling.
                </p>
                <p className="text-brand-black/60 text-base md:text-lg leading-relaxed">
                  My work includes capturing live moments with a natural and dynamic approach, as well as developing product photography that highlights details, aesthetics, and visual consistency for digital use.
                </p>
                <p className="text-brand-black/60 text-base md:text-lg leading-relaxed italic border-l-2 border-brand-emerald/30 pl-6">
                  Each image is created with a clear intention: to communicate, connect, and enhance the overall visual presence of a brand.
                </p>
              </div>
            </motion.div>
          )}

          <div className={`grid grid-cols-1 ${activeCategory === 'PHOTOGRAPHY' ? 'md:grid-cols-2' : ''} gap-8`}>
            {(activeCategory === 'PHOTOGRAPHY' ? subCategories : ['DESIGN']).map((sub) => {
              const projects = activeCategory === 'PHOTOGRAPHY' ? projectsBySubCategory[sub] || [] : displayedProjects;
              if (projects.length === 0) return null;

              return (
                <div key={sub} className="flex flex-col">
                  <h4 className="font-mono text-[11px] tracking-[0.5em] text-brand-emerald mb-8 uppercase flex items-center justify-between group">
                    <span className="flex items-center gap-4">
                      <div className="w-8 h-[1px] bg-brand-emerald/30 group-hover:w-12 transition-all" />
                      {activeCategory === 'PHOTOGRAPHY' 
                        ? (sub === 'EVENTS' ? 'Event Photography' : 'Product Photography')
                        : 'Graphic Design Portfolio'}
                    </span>
                    <span className="opacity-30">Collection</span>
                  </h4>
                  
                  <div className="relative group overflow-hidden rounded-[40px] border border-brand-black/5 flex-grow">
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.98 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className={`relative cursor-pointer overflow-hidden ${activeCategory === 'DESIGN' ? 'aspect-[16/6] md:aspect-[21/9]' : 'aspect-[4/5] md:aspect-[4/3]'}`}
                      onClick={() => openLightbox(projects, 0)}
                    >
                      <motion.img 
                        src={projects[0].imageUrl} 
                        alt={activeCategory}
                        referrerPolicy="no-referrer"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full h-full object-cover"
                      />
                      
                      <div className="absolute inset-0 bg-brand-black/40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm">
                        <div className="w-20 h-20 rounded-full border border-white/30 flex items-center justify-center mb-6">
                          <ChevronRight size={40} className="text-white ml-1" />
                        </div>
                        <span className="text-white font-mono text-[10px] tracking-[0.6em] uppercase font-black">
                          Explore {activeCategory === 'DESIGN' ? 'Full Portfolio' : 'Gallery'}
                        </span>
                        <span className="text-white/50 font-mono text-[8px] tracking-[0.4em] uppercase mt-2">
                           {projects.length} High quality pieces
                        </span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>

          {activeCategory === 'DESIGN' && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-brand-black/5"
            >
              <div className="col-span-full mb-4">
                <h4 className="font-mono text-[11px] tracking-[0.5em] text-brand-emerald uppercase font-black italic">Key strengths</h4>
              </div>
              {[
                { title: 'Visual Intent', desc: 'Visual communication with strategic intent' },
                { title: 'Adaptability', desc: 'Adaptability across industries' },
                { title: 'Social First', desc: 'Social media and campaign-focused design' },
                { title: 'Consistency', desc: 'Strong sense of branding and consistency' }
              ].map((strength, i) => (
                <div key={i} className="space-y-3">
                  <h5 className="font-black uppercase tracking-tighter text-lg leading-none">{strength.title}</h5>
                  <p className="text-xs text-brand-black/50 leading-relaxed font-medium">{strength.desc}</p>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      ) : activeCategory === 'PAID MEDIA' ? (
        <div className="max-w-5xl mx-auto space-y-40 mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-8 leading-none">
              Paid Media <span className="text-brand-emerald">Strategy</span>
            </h3>
            <div className="space-y-6">
              <p className="text-xl md:text-2xl text-brand-black font-medium leading-tight">
                I have over 5 years of experience working with paid media, managing and optimizing campaigns across platforms such as Meta, Google, and TikTok.
              </p>
              <p className="text-brand-black/60 text-base md:text-lg leading-relaxed">
                My approach focuses on performance and data-driven decision making, constantly testing creatives, audiences, and strategies to improve results. I have experience supporting campaigns from planning to execution, always aiming to maximize efficiency and align performance with business goals.
              </p>
            </div>
          </motion.div>

          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, idx) => {
              const isStacked = idx < 2; // Testing and Audience
              
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`flex flex-col ${isStacked ? 'gap-12' : (idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse') + ' items-center gap-12 md:gap-20'}`}
                >
                  <div className={`${isStacked ? 'w-full' : 'md:w-1/2'} space-y-6`}>
                    <div className={`space-y-2 ${isStacked ? 'text-center md:text-left' : ''}`}>
                      <span className="font-mono text-[10px] text-brand-emerald tracking-[0.4em] uppercase font-bold">
                        Case Study {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                      </span>
                      <h3 className={`${isStacked ? 'text-4xl md:text-6xl' : 'text-4xl md:text-5xl'} font-black tracking-tighter uppercase leading-[0.9]`}>
                        {project.title}
                      </h3>
                    </div>
                    
                    <p className={`${isStacked ? 'text-lg max-w-2xl text-center md:text-left mx-auto md:mx-0' : 'text-base'} text-brand-black/70 leading-relaxed font-medium`}>
                      {project.description}
                    </p>

                    <div className={`pt-4 flex ${isStacked ? 'justify-center md:justify-start' : ''}`}>
                      <button 
                        onClick={() => openLightbox(displayedProjects, idx)}
                        className="group/ebtn flex items-center gap-4 py-2"
                      >
                        <span className="font-mono text-[10px] tracking-[0.4em] uppercase font-black">View Insight</span>
                        <div className="w-12 h-[1px] bg-brand-black group-hover/ebtn:w-20 group-hover/ebtn:bg-brand-emerald transition-all duration-500" />
                      </button>
                    </div>
                  </div>

                  <div className={`${isStacked ? 'w-full' : 'md:w-1/2'} group cursor-pointer`} onClick={() => openLightbox(displayedProjects, idx)}>
                    <div className={`relative overflow-hidden ${isStacked ? 'bg-brand-surface' : 'rounded-[20px] bg-brand-surface'}`}>
                      <motion.img 
                        src={project.imageUrl} 
                        alt={project.title}
                        referrerPolicy="no-referrer"
                        whileHover={{ scale: isStacked ? 1.02 : 1.05 }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className={`w-full ${isStacked ? 'aspect-[21/9]' : 'aspect-[4/3]'} object-cover`}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      ) : (
        <div className="space-y-0">
          {activeCategory === 'SEO' && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mb-20"
            >
              <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-8 leading-none">
                SEO <span className="text-brand-emerald">Content</span>
              </h3>
              <div className="space-y-6">
                <p className="text-xl md:text-2xl text-brand-black font-medium leading-tight">
                  I have experience creating SEO-focused content tailored to different brands, always considering their goals, target audience, and market positioning.
                </p>
                <div className="space-y-4">
                  <p className="text-brand-black/60 text-base md:text-lg leading-relaxed">
                    My approach is based on understanding search intent, structuring content effectively, and delivering value through clear and engaging writing. I focus on building content that not only ranks, but also connects with the reader.
                  </p>
                  <p className="text-brand-black/60 text-base md:text-lg leading-relaxed italic">
                    Through the buttons below, you can explore a selection of articles I’ve developed for different brands, aligned with their specific objectives and markets.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className={`grid grid-cols-1 ${activeCategory === 'VIDEO' ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2'} gap-6 md:gap-8 lg:gap-10`}
          >
            <AnimatePresence mode="popLayout">
              {displayedProjects.map((project, idx) => (
                <motion.div
                  layout
                  key={project.id}
                  variants={item}
                  className="group cursor-pointer"
                  onClick={() => openLightbox(displayedProjects, idx)}
                >
                  <div className={`overflow-hidden bg-brand-surface mb-6 relative rounded-2xl md:rounded-3xl border border-brand-black/5 shadow-sm group-hover:shadow-xl transition-all duration-700 ${activeCategory === 'VIDEO' ? 'aspect-[9/12]' : 'aspect-square md:aspect-[4/5]'}`}>
                    <motion.img 
                      src={project.imageUrl} 
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full h-full object-cover transition-all duration-1000"
                    />
                    {activeCategory === 'VIDEO' && (
                      <div className="absolute inset-0 bg-brand-black/20 flex items-center justify-center opacity-100 group-hover:bg-brand-black/40 transition-all duration-500">
                        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-emerald transition-all duration-500">
                          <Play size={24} className="text-white ml-1 fill-white" />
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-4 px-2">
                    <div className="space-y-1">
                      <h3 className="text-2xl font-black tracking-tighter uppercase leading-none group-hover:text-brand-emerald transition-colors duration-500">
                        {project.title}
                      </h3>
                      <p className="text-brand-beige font-mono text-[9px] tracking-[0.3em] uppercase font-bold">
                        {project.subtitle || 'Case Study / 2024'}
                      </p>
                    </div>
                    
                    {project.description && (
                      <p className="text-xs text-brand-black/60 leading-relaxed font-medium line-clamp-2">
                        {project.description}
                      </p>
                    )}

                    {(project.externalUrl || project.webUrl) && (
                      <div className="pt-2 flex flex-wrap gap-4">
                        {project.webUrl && (
                          <a 
                            href={project.webUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 group/btn cursor-pointer"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <span className="font-mono text-[9px] tracking-[0.2em] font-black uppercase text-brand-black/40 hover:text-brand-black transition-colors">Visit Web</span>
                            <div className="w-4 h-[1px] bg-brand-black/20 group-hover/btn:w-8 transition-all duration-300" />
                          </a>
                        )}
                        {project.externalUrl && (
                          <a 
                            href={project.externalUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 group/btn cursor-pointer"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <span className="font-mono text-[9px] tracking-[0.2em] font-black uppercase text-brand-emerald">Read Article</span>
                            <div className="w-4 h-[1px] bg-brand-emerald group-hover/btn:w-8 transition-all duration-300" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
      
      {displayedProjects.length === 0 && activeCategory !== 'AUTOMATION' && (
        <div className="py-40 text-center">
          <p className="text-brand-beige italic font-mono text-xs uppercase tracking-widest">No entries found for this category.</p>
        </div>
      )}

      {/* Lightbox / Gallery */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-brand-black flex flex-col items-center justify-center p-4 md:p-12 transition-colors"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[110]"
              onClick={closeLightbox}
            >
              <X size={32} />
            </button>

            {activeGalleryProjects.length > 1 && (
              <>
                <button 
                  className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors z-[110]"
                  onClick={prevProject}
                >
                  <ChevronLeft size={48} />
                </button>
                <button 
                  className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors z-[110]"
                  onClick={nextProject}
                >
                  <ChevronRight size={48} />
                </button>
              </>
            )}

            <motion.div 
              className="max-w-7xl w-full h-full flex flex-col justify-center items-center gap-6"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              key={activeGalleryProjects[selectedIndex].id}
            >
              <div className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center">
                {activeGalleryProjects[selectedIndex].videoUrl ? (
                  <iframe 
                    src={activeGalleryProjects[selectedIndex].videoUrl} 
                    className="w-full h-full border-0 lg:scale-105" 
                    allow="autoplay"
                    allowFullScreen
                  />
                ) : (
                  <img 
                    src={activeGalleryProjects[selectedIndex].imageUrl} 
                    alt={activeGalleryProjects[selectedIndex].title}
                    referrerPolicy="no-referrer"
                    className="max-w-full max-h-full object-contain lg:scale-105 shadow-2xl"
                  />
                )}
              </div>
              
              <div className="text-center space-y-1">
                <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
                  <h2 className="text-xl md:text-2xl font-black text-white tracking-tighter uppercase leading-none">
                    {activeGalleryProjects[selectedIndex].title}
                  </h2>
                  <div className="hidden md:block w-1 h-1 rounded-full bg-brand-emerald/40" />
                  <p className="text-brand-emerald font-mono text-[9px] tracking-[0.4em] uppercase font-bold">
                    {activeGalleryProjects[selectedIndex].subtitle || 'Case Study / 2024'}
                  </p>
                </div>
                {activeGalleryProjects[selectedIndex].description && (
                  <p className="text-white/30 text-[10px] md:text-xs max-w-2xl mx-auto mt-2 leading-relaxed font-medium">
                    {activeGalleryProjects[selectedIndex].description}
                  </p>
                )}

                {(activeGalleryProjects[selectedIndex].externalUrl || activeGalleryProjects[selectedIndex].webUrl) && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="pt-6 flex flex-wrap items-center justify-center gap-4"
                  >
                    {activeGalleryProjects[selectedIndex].webUrl && (
                      <a 
                        href={activeGalleryProjects[selectedIndex].webUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 border border-white/20 text-white font-mono text-[10px] tracking-[0.4em] uppercase font-black rounded-full hover:bg-white hover:text-brand-black transition-all duration-300"
                      >
                        Visit Website
                      </a>
                    )}
                    {activeGalleryProjects[selectedIndex].externalUrl && (
                      <a 
                        href={activeGalleryProjects[selectedIndex].externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 bg-brand-emerald text-brand-black font-mono text-[10px] tracking-[0.4em] uppercase font-black rounded-full hover:bg-white hover:scale-105 transition-all duration-300 flex items-center gap-3"
                      >
                        Read Full Article
                        <ChevronRight size={14} />
                      </a>
                    )}
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
