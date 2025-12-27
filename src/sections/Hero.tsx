import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="h-[80vh] flex items-center justify-center relative overflow-hidden pt-16">
      {/* Mistral-style warm gradient background with mountain silhouettes */}
      <div className="absolute inset-0 z-0">
        {/* Warm gradient background - exact Mistral colors */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFF8E7] via-[#FFE5B4] to-[#FFB84D]" />
        
        {/* Mountain silhouettes effect - multiple layers */}
        <div className="absolute inset-0">
          <svg 
            className="absolute bottom-0 w-full h-full" 
            viewBox="0 0 1200 600" 
            preserveAspectRatio="none"
            style={{ height: '100%' }}
          >
            {/* Back layer - lighter */}
            <path
              d="M0,400 Q150,350 300,380 T600,360 T900,380 T1200,400 L1200,600 L0,600 Z"
              fill="rgba(0,0,0,0.08)"
            />
            {/* Middle layer */}
            <path
              d="M0,450 Q200,400 400,420 T800,410 T1200,450 L1200,600 L0,600 Z"
              fill="rgba(0,0,0,0.12)"
            />
            {/* Front layer - darker */}
            <path
              d="M0,500 Q100,450 200,470 T400,460 T600,475 T800,465 T1000,480 T1200,500 L1200,600 L0,600 Z"
              fill="rgba(0,0,0,0.15)"
            />
            {/* Additional detail layer */}
            <path
              d="M0,550 Q80,520 160,535 T320,530 T480,540 T640,535 T800,545 T960,538 T1120,550 T1200,550 L1200,600 L0,600 Z"
              fill="rgba(0,0,0,0.18)"
            />
          </svg>
        </div>
      </div>
      
      <Container className="relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-5xl mx-auto text-center px-4"
        >
          {/* Main Title - Large white text, exact Mistral style */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-6 text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] text-white tracking-tight"
            style={{ color: '#ffffff', textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
          >
            Frontend Engineer.
            <br />
            In Your Hands.
          </motion.h1>

          {/* Subtitle - Smaller white text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12 text-xl md:text-2xl font-normal"
            style={{ color: '#ffffff', textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}
          >
            Scalable interfaces for modern products.
          </motion.p>

          {/* Large Input Field - White background, exact Mistral style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8"
          >
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Talk to le Chat"
                className="w-full px-6 py-5 text-lg bg-white border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 shadow-xl"
                style={{ color: '#1a1a1a' }}
              />
              <button 
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-md transition-colors shadow-lg"
                style={{ backgroundColor: '#FF7A00' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FF8A1A'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FF7A00'}
              >
                <ArrowRight className="h-5 w-5 text-white" />
              </button>
            </div>
          </motion.div>

          {/* CTA Buttons - White buttons with dark text and arrows */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-white rounded-lg hover:bg-white/90 transition-colors inline-flex items-center gap-2 shadow-md font-medium text-base"
              style={{ color: '#1a1a1a' }}
            >
              Get a demo
              <ArrowRight className="h-4 w-4" style={{ color: '#1a1a1a' }} />
            </button>
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-white rounded-lg hover:bg-white/90 transition-colors inline-flex items-center gap-2 shadow-md font-medium text-base"
              style={{ color: '#1a1a1a' }}
            >
              Start building
              <ArrowRight className="h-4 w-4" style={{ color: '#1a1a1a' }} />
            </button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};
