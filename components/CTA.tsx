import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="relative py-40 px-6 bg-neutral-900 text-center overflow-hidden">
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay"></div>
        
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-[100px]"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
            Ready for the <br/><span className="italic text-gold-500">showroom shine?</span>
          </h2>
          <p className="text-neutral-400 mb-12 text-lg">
            Experience the pinnacle of automotive care. Book your appointment today and let us transform your vehicle.
          </p>
          <button className="px-12 py-5 bg-gold-600 text-black text-sm font-bold uppercase tracking-widest hover:bg-gold-500 transition-all shadow-[0_0_40px_-10px_rgba(202,138,4,0.3)] hover:shadow-[0_0_60px_-10px_rgba(202,138,4,0.5)] transform hover:-translate-y-1">
            Book Your Session
          </button>
        </div>
    </section>
  );
};

export default CTA;