import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';

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
    <Section id="experience" className="py-24 bg-mistral-cream border-t border-neutral-200">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div>
            <span className="text-orange-500 font-mono text-sm tracking-wider uppercase">Career</span>
            <h2 className="text-4xl md:text-5xl font-medium mt-4 text-neutral-900 leading-tight">
              Experience
            </h2>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-8 border-l border-neutral-300"
              >
                <div className="absolute left-[-5px] top-0 w-2 h-2 bg-orange-500 rounded-full"></div>

                <p className="text-sm font-mono text-neutral-500 mb-2">{exp.duration}</p>
                <h3 className="text-2xl font-medium mb-1 text-neutral-900">
                  {exp.role}
                </h3>
                <p className="text-lg text-neutral-700 mb-4">{exp.company}</p>
                
                <div className="space-y-2 mb-6">
                  {exp.description.map((item, idx) => (
                    <p key={idx} className="text-neutral-600 font-light leading-relaxed">
                       {item}
                    </p>
                  ))}
                </div>
                
                {exp.tech && (
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-white border border-neutral-200 text-neutral-600 font-mono"
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
          className="relative sticky top-24"
        >
           {/* Mistral Style Abstract Box */}
          <div className="bg-[#FFF4D6] p-8 border border-neutral-100 min-h-[500px] flex items-center justify-center relative overflow-hidden">
             {/* Abstract stripes decoration */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFD700] opacity-20 transform rotate-45 translate-x-16 -translate-y-16"></div>
             <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#FF9900] opacity-10 transform -rotate-12 -translate-x-16 translate-y-16"></div>

            <div className="text-center text-neutral-800 z-10">
              <div className="w-48 h-32 mx-auto mb-6 border-2 border-dashed border-neutral-400 flex items-center justify-center bg-white/50">
                  <span className="text-sm text-neutral-500 font-mono">Workplace Image</span>
              </div>
              <p className="text-sm font-mono uppercase tracking-widest">Journey</p>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
