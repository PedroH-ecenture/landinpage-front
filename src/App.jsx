import { useState, useEffect } from "react";
import "swiper/css";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./header";
import Hero from "./components/Hero";
import About from "./components/About";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./footer";

import './index.css'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    try {
      return localStorage.getItem('ph_dark') === '1';
    } catch { return false }
  });

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('ph_dark', darkMode ? '1' : '0');
    } catch { }
  }, [darkMode]);

  return (
    <div className={`${darkMode ? "dark" : ""} font-sans antialiased`}>
      <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-blue-900 text-gray-100' : 'bg-blue-100 text-gray-900'}`}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />

        <main className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-24 py-12">
          <Hero darkMode={darkMode}/>
          <About darkMode={darkMode} />
          <AboutMe darkMode={darkMode} />
          <Projects darkMode={darkMode}/>
          <Contact darkMode={darkMode}/>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
