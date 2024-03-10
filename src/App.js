import React from "react";
import Hero from "./components/Hero/Hero";
import Card from "./components/Card/Card";
import Cardtwo from "./components/CardTwo/Cardtwo";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import "./App.css";
function App() {
  return (
    <>
      <Hero />
      <About />
      <Card />
      <Cardtwo />
      <Footer />
    </>
  );
}

export default App;
