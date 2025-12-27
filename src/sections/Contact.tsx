import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, ArrowRight, MessageCircle, Facebook, Instagram } from 'lucide-react';

export const Contact = () => {
  return (
    <Section id="contact" className="py-24">
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
            Let's build something together.
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button
              variant="outline"
              size="lg"
              asChild
              className="gap-2"
            >
              <a href="mailto:gauravjaiswal0531@gmail.com">
                <Mail className="h-5 w-5" />
                <span>Email</span>
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              asChild
              className="gap-2"
            >
              <a
                href="https://www.linkedin.com/in/gaurav005"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              asChild
              className="gap-2"
            >
              <a
                href="https://github.com/GAuravJaiswaI"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              asChild
              className="gap-2"
            >
              <a
                href="https://discord.gg/gaurav31"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Discord</span>
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              asChild
              className="gap-2"
            >
              <a
                href="https://m.facebook.com/profile.php?id=100024295104204"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5" />
                <span>Facebook</span>
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              asChild
              className="gap-2"
            >
              <a
                href="https://instagram.com/gaurav_shiv_in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
                <span>Instagram</span>
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              asChild
              className="gap-2"
            >
              <a
                href="https://x.com/gaurav_shiv_in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span>X (Twitter)</span>
              </a>
            </Button>
          </div>

          <a
            href="mailto:gauravjaiswal0531@gmail.com"
            className="inline-flex items-center gap-2 text-lg text-foreground hover:text-accent transition-colors group pt-4"
          >
            Start a conversation
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
          <div className="bg-muted/30 rounded-lg p-8 border border-border min-h-[400px] flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <div className="w-32 h-32 mx-auto mb-4 bg-accent/10 rounded-lg flex items-center justify-center">
                <span className="text-6xl">📧</span>
              </div>
              <p className="text-sm">Contact Visual</p>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
