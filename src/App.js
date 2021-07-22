import React, { useState } from "react";
import "./App.css";
import About from "./components/aboutme/About";
import Contact from "./components/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Menu from "./components/sidemenu/Menu";

function App() {
  const [open, setopen] = useState(false);
  return (
    <>
      <div className="app">
        <Navbar open={open} setopen={setopen} />
        <Menu open={open} setopen={setopen} />
        <div className="section">
          <About />
          <Portfolio />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
