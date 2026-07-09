import './styles/global.css';

import Cursor      from './components/Cursor';
import Particles   from './components/Particles';
import ScrollUtils from './components/ScrollUtils';
import Navbar      from './components/Navbar';
import Hero        from './components/Hero';
import Marquee     from './components/Marquee';
import About       from './components/About';
import Skills      from './components/Skills';
import Projects    from './components/Projects';
import Contact     from './components/Contact';
import Footer      from './components/Footer';

import { MARQUEE_TECH, MARQUEE_ROLES } from './data/portfolio';

export default function App() {
  return (
    <>
      {/* Global overlays */}
      <Cursor />
      <Particles />
      <ScrollUtils />

      {/* Main layout */}
      <Navbar />

      <main>
        <Hero />
        <Marquee items={MARQUEE_TECH} />
        <About />
        <Marquee items={MARQUEE_ROLES} reverse />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
