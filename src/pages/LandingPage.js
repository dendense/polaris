import React, { Component } from "react";
import Button from "elements/Button";

import FrontPage from 'parts/FrontGrid'
import TestGrid from 'parts/TestGrid'
import landingPage from 'json/landingPage.json'

export default class LandingPage extends Component {
  render() {
      console.log(this.props);
    return (
      <FrontPage data={landingPage.mostPicked}/>
    );
  }
}
