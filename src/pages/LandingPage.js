import React, { Component } from "react";
import Button from "elements/Button";

import FrontPage from 'parts/FrontGrid'
import IconText from 'parts/IconText';
import Modal from 'elements/Modal'

import dataGrid from 'json/homeData';

export default class LandingPage extends Component {
  state = { show: false };
  showModal = () => {
    this.setState({ show: true });
  };
  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    console.log(this.props);
    return (
      <section className="container-grid">
        <div className="login-container">
          <div className="log-btn">
            <Button
              type="button"
              className="btn btn-primary text-white"
            >
              Log In / Sign Up
            </Button>
          </div>
        </div>
        <div className="faq-container">
          <div className="faq-btn">
            <Button
              type="button"
              className="btn btn-warning text-black"
              href={`/properties/`}
            >
              Terms &amp; Conditions
            </Button>
          </div>
        </div>
        <div className="icon-container">
          <div className="icon-btn">
            <IconText />
          </div>
        </div>
        <FrontPage data={dataGrid.homePict} />
      </section>
    );
  }
}
