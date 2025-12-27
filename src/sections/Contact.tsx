import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Mail, Linkedin, Github, ArrowRight, MessageCircle, Facebook, Instagram } from 'lucide-react';

export const Contact = () => {
  return (
    <Section id="contact" className="py-24 bg-mistral-cream border-t border-neutral-200">
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
            <span className="text-orange-500 font-mono text-sm tracking-wider uppercase">Get in touch</span>
            <h2 className="text-4xl md:text-5xl font-medium mt-4 text-neutral-900 leading-tight">
              Let's build something together.
            </h2>
          </div>

          <p className="text-xl text-neutral-600 leading-relaxed font-light">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
             {/* Styled Links as Buttons */}
             <SocialLink href="mailto:gauravjaiswal0531@gmail.com" icon={<Mail className="w-4 h-4" />} label="Email" />
             <SocialLink href="https://www.linkedin.com/in/gaurav005" icon={<Linkedin className="w-4 h-4" />} label="LinkedIn" />
             <SocialLink href="https://github.com/GAuravJaiswaI" icon={<Github className="w-4 h-4" />} label="GitHub" />
             <SocialLink href="https://discord.gg/gaurav31" icon={<MessageCircle className="w-4 h-4" />} label="Discord" />
             <SocialLink href="https://m.facebook.com/profile.php?id=100024295104204" icon={<Facebook className="w-4 h-4" />} label="Facebook" />
             <SocialLink href="https://instagram.com/gaurav_shiv_in/" icon={<Instagram className="w-4 h-4" />} label="Instagram" />
             <SocialLink href="https://x.com/gaurav_shiv_in" icon={
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
             } label="X (Twitter)" />
          </div>

          <a
            href="mailto:gauravjaiswal0531@gmail.com"
            className="inline-flex items-center gap-2 text-lg font-medium text-neutral-900 hover:text-orange-600 transition-colors group pt-4"
          >
            Start a conversation
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
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
          {/* Mistral Style Placeholder */}
          <div className="w-full h-[400px] border border-neutral-200 bg-white p-4 relative">
             <div className="w-full h-full border-2 border-dashed border-neutral-300 bg-[#FFFdf5] flex items-center justify-center">
                <div className="text-center text-neutral-400">
                    <span className="block text-4xl mb-4">✉️</span>
                    <span className="font-mono text-sm">Contact Visual</span>
                </div>
             </div>

             {/* Decorative Elements */}
             <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#FF5500] opacity-10 rounded-full blur-xl"></div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 bg-white border border-neutral-200 text-neutral-700 rounded-sm hover:border-orange-300 hover:text-orange-600 transition-all text-sm font-medium"
    >
        {icon}
        <span>{label}</span>
    </a>
);
