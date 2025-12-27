import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const techStack = {
  languages: ['C++', 'C', 'JavaScript', 'HTML5', 'Python', 'CSS3'],
  frontend: ['React', 'Next.js', 'TailwindCSS', 'Bootstrap'],
  backend: ['Node.js', 'Express.js'],
  databases: ['MongoDB', 'MySQL', 'Oracle'],
  tools: ['Git', 'GitHub', 'NumPy', 'Pandas', 'Matplotlib'],
};

const features = [
  {
    title: 'Frontend Development',
    description: 'Building responsive and interactive web applications using React, Next.js, and modern CSS frameworks like TailwindCSS.',
    icon: '→',
  },
  {
    title: 'Backend & Databases',
    description: 'Developing server-side applications with Node.js and Express, working with MongoDB, MySQL, and Oracle databases.',
    icon: '→',
  },
  {
    title: 'Data Science',
    description: 'Analyzing data and creating visualizations using Python libraries like NumPy, Pandas, and Matplotlib.',
    icon: '→',
  },
  {
    title: 'Continuous Learning',
    description: 'Currently learning React.js and MongoDB, always exploring new technologies and best practices.',
    icon: '→',
  },
];

export const Skills = () => {
  return (
    <Section id="skills" className="py-24">
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
            What I bring to the table.
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A combination of technical expertise and design sensibility.
          </p>
          <div className="space-y-6 pt-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl text-accent mt-1 group-hover:translate-x-1 transition-transform">
                    {feature.icon}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="pt-8 space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {[...techStack.languages, ...techStack.frontend, ...techStack.backend, ...techStack.databases, ...techStack.tools].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm bg-muted rounded-md text-muted-foreground border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Side - Visual Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="bg-muted/30 rounded-lg p-8 border border-border min-h-[500px] flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <div className="w-32 h-32 mx-auto mb-4 bg-accent/10 rounded-lg flex items-center justify-center">
                <span className="text-6xl">⚡</span>
              </div>
              <p className="text-sm">Skills Visualization</p>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
