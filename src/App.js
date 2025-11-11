import React, { Suspense, lazy } from "react";
import "./App.css";

// ✅ Lazy load components
const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Resume = lazy(() => import("./components/Resume"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <div className="App">
      <h1>Manasa Dasari Portfolio</h1>

      {/* Suspense shows fallback while components load */}
      <Suspense fallback={<p>Loading sections...</p>}>
        <About />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </Suspense>
    </div>
  );
}

export default App;
