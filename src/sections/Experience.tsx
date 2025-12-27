import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { ArrowRight } from 'lucide-react';

interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  description: string[];
  tech?: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: 'Company Name',
    role: 'Frontend Engineer',
    duration: '2023 - Present',
    description: [
      'Built and maintained scalable React applications serving thousands of users',
      'Collaborated with cross-functional teams to deliver high-quality features',
      'Improved application performance, reducing load time by 40%',
    ],
    tech: ['React', 'TypeScript', 'Node.js'],
  },
  {
    company: 'Previous Company',
    role: 'Software Developer',
    duration: '2021 - 2023',
    description: [
      'Developed mobile applications using React Native',
      'Implemented RESTful APIs and integrated third-party services',
      'Mentored junior developers and conducted code reviews',
    ],
    tech: ['React Native', 'Express', 'MongoDB'],
  },
];

export const Experience = () => {
  return (
    <Section id="experience" className="py-24">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
              Professional Experience
            </h2>
            <p className="text-xl text-muted-foreground">
              Building products that matter, with teams that care.
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <p className="text-sm text-muted-foreground mb-2">{exp.duration}</p>
                <h3 className="text-2xl font-semibold mb-1 text-foreground">
                  {exp.role}
                </h3>
                <p className="text-xl text-accent mb-4">{exp.company}</p>
                
                <div className="space-y-2">
                  {exp.description.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="text-accent mt-1">→</span>
                      <p className="text-muted-foreground leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
                
                {exp.tech && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-background/50 rounded-md text-muted-foreground border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
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
                <span className="text-6xl">💼</span>
              </div>
              <p className="text-sm">Experience Timeline</p>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
