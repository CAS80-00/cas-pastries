import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="CAS Pastries logo" className="logo" />

        {/* Name beside the logo */}
        <h1 className="brand-title">CAS Pastries</h1>
      </div>

      <nav className="nav">
        <Link
          to="/"
          className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
        >
          Recipes
        </Link>

        <Link
          to="/add"
          className={`nav-link ${location.pathname === "/add" ? "active" : ""}`}
        >
          Add Recipe
        </Link>
      </nav>
    </header>
  );
}

export default Header;
