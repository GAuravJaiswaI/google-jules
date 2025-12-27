import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { ChevronRight } from 'lucide-react';
import { PixelCat } from '@/components/ui/PixelCat';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center bg-mistral-cream pt-32 pb-0">
      
      {/* Content Top Section */}
      <Container className="relative z-20 mb-8 text-center flex-grow flex flex-col justify-center">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-sans font-medium text-neutral-900 tracking-tight mb-12 leading-[1.1]">
            The next chapter of AI <br className="hidden md:block" /> is yours.
          </h1>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-center mt-8 mb-16">
             <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-neutral-900 text-lg font-medium hover:opacity-70 transition-opacity flex items-center gap-1 border-b border-neutral-900 pb-0.5"
             >
                Start building with Mistral AI
                <ChevronRight className="w-4 h-4 text-[#FF9900]" strokeWidth={3} />
             </button>
             <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-neutral-900 text-lg font-medium hover:opacity-70 transition-opacity flex items-center gap-1 border-b border-neutral-900 pb-0.5"
             >
                Talk to an expert
                 <ChevronRight className="w-4 h-4 text-[#FF9900]" strokeWidth={3} />
             </button>
          </div>
        </motion.div>

        {/* Pixel Cat Image */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8 }}
           className="mx-auto mt-4 mb-0"
        >
            <PixelCat />
        </motion.div>

      </Container>

      {/* The Mistral Stripes - Full Width */}
      <div className="w-full flex flex-col mt-auto">
        <div className="h-12 md:h-20 w-full bg-[#FFF4D6]"></div> {/* Stripe 1 */}
        <div className="h-12 md:h-20 w-full bg-[#FFD700]"></div> {/* Stripe 2 */}
        <div className="h-12 md:h-20 w-full bg-[#FF9900]"></div> {/* Stripe 3 */}
        <div className="h-12 md:h-20 w-full bg-[#FF5500]"></div> {/* Stripe 4 */}
        <div className="h-12 md:h-20 w-full bg-[#E60000]"></div> {/* Stripe 5 */}
      </div>

    </section>
  );
};
