import React from "react";

export default function Sidebar(props) {
  return (
    <nav>
      <div>
        <h3>POLARIS</h3>
      </div>
      <ul>
        <li className="active">
          <a
            href="#timelineSubmenu"
            data-toggle="collapse"
            aria-expanded="false"
            className="dropdown-toggle"
          >
            Timeline
          </a>
          <ul className="collapse list-unstyled" id="timelineSubmenu">
            <li>
              <a href="#">Latest</a>
            </li>
            <li>
              <a href="#">Hot</a>
            </li>
            <li>
              <a href="#">Top</a>
            </li>
          </ul>
        </li>
        <li>
          <a
            href="#filterSubmenu"
            data-toggle="collapse"
            aria-expanded="false"
            className="dropdown-toggle"
          >
            Filter
          </a>
          <ul className="collapse list-unstyled" id="filterSubmenu">
            <li>
              <a href="#">Category</a>
            </li>
            <li>
              <a href="#">Cities</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
