import React from "react";
import Header from "../Header/Header";
import Promo from '../Promo/Promo';
import VideoSection from '../VideoSection/VideoSection';
import Features from '../Features/Features';
import Techs from '../Techs/Techs';
import Footer from '../Footer/Footer';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Promo />
        <VideoSection />
        <Features />
        <Techs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
