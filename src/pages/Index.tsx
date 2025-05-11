
import React from "react";
import Header from "../components/Header";
import Welcome from "../components/Welcome";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";
import Fireworks from "../components/Fireworks";

const Index = () => {
  return (
    <div className="min-h-screen bg-navy-900">
      <Fireworks />
      <Header />
      <Welcome />
      <About />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default Index;
