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
          <p>Timeline</p>
          <ul className="list-unstyled" id="timelineSubmenu">
            <li>
              <a href="/timeline">Latest</a>
            </li>
            <li>
              <a href="/timeline">Hot</a>
            </li>
            <li>
              <a href="/timeline">Top</a>
            </li>
            <li>
              <a href="/timeline">Top</a>
            </li>
          </ul>
        </li>
        <li>
          <p>Filter</p>
          <ul className="list-unstyled" id="filterSubmenu">
            <li>
              <a href="/timeline">Category</a>
            </li>
            <li>
              <a href="/timeline">Cities</a>
            </li>
          </ul>
        </li>
        <li>
          <p>Contributor</p>
        </li>
      </ul>
    </>
  );
}
