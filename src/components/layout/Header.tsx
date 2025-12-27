import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#FFF9E5]"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo - Pixel M style but keeping name or using simple block */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-neutral-900 flex items-center justify-center">
                <span className="text-[#FFF9E5] font-bold text-lg">M</span>
            </div>
            {/* Optional: Show name on mobile only if needed, or always */}
          </div>
          
          {/* Navigation - Centered, Dark Text */}
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#about" 
              className="text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors"
            >
              Products
            </a>
            <a 
              href="#projects" 
              className="text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors"
            >
              Solutions
            </a>
            <a 
              href="#experience" 
              className="text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors"
            >
              Research
            </a>
            <a 
              href="#contact" 
              className="text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors"
            >
              Company
            </a>
          </nav>
          
          {/* CTA Buttons - Right Aligned */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium text-neutral-900 bg-[#F1F0E7] hover:bg-[#E5E4D9] transition-colors rounded-sm"
            >
              Try AI Studio
              <ArrowRight className="h-3 w-3 text-orange-500" />
            </button>

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium text-neutral-900 bg-[#F1F0E7] hover:bg-[#E5E4D9] transition-colors rounded-sm"
            >
               Talk to sales
               <ArrowRight className="h-3 w-3 text-orange-500" />
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};
