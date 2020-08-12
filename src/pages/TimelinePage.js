import React from "react";
import { Component } from "react";
import Header from "parts/Header";

import dataAvatar from "json/homeData";

export default class TimelinePage extends Component {
  render() {
    return (
      <div>
        <Header data={dataAvatar.avatarImg} />
      </div>
    );
  }
}
