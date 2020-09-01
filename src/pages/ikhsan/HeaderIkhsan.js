import React from "react";

export default function HeaderIkhsan(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <a className="navbar-brand text-white">IKHSAN</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link text-white" href="#">
            ABOUT
          </a>
          <a className="nav-link text-white" href="#">
            CONTACT
          </a>
          <a className="nav-link text-white" href="#">
            BLOG
          </a>
        </div>
      </div>
    </nav>
  );
}
