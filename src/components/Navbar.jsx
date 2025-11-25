// src/components/Navbar.jsx
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  User,
  Briefcase,
  PenSquare,
  MessageCircle,
} from "lucide-react";
import "../styles/global.css";

function Navbar() {
  const [openMobile, setOpenMobile] = useState(false);

  const toggleMobile = () => setOpenMobile((prev) => !prev);
  const closeMobile = () => setOpenMobile(false);

  const navItems = [
    { path: "/", label: "Beranda", icon: <Home size={14} /> },
    { path: "/about", label: "Tentang", icon: <User size={14} /> },
    { path: "/portfolio", label: "Portfolio", icon: <Briefcase size={14} /> },
    { path: "/blog", label: "Blog", icon: <PenSquare size={14} /> },
    { path: "/contact", label: "Kontak", icon: <MessageCircle size={14} /> },
  ];

  return (
    <header className="navbar fade-in-down">
      <div className="container nav-inner">
        {/* LOGO */}
        <div className="nav-logo">
          <div className="logo-mark" />
          <div className="logo-text">
            <h1>Arvan Shadowa</h1>
            <p>Rizki Ananda • Web & IT Support</p>
          </div>
        </div>

        {/* NAV DESKTOP */}
        <nav className="nav-menu nav-menu-desktop">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active" : "")
              }
              onClick={closeMobile}
            >
              {item.icon}
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        {/* TOMBOL HAMBURGER (MOBILE) */}
        <button
          type="button"
          className="nav-toggle"
          onClick={toggleMobile}
          aria-label="Toggle navigation"
        >
          {openMobile ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* NAV MOBILE DROPDOWN */}
      {openMobile && (
        <nav className="nav-menu nav-menu-mobile fade-in-down">
          <div className="container nav-menu-mobile-inner">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  "nav-link nav-link-mobile" + (isActive ? " active" : "")
                }
                onClick={closeMobile}
              >
                {item.icon}
                <span>{item.label}</span>
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
