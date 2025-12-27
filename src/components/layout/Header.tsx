import { ModeToggle } from '@/components/ui/mode-toggle';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Glossy glassmorphism effect */}
      <div 
        className="absolute inset-0 backdrop-blur-md"
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)',
        }}
      />
      
      <div className="relative mx-auto w-[80%] max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo - Orange color */}
          <div className="text-xl font-medium" style={{ color: '#f97415', textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
            Gaurav Jaiswal
          </div>
          
          {/* Navigation - Orange text */}
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#about" 
              className="text-sm font-medium transition-colors hover:opacity-80"
              style={{ color: '#f97415', textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}
            >
              About
            </a>
            <a 
              href="#projects" 
              className="text-sm font-medium transition-colors hover:opacity-80"
              style={{ color: '#f97415', textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}
            >
              Projects
            </a>
            <a 
              href="#experience" 
              className="text-sm font-medium transition-colors hover:opacity-80"
              style={{ color: '#f97415', textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}
            >
              Experience
            </a>
            <a 
              href="#contact" 
              className="text-sm font-medium transition-colors hover:opacity-80"
              style={{ color: '#f97415', textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}
            >
              Contact
            </a>
          </nav>
          
          {/* CTA Buttons - Glossy style matching mode toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg transition-all text-sm font-medium backdrop-blur-sm border-white/30 hover:bg-white/20"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                color: '#f97415',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1)',
              }}
            >
              Get in Touch
              <ArrowRight className="h-3 w-3" style={{ color: '#f97415' }} />
            </button>
            <ModeToggle />
          </div>
        </div>
      </div>
    </motion.header>
  );
};
