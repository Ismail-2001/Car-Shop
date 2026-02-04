import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HERO_IMAGE = "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2000&auto=format&fit=crop";

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, 200]);
  const opacityFade = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
      {/* Background Image with Slow Zoom & Parallax */}
      <motion.div 
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent z-10" />
        <img src={HERO_IMAGE} alt="Luxury Car" className="w-full h-full object-cover" />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ y: yParallax, opacity: opacityFade }}
        className="relative z-20 text-center max-w-5xl px-6"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex items-center justify-center gap-4 mb-6"
        >
          <div className="h-[1px] w-12 bg-gold-500/50"></div>
          <span className="uppercase tracking-[0.3em] text-xs md:text-sm text-gold-400 font-medium block">
            Automotive Aesthetic Perfection
          </span>
          <div className="h-[1px] w-12 bg-gold-500/50"></div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-9xl font-serif text-white font-medium mb-10 leading-[0.9] tracking-tight"
        >
          Redefining <br /> <span className="italic text-neutral-500">Brilliance.</span>
        </motion.h1>
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 1.2, duration: 0.8 }}
           className="flex flex-col md:flex-row gap-6 justify-center"
        >
          <button className="px-10 py-4 bg-white text-black text-xs md:text-sm font-bold tracking-[0.2em] uppercase hover:bg-neutral-200 transition-all duration-300">
            Configure Service
          </button>
          <button className="px-10 py-4 border border-white/20 text-white text-xs md:text-sm font-bold tracking-[0.2em] uppercase hover:bg-white/10 transition-all backdrop-blur-sm duration-300">
            View Portfolio
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-neutral-500">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-neutral-500 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;