import React from 'react';
import { motion } from 'framer-motion';

const IMAGE_DETAIL = "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1920&auto=format&fit=crop";
const IMAGE_FOAM = "https://images.unsplash.com/photo-1605152276897-4f618f831968?q=80&w=1920&auto=format&fit=crop";

const Introduction: React.FC = () => {
  return (
    <section id="process" className="bg-black py-24 md:py-40 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-[1.1]">
              Not just a wash. <br/> A <span className="text-neutral-600 italic">restoration.</span>
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed mb-10 font-light max-w-lg">
              We treat every vehicle as a masterpiece. Using pH-neutral formulas, filtered deionized water, and the finest plush microfibers, we ensure a swirl-free finish that preserves your investment for years to come.
            </p>
            
            <div className="h-px w-full bg-white/10 mb-10"></div>

            <div className="grid grid-cols-2 gap-12">
              <div>
                <h3 className="text-4xl text-white font-serif mb-2">15+</h3>
                <p className="text-xs text-neutral-500 uppercase tracking-widest font-bold">Years Experience</p>
              </div>
              <div>
                <h3 className="text-4xl text-white font-serif mb-2">5k+</h3>
                <p className="text-xs text-neutral-500 uppercase tracking-widest font-bold">Elite Cars Detailed</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="order-1 lg:order-2 grid grid-cols-2 gap-6 relative">
            <motion.div
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
            >
              <img 
                src={IMAGE_DETAIL} 
                className="w-full h-80 object-cover rounded-sm opacity-90 hover:opacity-100 transition-opacity duration-500" 
                alt="Detailing Close-up"
              />
            </motion.div>
            <motion.div
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2, duration: 0.8 }}
               className="mt-16"
            >
              <img 
                src={IMAGE_FOAM} 
                className="w-full h-80 object-cover rounded-sm opacity-90 hover:opacity-100 transition-opacity duration-500" 
                alt="Foam Wash"
              />
            </motion.div>
            
            {/* Background Accent */}
            <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-neutral-900/30 rounded-full blur-[100px] -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;