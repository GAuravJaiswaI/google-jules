import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/button';
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
    <Section id="projects" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
            Selected Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Projects that showcase my skills in building scalable, user-focused applications.
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="grid md:grid-cols-2 gap-16 items-center"
            >
              {/* Left Side - Text Content */}
              <div className={index % 2 === 0 ? '' : 'md:order-2'}>
                <h3 className="text-4xl font-bold mb-4 text-foreground">
                  {project.name}
                </h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 text-sm bg-muted rounded-md text-muted-foreground border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.github && (
                    <Button
                      variant="outline"
                      size="lg"
                      asChild
                      className="gap-2"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  )}
                  {project.live && (
                    <Button
                      variant="default"
                      size="lg"
                      asChild
                      className="gap-2 bg-foreground text-background hover:bg-foreground/90"
                    >
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
              
              {/* Right Side - Visual Content */}
              <div className={index % 2 === 0 ? 'md:order-2' : ''}>
                <div className="bg-muted/30 rounded-lg p-8 border border-border min-h-[300px] flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <div className="w-24 h-24 mx-auto mb-4 bg-accent/10 rounded-lg flex items-center justify-center">
                      <span className="text-4xl">📱</span>
                    </div>
                    <p className="text-sm">Project Preview</p>
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
          className="mt-16 text-center"
        >
          <a
            href="https://github.com/GAuravJaiswaI"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-lg text-foreground hover:text-accent transition-colors group"
          >
            View all projects on GitHub
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </motion.div>
    </Section>
  );
};
