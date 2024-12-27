import React, { useEffect } from "react";
import '/src/assets/css/App.css';
import Header from '/src/components/Header';
import Home from '/src/components/Home';
import Footer from '/src/components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MentionLegales from '/src/components/MentionLegales';
import { useTranslation } from 'react-i18next';
import i18n from './i18n';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (!i18n.isInitialized) {
      i18n.init();
    }
  }, [i18n]);

  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mention-legales" element={<MentionLegales />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;