import { Container } from './Container';
import { Github, Linkedin, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-mistral-cream pt-20 pb-12 border-t border-neutral-200 text-neutral-900">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          {/* Logo Column */}
          <div className="col-span-2 lg:col-span-1">
             <div className="w-12 h-12 bg-neutral-900 flex items-center justify-center mb-6">
                {/* Mistral-like simple logo placeholder */}
                <div className="w-6 h-6 border-2 border-white"></div>
             </div>
          </div>

          {/* Links Column 1 */}
          <div className="flex flex-col gap-4">
            <h4 className="text-orange-500 font-medium mb-2">Why Gaurav</h4>
            <a href="#about" className="text-neutral-900 hover:text-orange-600 transition-colors">About</a>
            <a href="#experience" className="text-neutral-900 hover:text-orange-600 transition-colors">Experience</a>
            <a href="#skills" className="text-neutral-900 hover:text-orange-600 transition-colors">Skills</a>
          </div>

          {/* Links Column 2 */}
          <div className="flex flex-col gap-4">
            <h4 className="text-orange-500 font-medium mb-2">Explore</h4>
            <a href="#projects" className="text-neutral-900 hover:text-orange-600 transition-colors">Projects</a>
            <a href="#" className="text-neutral-900 hover:text-orange-600 transition-colors">Open Source</a>
            <a href="#" className="text-neutral-900 hover:text-orange-600 transition-colors">Blog</a>
          </div>

          {/* Links Column 3 */}
          <div className="flex flex-col gap-4">
            <h4 className="text-orange-500 font-medium mb-2">Connect</h4>
            <a href="mailto:gauravjaiswal0531@gmail.com" className="text-neutral-900 hover:text-orange-600 transition-colors">Email</a>
            <a href="https://www.linkedin.com/in/gaurav005" className="text-neutral-900 hover:text-orange-600 transition-colors">LinkedIn</a>
            <a href="https://github.com/GAuravJaiswaI" className="text-neutral-900 hover:text-orange-600 transition-colors">GitHub</a>
          </div>

          {/* Links Column 4 */}
          <div className="flex flex-col gap-4">
             <h4 className="text-orange-500 font-medium mb-2">Legal</h4>
             <a href="#" className="text-neutral-900 hover:text-orange-600 transition-colors">Terms of service</a>
             <a href="#" className="text-neutral-900 hover:text-orange-600 transition-colors">Privacy policy</a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neutral-300">
           <div className="text-neutral-500 mb-4 md:mb-0">
             © 2025 Gaurav Jaiswal
           </div>

           <div className="flex items-center gap-6">
              <span className="font-mono text-neutral-900">EN</span>
              <div className="flex gap-4">
                 <a href="https://x.com/gaurav_shiv_in" className="text-neutral-900 hover:text-orange-600 transition-colors">
                    <Twitter className="w-5 h-5" />
                 </a>
                 <a href="https://www.linkedin.com/in/gaurav005" className="text-neutral-900 hover:text-orange-600 transition-colors">
                    <Linkedin className="w-5 h-5" />
                 </a>
                 <a href="https://github.com/GAuravJaiswaI" className="text-neutral-900 hover:text-orange-600 transition-colors">
                    <Github className="w-5 h-5" />
                 </a>
              </div>
           </div>
        </div>
      </Container>
    </footer>
  );
};
