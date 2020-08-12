import React from "react";
import propTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";

export default function Header(props) {
  return (
    <nav className="navbar navbar-light bg-dark">
      <a className="navbar-brand text-white">
        <i class="far fa-caret-square-left"></i>
      </a>
      <form class="form-inline">
        <i class="far fa-bell"></i>
        <img src="/images/ava1.jpg" alt="Avatar" class="avatar"></img>
      </form>
    </nav>
  );
}
