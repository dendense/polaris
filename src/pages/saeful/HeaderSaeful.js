import React from "react";
import Button from "elements/Button";
import fotopertama from "./po.jpg";

export default function HeaderSaeful(props) {
  return (
    <div className="konten-header bg-dark d-flex text-white">
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <a className="navbar-brand text-white" href="#">
          <h2>{props.judulHeader}</h2>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link text-white" href="#">
                ABOUT <span class="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link text-white" href="#">
                CONTACT <span class="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                BLOG
              </a>
            </li>
            <li class="nav-item">
              <img src="https://google.com/pisang.png" alt="" />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
