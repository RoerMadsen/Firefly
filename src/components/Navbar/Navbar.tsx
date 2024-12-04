import { useState } from "react";
import "./Navbar.scss";

const Navbar = () => {
  // Tilstand til at håndtere synligheden af menuen
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible((prevState) => !prevState);
  };

  return (
    <header className="primary-header flex">
      <div>
        <img
          src="../../../public/logo.png"
          alt="Firefly logo"
          className="logo"
        />
      </div>

      <button
        className="mobile-nav-toggle"
        aria-controls="primary-navigation"
        onClick={toggleMenu}
        aria-expanded={isMenuVisible ? "true" : "false"}>
        <span className="sr-only">Menu</span>
      </button>

      <nav>
        <ul
          id="primary-navigation"
          data-visible={isMenuVisible ? "true" : "false"}
          className={`primary-navigation underline-indicators flex ${
            isMenuVisible ? "open" : ""
          }`}>
          <li className="nav-link">
            <a href="index.html">Bestil</a>
          </li>
          <li className="nav-link">
            <a href="destination.html">Om Firefly</a>
          </li>
          <li className="nav-link">
            <a href="crew.html">Kontakt Os</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
