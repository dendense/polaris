import React, { Component } from "react";
import HeaderSaeful from "./HeaderSaeful";
import SidebarSaeful from "./SidebarSaeful";
import BodySaeful from "./BodySaeful";
import "./index.scss";
import fotopertama from "assets/images/1.jpg";

import posts from "json/homeData";

export default class SaefulComponent extends Component {
  render() {
    return (
      <>
        <div className="container-fluid d-flex" id="fullscreen">
          {/* konten */}
          <div className="konten-side fixed-top">
            {/* sidebar */}
            <SidebarSaeful foto={fotopertama} />
          </div>
          <div className="container-fluid konten-body" id="fullscreen-sm">
            {/* header */}
            <HeaderSaeful judulHeader="SAEFUL" />
            {/* body */}
            <BodySaeful data={posts.DataPostSaeful} />
          </div>
        </div>
      </>
    );
  }
}
