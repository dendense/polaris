import React, { Component } from "react";
import HeaderDeny from "./HeaderDeny";
import ContentDeny from "./ContentDeny";
import SidebarDeny from "./SidebarDeny";

import posts from "json/homeData";

export default class DenyComponent extends Component {
  render() {
    return (
      <div className="container-fluid d-flex timeline-deny" id="fullscreen">
        {/* Ini Konten Kiri */}
        <div className="konten-kiri fixed-top">
          {/* Disini akan dipanggil Sidebar */}
          <SidebarDeny />
        </div>
        {/* Ini Konten Kanan */}
        <div className="container-fluid konten-kanan" id="fullscreen-sm">
          {/* Disini akan dipanggil Header */}
          <HeaderDeny JudulHeader="Ini Judul Website" />
          {/* Disini akan dipanggil Content */}
          <ContentDeny data={posts.dataPostDeny} />
        </div>
      </div>
    );
  }
}
