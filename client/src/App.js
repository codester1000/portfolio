import logo from './logo.svg';
import HomeNav from './components/Navbar';
import { useState, useEffect } from 'react';
import './App.css';
import Banner from './components/Banner';
import About from './components/About';
import Languages from './components/Languages';
import Projects from './components/Projects'


function App() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      <header>
        <HomeNav />
      </header>
      <main>
        <Banner />
        <About /> 
        <Languages />
        <Projects />

      </main>
      <footer>
      </footer>
    </>

  );
}

export default App;
