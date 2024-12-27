import React from "react";
import '/src/assets/css/App.css';
import MetaTags from '/src/components/MetaTags';
import Header from '/src/components/Header';
import Home from '/src/components/Home';
import Footer from '/src/components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MentionLegales from '/src/components/MentionLegales';
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <>
      <Router>
        <HelmetProvider>
          <Header />
          <MetaTags />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mention-legales" element={<MentionLegales />} />
          </Routes>
          <Footer />
        </HelmetProvider>
      </Router>
    </>
  );
}

export default App;