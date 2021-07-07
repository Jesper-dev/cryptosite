import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1>
        <Link to="/">J & J - Crypto Town</Link>
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/news">News</Link>
        </li>
        <li>
          <Link to="/explore">Explore</Link>
        </li>
        <li>
          <Link to="/forum">Forum</Link>
        </li>

        <button>Sign Up</button>
        <button>Sign In</button>
      </ul>
    </nav>
  );
};

export default Navbar;
