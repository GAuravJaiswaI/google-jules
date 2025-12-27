import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center bg-mistral-cream pt-20">
      
      {/* Content Top Section */}
      <Container className="relative z-20 mb-16 text-center">
        {/* Placeholder for "Pixel Cat" Image */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8 }}
           className="w-48 h-24 mx-auto mb-12 bg-neutral-900/10 border-2 border-dashed border-neutral-400 flex items-center justify-center rounded-lg"
        >
            <span className="text-neutral-500 text-sm font-mono">Pixel Cat Logo</span>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-sans font-medium text-neutral-900 tracking-tight mb-8">
            Gaurav Jaiswal
            <br />
            <span className="text-neutral-500">Frontend Engineer.</span>
          </h1>

          <p className="text-xl text-neutral-600 mb-12 max-w-2xl mx-auto">
             Building scalable interfaces for modern products with React and Tailwind.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-8">
             <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#F1F0E7] text-neutral-900 px-6 py-3 rounded-md font-medium hover:bg-[#E5E4D9] transition-colors flex items-center gap-2 group"
             >
                View Projects
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
             </button>
             <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-neutral-900 px-6 py-3 font-medium hover:opacity-70 transition-opacity flex items-center gap-2 group"
             >
                Contact Me
                 <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
             </button>
          </div>
        </motion.div>
      </Container>

      {/* The Mistral Stripes - Full Width */}
      <div className="w-full flex flex-col mt-auto">
        <div className="h-12 md:h-16 w-full bg-[#FFF4D6]"></div> {/* Stripe 1 */}
        <div className="h-12 md:h-16 w-full bg-[#FFD700]"></div> {/* Stripe 2 */}
        <div className="h-12 md:h-16 w-full bg-[#FF9900]"></div> {/* Stripe 3 */}
        <div className="h-12 md:h-16 w-full bg-[#FF5500]"></div> {/* Stripe 4 */}
        <div className="h-12 md:h-16 w-full bg-[#E60000]"></div> {/* Stripe 5 */}
      </div>

    </section>
  );
};
