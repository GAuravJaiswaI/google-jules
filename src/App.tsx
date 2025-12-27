import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Experience } from './sections/Experience';
import { Contact } from './sections/Contact';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';

function App() {
  return (
    <div className="min-h-screen text-foreground bg-mistral-cream font-sans">
      <Header />
      <Hero />
      <div id="content-wrapper" className="bg-mistral-cream">
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
