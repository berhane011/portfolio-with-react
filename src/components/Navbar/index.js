import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light bt">
      <Link className="navbar-brand" to="/">
        berhane teklemariam
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/about"
              className={
                window.location.pathname === "/" ||
                window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Portfolio"
              className={
                window.location.pathname === "/Portfolio"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Skills"
              className={
                window.location.pathname === "/Portfolio"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
             Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Contact"
              className={
                window.location.pathname === "/Contact"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
