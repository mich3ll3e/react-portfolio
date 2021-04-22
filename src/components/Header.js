import React from "react";
import { Link } from "react-router-dom";
function Header() {
    return (
        <nav className="navbar navbar-light bg-light d-flex">
          <h1 className="navbar-brand text-light mr-auto px-3 logo">Michelle Ouyang</h1>
          <Link className="px-3" to="/">About</Link>
          <Link className="px-3" to="/portfolio">Portfolio</Link>
        </nav>
      );
};

export default Header;