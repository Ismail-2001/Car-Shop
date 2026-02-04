import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Shield, Star, ChevronRight } from 'lucide-react';
import { ServiceItem } from '../types';

const SERVICES: ServiceItem[] = [
  { 
    title: "The Signature Wash", 
    price: "From $85", 
    desc: "A meticulous hand wash including wheel decontamination, tire dressing, and interior vacuuming. The foundation of car care.", 
    icon: Droplets 
  },
  { 
    title: "Paint Correction", 
    price: "From $450", 
    desc: "Multi-stage machine polishing to remove swirls, scratches, and oxidation, revealing a mirror-like finish.", 
    icon: Shield 
  },
  { 
    title: "Ceramic Coating", 
    price: "From $1,200", 
    desc: "The ultimate protection. A 5-year chemical bond providing extreme gloss, hydrophobicity, and environmental resistance.", 
    icon: Star 
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="bg-neutral-950 py-32 px-6 relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-900/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <span className="text-gold-500 tracking-[0.2em] uppercase text-xs font-bold">Curated Packages</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mt-6">Service Menu</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group bg-neutral-900/40 border border-white/5 p-10 hover:bg-neutral-900 transition-colors duration-500 cursor-pointer flex flex-col"
            >
              <div className="mb-8 p-4 bg-black/50 w-fit rounded-full border border-white/5 group-hover:border-gold-500/30 transition-colors">
                <service.icon className="w-6 h-6 text-neutral-400 group-hover:text-gold-400 transition-colors" />
              </div>
              
              <h3 className="text-2xl text-white font-serif mb-4 group-hover:text-gold-100 transition-colors">{service.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed mb-8 flex-grow">{service.desc}</p>
              
              <div className="flex justify-between items-end border-t border-white/5 pt-8 mt-auto">
                <span className="text-white font-medium text-lg">{service.price}</span>
                <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300">
                  <ChevronRight size={18} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;