import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"; // 🆕 Add this line
import About from "./components/About";
import Skills from "./components/Skills";
import ProjectsLanding from "./components/ProjectsLanding";
import WordPressProjects from "./components/WordPressProjects";
import FullStackProjects from "./components/FullStackProjects";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 min-h-screen">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="home">
                  <Hero />
                </section>
                <About />
                <Skills />
                <ProjectsLanding />
                <Services />
                <Contact />
              </>
            }
          />
          <Route path="/wordpress" element={<WordPressProjects />} />
          <Route path="/fullstack" element={<FullStackProjects />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
