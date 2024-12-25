import React from "react";
import '/src/assets/css/App.css';
import Header from '/src/components/Header';
import Home from '/src/components/Home';
import Footer from '/src/components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TermsOfUse from '/src/components/TermsOfUse';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/terms-of-use" Component={TermsOfUse} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;