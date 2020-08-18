import React, { Component } from "react";

export default class SaefulComponent extends Component {
  render() {
    return (
      <div className="container-fluid d-flex">
        <div className="konten-kiri">
          <div className="konten-sidebar">
            <p>sidebar</p>
          </div>
        </div>
        <div className="container-fluid" id="fullscreen">
          <div className="konten-header">
            <p>header</p>
          </div>
          <div className="konten-body">
            <p>Body</p>
          </div>
        </div>
      </div>
    );
  }
}
