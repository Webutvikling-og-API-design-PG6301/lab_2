import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <Link to="/">New quiz</Link>
        </ul>
        <ul>
          <Link to="/question">Show question</Link>
        </ul>
        <ul>
          <Link to="/answer/*">Show answer</Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
