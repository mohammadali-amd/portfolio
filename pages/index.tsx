import HomePage from '@/sections/Home/index';
import Skills from '@/sections/Skills';
import Career from '@/sections/Career';
import Projects from '@/sections/Projects';
import Contact from '@/sections/Contact';

export default function Home() {
  return (
    <>
      <HomePage />
      <Skills />
      <Career />
      <Projects />
      <Contact />
    </>
  );
}