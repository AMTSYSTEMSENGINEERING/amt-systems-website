import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar, Footer } from "./components";
import { navbarData, footerData } from "./data/SiteData";
import HomePage from './pages/HomePage';
import AvisPage from "./pages/AvisPage";
import ServicesPage from "./pages/ServicesPage";
import CursorAnimation from "./components/CustumPointer";

export default function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <NavBar {...navbarData} />
        <CursorAnimation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/reviews" element={<AvisPage />} />
        </Routes>
        <Footer {...footerData} />
      </div>
    </BrowserRouter>
  );
}

