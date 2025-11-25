import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingIcons from "./components/FloatingIcons";
import ScrollToTop from "./components/ScrollToTop";


import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

import "./styles/global.css";

function App() {
  const location = useLocation();
  const isAdminRoute = false; // kalau nanti ada halaman admin, bisa diatur di sini

  return (
    <div className="app">
       {/* ICON TERBANG GLOBAL */}
      <FloatingIcons />
      {!isAdminRoute && <Navbar />}

      <main className="main-content">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          {/* fallback */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      {!isAdminRoute && <Footer />}
    </div>
  );
}

export default App;
