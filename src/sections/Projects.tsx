import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

interface Project {
  name: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    name: 'Project Name',
    description:
      'A comprehensive web application built with React and TypeScript, featuring real-time updates and seamless user experience.',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/GAuravJaiswaI',
    live: '#',
    featured: true,
  },
  {
    name: 'Mobile App',
    description:
      'A React Native application with offline capabilities, push notifications, and smooth animations.',
    tech: ['React Native', 'Firebase', 'Node.js'],
    github: 'https://github.com/GAuravJaiswaI',
  },
  {
    name: 'Full-Stack Platform',
    description:
      'End-to-end solution with React frontend, Express backend, and MongoDB database.',
    tech: ['React', 'Express', 'MongoDB'],
    github: 'https://github.com/GAuravJaiswaI',
  },
];

export const Projects = () => {
  return (
    <Section id="projects" className="py-24 bg-mistral-cream border-t border-neutral-200">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-20">
           <span className="text-orange-500 font-mono text-sm tracking-wider uppercase">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-medium mt-4 text-neutral-900 leading-tight">
            Selected Work
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mt-4">
            Projects that showcase my skills in building scalable, user-focused applications.
          </p>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="grid md:grid-cols-2 gap-16 items-start"
            >
              {/* Left Side - Text Content */}
              <div className={index % 2 === 0 ? '' : 'md:order-2'}>
                <h3 className="text-3xl font-medium mb-6 text-neutral-900">
                  {project.name}
                </h3>
                <p className="text-lg text-neutral-600 mb-8 leading-relaxed font-light">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-neutral-100 text-neutral-700 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-neutral-900 hover:text-orange-600 transition-colors font-medium group"
                    >
                      <Github className="h-5 w-5" />
                      GitHub
                      <ArrowRight className="h-4 w-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    </a>
                  )}
                  {project.live && (
                     <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-neutral-900 hover:text-orange-600 transition-colors font-medium group"
                    >
                      <ExternalLink className="h-5 w-5" />
                      Live Demo
                      <ArrowRight className="h-4 w-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    </a>
                  )}
                </div>
              </div>
              
              {/* Right Side - Visual Content (Placeholder) */}
              <div className={index % 2 === 0 ? 'md:order-2' : ''}>
                <div className="border border-neutral-200 bg-white p-2">
                    <div className="aspect-video bg-[#FFFdf5] border border-dashed border-neutral-300 flex items-center justify-center">
                        <span className="text-neutral-400 font-mono text-sm">Project Screenshot</span>
                    </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 text-center"
        >
          <a
            href="https://github.com/GAuravJaiswaI"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-lg font-medium text-neutral-900 hover:text-orange-600 transition-colors group"
          >
            View all projects on GitHub
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </motion.div>
    </Section>
  );
};
