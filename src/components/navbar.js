import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
const Navbar = () => {
  return (
    <div className="container">
      <nav className="nav">
        <ul className="nav_links">
          <Link className="nav_link" to="/">
            New quiz
          </Link>
        </ul>
        <ul className="nav_links">
          <Link className="nav_link" to="/question">
            Show question
          </Link>
        </ul>
        <ul className="nav_links">
          <Link className="nav_link" to="/answer/*">
            Show answer
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
