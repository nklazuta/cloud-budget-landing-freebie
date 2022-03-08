import React from "react";
import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import VideoSection from "../VideoSection/VideoSection";
import Features from "../Features/Features";
import Techs from "../Techs/Techs";
import AppDownload from "../AppDownload/AppDownload";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Promo />
        <VideoSection />
        <Features />
        <Techs />
        <AppDownload />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
