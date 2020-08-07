import React, { Component } from "react";
import Button from "elements/Button";

import FrontPage from "parts/FrontGrid";
import IconText from "parts/IconText";
import ModalLogin from "elements/ModalLogin";

import dataGrid from "json/homeData";

export default class LandingPage extends Component {
  //Deklarasi Modal state (propsType : bool)
  state = { show: false };
  showModal = () => {
    this.setState({ show: true });
  };
  hideModal = () => {
    this.setState({ show: false });
  };
  //Deklarasi Modal state (propsType : bool)

  render() {
    console.log(this.props);
    return (
      <>
        <section className="container-flex">
          <div className="login-container">
            <div className="log-btn">
              <ModalLogin
                buttonLabel="User Access"
                className="modal-dialog-centered"
              ></ModalLogin>
            </div>
          </div>
          <div className="faq-container">
            <div className="faq-btn">
              <Button
                type="button"
                className="btn btn-warning text-black"
                href={`/pages/`}
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
      </>
    );
  }
}
