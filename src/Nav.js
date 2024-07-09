import React from "react";
import { Link } from "react-router-dom";
import "./App.css"

const Nav = () => {
  return (
    <div>
        <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
      </ul>
      </nav>
    </div>
  );
};

export default Nav;
