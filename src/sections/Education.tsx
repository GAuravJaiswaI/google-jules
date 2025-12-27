import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';

interface EducationItem {
  degree: string;
  institution: string;
  year: string;
}

const education: EducationItem[] = [
  {
    degree: 'Bachelor of Technology',
    institution: 'Your University',
    year: '2020 - 2024',
  },
];

export const Education = () => {
  return (
    <Section id="education" className="py-24">
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
            Education
          </h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={`${edu.institution}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-semibold mb-2 text-foreground">
                  {edu.degree}
                </h3>
                <p className="text-xl text-muted-foreground mb-1">
                  {edu.institution}
                </p>
                <p className="text-muted-foreground">{edu.year}</p>
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
          <div className="bg-muted/30 rounded-lg p-8 border border-border min-h-[300px] flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <div className="w-32 h-32 mx-auto mb-4 bg-accent/10 rounded-lg flex items-center justify-center">
                <span className="text-6xl">🎓</span>
              </div>
              <p className="text-sm">Education Visual</p>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
