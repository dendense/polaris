import React from "react";
import { Component } from "react";
import Button from "elements/Button";
import { InputText } from "elements/Form/InputText";

import IconText from "parts/IconText";
import Fade from "react-reveal/Fade";

export default class VerificationPage extends Component {
  render() {
    console.log(this.props);
    return (
      <Fade>
        <section className="d-flex vh-100 justify-content-center align-items-center">
          <div class="card text-center">
            <div class="card-header">
              <IconText />
            </div>
            <div class="card-body">
              <h4>Lorem ipsum dolor sit.</h4>
              <span>
                We have sent to your mail, enter the verification code below :
              </span>
            </div>
          </div>
        </section>
      </Fade>
    );
  }
}
