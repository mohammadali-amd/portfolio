import { Suspense, lazy, memo } from 'react';

import Loader from '../components/Loader/Loader';

const Hero = lazy(() => import('../sections/Hero'));
const Skills = lazy(() => import('../sections/Skills'));
const Career = lazy(() => import('../sections/Career'));
const Projects = lazy(() => import('../sections/Projects'));
const Contact = lazy(() => import('../sections/Contact'));

const Home = memo(() => {
   return (
      <Suspense fallback={<Loader />}>
         <Hero />
         <Skills />
         <Career />
         <Projects />
         <Contact />
      </Suspense>
   )
})

export default Home
