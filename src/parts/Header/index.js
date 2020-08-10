import React from "react";
import propTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  return (
    <nav className="navbar navbar-light bg-dark">
      <a className="navbar-brand text-white" href="#">
        <i class="far fa-caret-square-left"></i>
      </a>
    </nav>
  );
}
