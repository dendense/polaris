import React from "react";
import { Component } from "react";
import Header from "parts/Header";
import Sidebar from "parts/Sidebar";

export default class TimelinePage extends Component {
  render() {
    return (
      <div className="d-flex wrapper">
        <div className="" id="left-sidebar">
          <Sidebar />
        </div>
        <div className="" id="right-content">
          <Header />
        </div>
      </div>
    );
  }
}
