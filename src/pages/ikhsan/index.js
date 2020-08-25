import React, { Component } from "react";
import "./index.scss";
import SidebarIkhsan from "./SidebarIkhsan";
import HeaderIkhsan from "./HeaderIkhsan";
import BodyIkhsan from "./BodyIkhsan";

export default class IkhsanComponent extends Component {
  render() {
    return (
      <>
        <div className="container-fluid d-flex" id="fullscreen">
          <div className="konten-side fixed-top">
            {/* sidebar */}
            <SidebarIkhsan />
          </div>
          <div className="container-fluid konten-body" id="fullscreen-sm">
            {/* Header */}
            <HeaderIkhsan />
            {/* Body */}
            <BodyIkhsan />
          </div>
        </div>
      </>
    );
  }
}
