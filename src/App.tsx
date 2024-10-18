import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import Loader from "./components/Loader/Loader";

const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/projects/Projects'));
const ProjectDetails = lazy(() => import('./pages/projects/ProjectDetails'));
const NotFound = lazy(() => import('./components/NotFound'));

function App() {
  return (
    <main>
      <Header />
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </main>
  )
}

export default App
