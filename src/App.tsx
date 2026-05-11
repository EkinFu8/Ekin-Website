// src/App.tsx

import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectDetail from "./components/ProjectDetail";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

import { useRestoreScrollPosition, useSaveScrollPosition } from "./hooks/useScrollRestoration";

function Home() {
  useSaveScrollPosition();
  useRestoreScrollPosition();

  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--bg)] text-white">
      {/* Ambient Background */}
      <div className="bg-mesh" aria-hidden="true" />
      <div className="bg-dots" aria-hidden="true" />

      {/* Site Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
