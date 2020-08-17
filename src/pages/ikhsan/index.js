import React, { Component } from "react";
import "./index.scss";

export default class IkhsanComponent extends Component {
  render() {
    return (
      <div className="container-fluid d-flex timeline-ikhsan" id="fullscreen">
        <div className="kiri">
          <div className="sidebar">
            <h1>sidebar</h1>
          </div>
        </div>
        <div className="container-fluid" id="fullscreen">
          <div className="header">
            <h1>header</h1>
          </div>
          <div className="body">
            <h1>body</h1>
          </div>
        </div>
      </div>
    );
  }
}
