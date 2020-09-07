import React, { Component } from "react";
import "./index.scss";
import SidebarIkhsan from "./SidebarIkhsan";
import HeaderIkhsan from "./HeaderIkhsan";
import BodyIkhsan from "./BodyIkhsan";
import foto from "pages/ikhsan/1.jpg";

export default class IkhsanComponent extends Component {
  render() {
    return (
      <>
        <div className="container-fluid d-flex" id="fullscreen">
          <div className="konten-side fixed-top bg-dark">
            {/* sidebar */}
            <SidebarIkhsan foto={foto} />
          </div>
          <div className="container-fluid konten-body" id="fullscreen-sm">
            {/* Header */}
            <HeaderIkhsan judulHeader="IKHSAN" />
            {/* Body */}
            <BodyIkhsan />
          </div>
        </div>
      </>
    );
  }
}
