import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const getLinkClass = (path) => {
    return location.pathname === path ? "active-link nav-link" : "nav-link";
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : "transparent"}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          {/* Logo para movil */}
          <img src="/logotipo-navbar.png" alt="Logo Móvil" className="logo-mobile" />

          {/* Logo epara version escritorio que va antes del texto */}
          <img src="/logo-navbar.png" alt="Logo Desktop" className="logo-desktop" />
          <span className="logo-text">POLINIZADORAS | Mariposas Oceania</span>
        </Link>



        <button
          className="menu-button"
          onClick={handleToggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className={`navbar-links ${isMenuOpen ? "menu-open" : ""}`} aria-expanded={isMenuOpen}>
          <li><Link to="/contactcreators" className={getLinkClass("/")}>Quiénes Somos</Link></li>
          <li><Link to="/butterflylist" className={getLinkClass("/explora")}>Explora</Link></li>
          <li><Link to="/newbutterfly" className={getLinkClass("/añadir")}>Añadir Mariposa</Link></li>
          <li><Link to="/registro" className={getLinkClass("/registro")}>Registro</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
