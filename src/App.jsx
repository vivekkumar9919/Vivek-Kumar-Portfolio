import React from "react";
import Navbar from "./sections/Navbar";
import MatrixBackground from "./components/MatrixBackground";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Info from "./sections/Info";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

import "./styles/main.css";

function App() {
  return (
    <>
      <MatrixBackground />
      <Navbar />
      <Info />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
