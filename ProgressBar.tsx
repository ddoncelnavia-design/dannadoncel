import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Award, X, Maximize2 } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import SectionHeading from './SectionHeading';

interface Certification {
  title: string;
  institution: string;
  year: string;
  image: string;
}

const certifications: Certification[] = [
  {
    title: 'Low-Code Automation (n8n)',
    institution: 'Platzi',
    year: '2026',
    image: '/certifications/n8n_2026.png'
  },
  {
    title: 'AI for Content Marketing',
    institution: 'Platzi',
    year: '2026',
    image: '/certifications/content_ia_2026.png'
  },
  {
    title: 'AI for SEO',
    institution: 'Platzi',
    year: '2026',
    image: '/certifications/seo_ia_2026.png'
  },
  {
    title: 'AI Marketing Strategy',
    institution: 'Platzi',
    year: '2026',
    image: '/certifications/data_ia_2026.png'
  },
  {
    title: 'AI Video Production',
    institution: 'Platzi',
    year: '2026',
    image: '/certifications/videos_ia_2026.png'
  },
  {
    title: 'AI Image Generation',
    institution: 'Platzi',
    year: '2026',
    image: '/certifications/images_ia_2026.png'
  },
  {
    title: 'Prompt Engineering',
    institution: 'Platzi',
    year: '2026',
    image: '/certifications/prompt_ia_2026.png'
  },
  {
    title: 'Marketing & ChatGPT',
    institution: 'Udemy',
    year: '2025',
    image: '/certifications/marketing_gpt_2025.png'
  },
  {
    title: 'Google Ads Search',
    institution: 'Google',
    year: '2024',
    image: '/certifications/google_ads_search_2024.png'
  },
  {
    title: 'Google Ads Display',
    institution: 'Google',
    year: '2024',
    image: '/certifications/google_ads_display_2024.png'
  },
  {
    title: 'Google Analytics (GA4)',
    institution: 'Google',
    year: '2024',
    image: '/certifications/google_analytics_2024.png'
  },
  {
    title: 'Google Ads Expert',
    institution: 'Coderhouse',
    year: '2024',
    image: '/certifications/google_ads_coder_2024.png'
  },
  {
    title: 'Content Marketing',
    institution: 'HubSpot Academy',
    year: '2022',
    image: '/certifications/marketing_contenidos_2022.png'
  },
  {
    title: 'B.A. Communication',
    institution: 'Autonomous University of the West',
    year: '2022',
    image: '/certifications/diploma_2022.png'
  },
  {
    title: 'Academic Degree',
    institution: 'Autonomous University of the West',
    year: '2022',
    image: '/certifications/acta_grado_2022.png'
  }
];

export default function Certifications() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showGallery, setShowGallery] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const years = Array.from(new Set(certifications.map(c => c.year))).sort((a, b) => b.localeCompare(a));

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % certifications.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + certifications.length) % certifications.length);
  };

  useEffect(() => {
    if (isAutoPlaying && !showGallery) {
      autoPlayRef.current = setInterval(next, 5000);
    } else {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying, showGallery]);

  // Handle Escape key and body scroll lock
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowGallery(false);
      if (e.key === 'ArrowRight' && showGallery) next();
      if (e.key === 'ArrowLeft' && showGallery) prev();
    };

    if (showGallery) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [showGallery]);

  const handleManualControl = () => {
    setIsAutoPlaying(false);
  };

  const goToYear = (year: string) => {
    const index = certifications.findIndex(c => c.year === year);
    if (index !== -1) {
      setCurrentIndex(index);
      handleManualControl();
    }
  };

  const openGallery = () => {
    setShowGallery(true);
    setIsAutoPlaying(false);
  };

  return (
    <section id="certifications" className="py-32 px-6 max-w-7xl mx-auto min-h-screen">
      <SectionHeading 
        number="04" 
        title="Certifications" 
        subtitle="Ongoing Training & Professional Improvement"
      />

      <div className="max-w-4xl mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-xl md:text-2xl text-brand-black font-medium leading-tight">
            Continuous learning is an essential part of my professional growth. I believe in the importance of staying updated, strengthening my skills, and continuing to learn in order to offer increasingly strategic, creative, and effective solutions.
          </p>
          <p className="text-brand-black/60 text-base md:text-lg leading-relaxed">
            In this section, you will find some of the certifications that reflect my commitment to ongoing training and continuous improvement.
          </p>
        </motion.div>
      </div>

      {/* Year Filters / Indicators */}
      <div className="flex flex-wrap gap-4 mb-12">
        {years.map((year) => (
          <button 
            key={year}
            onClick={() => goToYear(year)}
            className={`px-6 py-2 rounded-full border text-[10px] font-bold tracking-widest uppercase transition-all cursor-pointer hover:scale-105 active:scale-95 ${
              certifications[currentIndex].year === year 
                ? 'bg-brand-emerald border-brand-emerald text-white' 
                : 'border-brand-black/5 text-brand-beige hover:border-brand-emerald/30'
            }`}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Carousel Container */}
      <div className="relative group">
        <div className="overflow-hidden rounded-[40px] bg-brand-surface border border-brand-black/5 shadow-sm">
          <div className="relative aspect-[4/3] md:aspect-[16/9] flex items-center justify-center p-4 md:p-12 overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95, x: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full flex flex-col md:flex-row items-center gap-8 md:gap-16"
            >
              {/* Image Side */}
              <div 
                className="w-full md:w-3/5 h-full relative group/img cursor-pointer"
                onClick={openGallery}
                title="Click to view full size"
              >
                <img 
                  src={certifications[currentIndex].image} 
                  alt={certifications[currentIndex].title}
                  className="w-full h-full object-contain drop-shadow-2xl transition-transform duration-500 group-hover/img:scale-[1.02]"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://placehold.co/800x600/F5F2ED/0b979d?text=Certification+Image';
                  }}
                />
                
                {/* Maximize Indicator */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity bg-brand-emerald/10 backdrop-blur-[2px] rounded-2xl md:rounded-[40px] pointer-events-none">
                  <div className="w-16 h-16 rounded-full bg-white/90 shadow-xl flex items-center justify-center text-brand-emerald transform scale-90 group-hover/img:scale-100 transition-transform duration-300">
                    <Maximize2 size={32} />
                  </div>
                </div>

                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-brand-emerald/20 flex items-center gap-3">
                   <div className="w-8 h-8 rounded-xl bg-brand-emerald/10 flex items-center justify-center text-brand-emerald">
                     <Award size={18} />
                   </div>
                   <div className="flex flex-col">
                     <span className="text-[8px] font-mono font-black uppercase text-brand-emerald tracking-tighter">Verified</span>
                     <span className="text-[10px] font-black uppercase tracking-tighter leading-none">{certifications[currentIndex].year}</span>
                   </div>
                </div>
              </div>

              {/* Info Side */}
              <div className="w-full md:w-2/5 space-y-6 text-center md:text-left">
                <div className="space-y-4">
                  <span className="font-mono text-[10px] text-brand-emerald tracking-[0.4em] uppercase font-black">
                    {certifications[currentIndex].institution}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-black tracking-tighter uppercase leading-[0.9]">
                    {certifications[currentIndex].title}
                  </h3>
                  <div className="h-[1px] w-12 bg-brand-emerald/30 hidden md:block" />
                </div>
                
                <p className="text-sm font-medium text-brand-black/60 leading-relaxed italic">
                  Credential successfully completed in {certifications[currentIndex].year}, strengthening technical expertise in {certifications[currentIndex].title.toLowerCase().includes('ia') ? 'Artificial Intelligence' : certifications[currentIndex].title.toLowerCase().includes('ads') ? 'Paid Media' : 'Digital Strategy'}.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Controls */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <button 
            onClick={(e) => { e.stopPropagation(); prev(); handleManualControl(); }}
            className="w-14 h-14 rounded-full bg-white/80 backdrop-blur-md shadow-lg border border-brand-black/5 flex items-center justify-center text-brand-black hover:bg-brand-emerald hover:text-white transition-all pointer-events-auto active:scale-90"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); next(); handleManualControl(); }}
            className="w-14 h-14 rounded-full bg-white/80 backdrop-blur-md shadow-lg border border-brand-black/5 flex items-center justify-center text-brand-black hover:bg-brand-emerald hover:text-white transition-all pointer-events-auto active:scale-90"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {certifications.map((_, i) => (
            <button
              key={i}
              onClick={() => { setCurrentIndex(i); handleManualControl(); }}
              className={`h-1 transition-all duration-500 rounded-full ${
                currentIndex === i ? 'w-8 bg-brand-emerald' : 'w-2 bg-brand-black/10'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Gallery Modal */}
      <AnimatePresence>
        {showGallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-black/95 backdrop-blur-xl p-4 md:p-12"
            onClick={() => setShowGallery(false)}
          >
            {/* Close button */}
            <button 
              onClick={() => setShowGallery(false)}
              className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-[110]"
            >
              <X size={24} />
            </button>

            {/* Navigation buttons */}
            <button 
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-[110] active:scale-90"
            >
              <ChevronLeft size={32} className="w-6 h-6 md:w-8 md:h-8" />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-[110] active:scale-90"
            >
              <ChevronRight size={32} className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            {/* Image container */}
            <motion.div 
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(_, info) => {
                if (info.offset.x > 100) prev();
                else if (info.offset.x < -100) next();
              }}
              className="relative w-full h-full flex flex-col items-center justify-center gap-8 cursor-grab active:cursor-grabbing"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Invisible touch zones for navigation */}
              <div className="absolute inset-0 flex">
                <div className="w-1/4 h-full cursor-pointer z-10" onClick={prev} />
                <div className="w-1/2 h-full" />
                <div className="w-1/4 h-full cursor-pointer z-10" onClick={next} />
              </div>

              <img 
                src={certifications[currentIndex].image}
                alt={certifications[currentIndex].title}
                className="max-w-full max-h-[65vh] md:max-h-[80vh] object-contain shadow-2xl rounded-lg pointer-events-none"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://placehold.co/800x600/F5F2ED/0b979d?text=Certification+Image';
                }}
              />
              
              <div className="text-center text-white max-w-2xl space-y-3 pb-8">
                <span className="font-mono text-[10px] text-brand-emerald tracking-[0.4em] uppercase font-black">
                  {certifications[currentIndex].institution}
                </span>
                <h3 className="text-2xl md:text-3xl font-black tracking-tighter uppercase leading-none">
                  {certifications[currentIndex].title}
                </h3>
                <div className="flex flex-col items-center gap-4">
                  <p className="text-white/60 font-medium italic">
                    Class of {certifications[currentIndex].year}
                  </p>
                  
                  {/* Progress indicator moved inside to avoid overlapping */}
                  <div className="flex justify-center gap-2 pt-2">
                    {certifications.map((_, i) => (
                      <div
                        key={i}
                        className={`h-1 transition-all duration-300 rounded-full ${
                          currentIndex === i ? 'w-8 bg-brand-emerald' : 'w-2 bg-white/20'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
