import React from "react";
import { Component } from "react";
import Button from "elements/Button";
import IconText from "parts/IconText";

export default class VerificationPage extends Component {
  render() {
    console.log(this.props);
    return (
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
    );
  }
}
