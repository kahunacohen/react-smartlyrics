import React from "react";

export const Header = () => {
  return (
    <header>
      <ul className="nav nav-pills">
        <li className="nav-item">
          <a className="nav-link active" href="/songs/">
            Songs
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about/">
            about
          </a>
        </li>
      </ul>
    </header>
  );
};
