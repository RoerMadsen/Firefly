import React, { useState } from "react";
import "./Navbar.css"; // Vi tilføjer styling her

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-logo">
          <img src="/logo.svg" alt="Logo" />
        </div>
        <div className={`navbar-links ${isOpen ? "open" : ""}`}>
          <a href="#bestil">Bestil</a>
          <a href="#om-firefly">Om Firefly</a>
          <a href="#kontakt">Kontakt</a>
        </div>
        <button
          className="navbar-toggle"
          onClick={toggleMenu}
          aria-label="Toggle Menu">
          <span className="list-icon"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
