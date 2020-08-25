import React, { Component } from "react";
import HeaderSaeful from "./HeaderSaeful";
import SidebarSaeful from "./SidebarSaeful";
import BodySaeful from "./BodySaeful";
import "./index.scss";

export default class SaefulComponent extends Component {
  render() {
    return (
      <>
        <div className="container-fluid d-flex" id="fullscreen">
          {/* konten */}
          <div className="konten-side fixed-top">
            {/* sidebar */}
            <HeaderSaeful judulheader="ini judul header" />
          </div>
          <div className="container-fluid konten-body" id="fullscreen-sm">
            {/* header */}
            <SidebarSaeful />
            {/* body */}
            <BodySaeful />
          </div>
        </div>
      </>
    );
  }
}
