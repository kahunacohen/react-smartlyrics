import React from "react";
import {useLocation} from "react-router-dom";

export const Header = () => {
  const path = useLocation().pathname.split("/")[1];
  console.log(path);
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
