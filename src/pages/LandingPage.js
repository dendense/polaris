import React, { Component } from "react";
import Button from "elements/Button";

import FrontPage from 'parts/FrontGrid'
import TestGrid from 'parts/IconText'
import dataGrid from 'json/homeData';

export default class LandingPage extends Component {
  render() {
      console.log(this.props);
    return (
      <FrontPage data={dataGrid.homePict}/>
    );
  }
}
