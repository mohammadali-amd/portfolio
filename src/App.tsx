import Header from "./components/Header";
import ProjectDetails from "./pages/projects/ProjectDetails";
import Home from "./pages/Home";
import Projects from './pages/projects/Projects';
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <main>
      <Header />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />

        <Route path='*' element={<NotFound />} />
      </Routes>

    </main>
  )
}

export default App
