import React from 'react';
import { Instagram, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-20 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12 md:gap-0">
        <div>
          <h2 className="text-3xl font-serif text-white font-bold tracking-tight">OBSIDIAN.</h2>
          <p className="text-neutral-500 text-sm mt-4 max-w-xs leading-relaxed">
            The premier automotive care facility for luxury, exotic, and classic vehicles. Perfection is our standard.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="#" className="text-neutral-500 hover:text-white transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-neutral-500 hover:text-white transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-neutral-500 hover:text-white transition-colors"><Facebook size={20} /></a>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-12 sm:gap-24">
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6 text-gold-500">Contact</h4>
            <div className="space-y-3">
                <p className="text-neutral-400 text-sm hover:text-white transition-colors cursor-pointer">concierge@obsidian.com</p>
                <p className="text-neutral-400 text-sm hover:text-white transition-colors cursor-pointer">+1 (800) 555-0199</p>
                <p className="text-neutral-400 text-sm hover:text-white transition-colors cursor-pointer">Live Chat Support</p>
            </div>
          </div>
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6 text-gold-500">Location</h4>
            <div className="space-y-3">
                <p className="text-neutral-400 text-sm">880 Wilshire Blvd,</p>
                <p className="text-neutral-400 text-sm">Beverly Hills, CA</p>
                <a href="#" className="text-xs text-white underline underline-offset-4 mt-2 inline-block">Get Directions</a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600 gap-4">
        <p>© 2024 Obsidian Auto Spa. All rights reserved.</p>
        <div className="flex gap-6">
            <a href="#" className="hover:text-neutral-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-400 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;