import React, { Component } from "react";
import Header from "parts/Header";
import Sidebar from "parts/Sidebar";
import Main from "parts/Main";

import timelineJson from "../json/homeData.json";

export default class TimelinePage extends Component {
  render() {
    return (
      <div className="wrapper d-flex">
        <div className="" id="right-content">
          <Header />
          <Main data={timelineJson.userDetails} />
        </div>
      </div>
    );
  }
}
