import logo from "./logo.svg";
import HomeNav from "./components/Navbar";
import { useState, useEffect } from "react";
import Banner from "./components/Banner";
import About from "./components/About";
import Languages from "./components/Languages";
import Laptop from "./components/Laptop";
import "./App.css";
import ScrollspyNav from "react-scrollspy-nav";
import AllProjects from "./components/AllProjects";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Hidden from "@mui/material/Hidden";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#002D04",
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <Hidden lgDown>
          <header>
            <HomeNav />
          </header>
        </Hidden>
        <main>
          <Banner />
          <About />
          <Languages />
          <AllProjects />
        </main>
        <footer></footer>
      </ThemeProvider>
    </>
  );
}

export default App;
