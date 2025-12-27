import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';

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
  },
  {
    title: 'Backend & Databases',
    description: 'Developing server-side applications with Node.js and Express, working with MongoDB, MySQL, and Oracle databases.',
  },
  {
    title: 'Data Science',
    description: 'Analyzing data and creating visualizations using Python libraries like NumPy, Pandas, and Matplotlib.',
  },
];

export const Skills = () => {
  return (
    <Section id="skills" className="py-24 bg-mistral-cream">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="space-y-4">
              <span className="text-orange-500 font-mono text-sm tracking-wider uppercase">Expertise</span>
              <h2 className="text-4xl md:text-5xl font-medium text-neutral-900 leading-tight">
                What I bring to the table.
              </h2>
          </div>

          <div className="space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group border-b border-neutral-300 pb-8 last:border-0"
              >
                  <h3 className="text-xl font-medium mb-3 text-neutral-900 flex items-center gap-2">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed font-light">
                    {feature.description}
                  </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Side - Tech Stack Grid */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 md:p-12 border border-neutral-200 shadow-sm"
        >
            <h3 className="text-2xl font-medium text-neutral-900 mb-8">Technologies</h3>

            <div className="space-y-8">
                <div>
                    <h4 className="text-sm font-mono text-orange-600 uppercase mb-4 tracking-wider">Languages</h4>
                    <div className="flex flex-wrap gap-2">
                        {techStack.languages.map(t => (
                            <span key={t} className="px-3 py-1 bg-neutral-100 text-neutral-700 text-sm">{t}</span>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="text-sm font-mono text-orange-600 uppercase mb-4 tracking-wider">Frontend</h4>
                    <div className="flex flex-wrap gap-2">
                        {techStack.frontend.map(t => (
                            <span key={t} className="px-3 py-1 bg-neutral-100 text-neutral-700 text-sm">{t}</span>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="text-sm font-mono text-orange-600 uppercase mb-4 tracking-wider">Backend</h4>
                    <div className="flex flex-wrap gap-2">
                        {techStack.backend.map(t => (
                            <span key={t} className="px-3 py-1 bg-neutral-100 text-neutral-700 text-sm">{t}</span>
                        ))}
                    </div>
                </div>

                 <div>
                    <h4 className="text-sm font-mono text-orange-600 uppercase mb-4 tracking-wider">Databases & Tools</h4>
                    <div className="flex flex-wrap gap-2">
                        {[...techStack.databases, ...techStack.tools].map(t => (
                            <span key={t} className="px-3 py-1 bg-neutral-100 text-neutral-700 text-sm">{t}</span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
      </div>
    </Section>
  );
};
