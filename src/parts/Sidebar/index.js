import React from "react";
import Button from "elements/Button";

import "./index.scss";

export default function Sidebar(props) {
  return (
    <>
      <div className="sidebar-header">
        <h3>POLARIS</h3>
      </div>
      <ul className="list-unstyled components">
        <li className="active">
          <a>Timeline</a>
          <ul className="list-unstyled" id="timelineSubmenu">
            <li>
              <a href="#">Latest</a>
            </li>
            <li>
              <a href="#">Hot</a>
            </li>
            <li>
              <a href="#">Top</a>
            </li>
            <li>
              <a href="#">Top</a>
            </li>
          </ul>
        </li>
        <li>
          <a>Filter</a>
          <ul className="list-unstyled" id="filterSubmenu">
            <li>
              <a href="#">Category</a>
            </li>
            <li>
              <a href="#">Cities</a>
            </li>
          </ul>
        </li>
        <li>
          <a>Contributor</a>
        </li>
      </ul>
    </>
  );
}
