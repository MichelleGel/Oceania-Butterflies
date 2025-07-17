import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Cierra el menú al cambiar de ruta
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Función para alternar menú hamburguesa
  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Clase para link activo
  const getLinkClass = (path) => {
    return location.pathname === path ? "active-link nav-link" : "nav-link";
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Mariposas Polinizadoras | Oceanía
        </Link>

        <button className="menu-button" onClick={handleToggleMenu}>
          ☰
        </button>

        <ul className={`navbar-links ${isMenuOpen ? "menu-open" : ""}`}>
          <li><Link to="/" className={getLinkClass("/")}>Quiénes Somos</Link></li>
          <li><Link to="/galeria" className={getLinkClass("/galeria")}>Galería</Link></li>
          <li><Link to="/añadir" className={getLinkClass("/añadir")}>Añadir Mariposa</Link></li>
          <li><Link to="/buscador" className={getLinkClass("/buscador")}>Buscador</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
