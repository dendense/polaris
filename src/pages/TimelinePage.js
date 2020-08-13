import React from "react";
import { Component } from "react";
import Header from "parts/Header";
import Sidebar from "parts/Sidebar";
import Main from "parts/Main";

export default class TimelinePage extends Component {
  render() {
    return (
      <div className="wrapper d-flex">
        <nav className="bg-dark text-white" id="left-sidebar">
          <Sidebar />
        </nav>
        <div id="right-content">
          <Header />
          <Main />
        </div>
      </div>
    );
  }
}
