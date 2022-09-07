import logo from './logo.svg';
import HomeNav from './components/Navbar';
import { useState, useEffect } from 'react';
import './App.css';
import Banner from './components/Banner';
import About from './components/About';
import Languages from './components/Languages';
import Projects from './components/Projects'


function App() {

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
