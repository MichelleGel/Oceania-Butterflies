import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const handleToggleMenu = () => {
    try {
      setIsMenuOpen((prev) => !prev);
    } catch (error) {
      console.error("Error toggling menu:", error);
    }
  };

  const getLinkClass = (path) => {
    return location.pathname === path ? "active-link" : "";
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2 className="navbar-logo">Mariposas Polinizadoras | Oceanía</h2>
        <button className="menu-button" onClick={handleToggleMenu}>
          ☰
        </button>
      </div>

      <ul className={`navbar-links ${isMenuOpen ? "menu-open" : ""}`}>
        <li><Link to="/" className={getLinkClass("/")}>Quiénes Somos</Link></li>
        <li><Link to="/galeria" className={getLinkClass("/galeria")}>Galería</Link></li>
        <li><Link to="/añadir" className={getLinkClass("/añadir")}>Añadir Mariposa</Link></li>
        <li><Link to="/buscador" className={getLinkClass("/buscador")}>Buscador</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
