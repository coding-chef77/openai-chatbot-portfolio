import React from "react";
import "./Navbar.css";

function Navbar({ switchMode, isDayMode }) {
  return (
    <header>
      <nav className="navbar">
        <h1>Heines portfolio!</h1>
        <button
          onClick={switchMode}
          className={`navbar-button ${isDayMode ? "day-mode" : "night-mode"}`}
        >
          {isDayMode ? "Bytt til nattmodus" : "Bytt til dagmodus"}
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
