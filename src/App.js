import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import AvisSlider from './avis/avis'
import Contact from './contact/contact'
import Header from './components/NavBar';
import Footer from './components/Footer';

const App = () => (
  <BrowserRouter>
   <Contact/> 
    <AvisSlider/>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;