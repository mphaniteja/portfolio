import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function handleClick() {
  const pdfUrl =`${process.env.PUBLIC_URL}/Maddinapudi_Phani_Teja_Resume$.pdf`;
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "Phani Teja Resume";
  document.body.appendChild(link);
  link.click();
}

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light nav-color">
      <Link className="navbar-brand text-warning" to="/">
        Maddinapudi Phani Teja
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleMenu}
        aria-expanded={isMenuOpen ? "true" : "false"}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`} id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
        <li className="nav-item">
            <Link className="nav-link white-text" to="/workExperience" onClick={toggleMenu}>
              Work Experience
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link white-text" to="/achievements" onClick={toggleMenu}>
              Achievements
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link white-text" onClick={handleClick} title="Click to download resume">
              Resume
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link white-text" to="/contact" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;