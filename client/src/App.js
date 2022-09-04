import logo from './logo.svg';
import HomeNav from './components/Navbar';

import './App.css';
import Banner from './components/Banner';
import About from './components/About';



function App() {
  return (
    <>
      <header>
        <HomeNav />
      </header>
      <main>
        <Banner />
        <About /> 
      </main>
    </>

  );
}

export default App;
