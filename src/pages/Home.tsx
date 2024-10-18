import { Suspense, lazy, memo } from 'react';

import Hero from '../sections/Hero';
import Loader from '../components/Loader/Loader';

const Skills = lazy(() => import('../sections/Skills'));
const Career = lazy(() => import('../sections/Career'));
const Projects = lazy(() => import('../sections/Projects'));
const Contact = lazy(() => import('../sections/Contact'));

const Home = memo(() => {
   return (
      <>
         <Hero />
         <Suspense fallback={<Loader />}>
            <Skills />
            <Career />
            <Projects />
            <Contact />
         </Suspense>
      </>
   )
})

export default Home
