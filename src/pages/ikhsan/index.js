import React, { Component } from "react";
import "./index.scss";

export default class IkhsanComponent extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="kiri">
          <div>
            <h1>sidebar</h1>
          </div>
          {/* sidebar */}
        </div>
        <div className="kanan">
          <div>
            <h1>header</h1>
          </div>
          {/* header */}
          <div>
            <h1>body</h1>
          </div>
          {/* body */}
        </div>
      </div>
    );
  }
}
