import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Songs</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
