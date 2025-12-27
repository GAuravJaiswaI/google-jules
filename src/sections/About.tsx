import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { ArrowRight } from 'lucide-react';

export const About = () => {
  return (
    <Section id="about" className="py-24 bg-mistral-cream">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="space-y-4">
              <span className="text-orange-500 font-mono text-sm tracking-wider uppercase">About</span>
              <h2 className="text-4xl md:text-5xl font-medium text-neutral-900 leading-tight">
                Gaurav Jaiswal
              </h2>
          </div>

          <div className="space-y-6 text-lg text-neutral-600 leading-relaxed font-light">
            <p>
              I'm currently working on a basic React project and always looking to
              collaborate on functional projects. I'm passionate about building
              modern web applications and continuously learning new technologies.
            </p>
            <p>
              Currently learning React.js and MongoDB, I'm focused on expanding my
              skills in full-stack development. I believe in writing clean,
              maintainable code and creating user-friendly interfaces.
            </p>
          </div>

          <a href="#contact" className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium transition-colors group">
              Let's work together
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* Right Side - Visual Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Mistral style placeholder: simple border, minimal styling */}
          <div className="w-full h-[400px] border-2 border-dashed border-neutral-300 rounded-sm flex items-center justify-center bg-[#FFFdf5]">
              <span className="text-neutral-400 font-mono">Profile Image Placeholder</span>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
