import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const About = () => {
  return (
    <Section id="about" className="py-24">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
            Hi, I'm Gaurav Jaiswal
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            I'm currently working on a basic React project and always looking to
            collaborate on functional projects. I'm passionate about building
            modern web applications and continuously learning new technologies.
          </p>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Currently learning React.js and MongoDB, I'm focused on expanding my
            skills in full-stack development. I believe in writing clean,
            maintainable code and creating user-friendly interfaces.
          </p>
          <Button
            variant="default"
            size="lg"
            asChild
            className="gap-2 bg-foreground text-background hover:bg-foreground/90"
          >
            <a href="#contact">
              Let's work together
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </motion.div>

        {/* Right Side - Visual Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="bg-muted/30 rounded-lg p-8 border border-border min-h-[400px] flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <div className="w-32 h-32 mx-auto mb-4 bg-accent/10 rounded-lg flex items-center justify-center">
                <span className="text-6xl">💻</span>
              </div>
              <p className="text-sm">Visual Content</p>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
