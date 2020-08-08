import React from "react";
import { Component } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
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
              <h4>One Step Closer Into The Journey</h4>
              <FormGroup>
                <Label for="examplePassword">
                  We have sent to your mail, enter the verification code below :
                </Label>
                <Input
                  type="text"
                  name="verifcode"
                  id="examplePassword"
                  placeholder="6 digits verification code"
                  bsSize="lg"
                  style={{ textAlign: "center" }}
                />
              </FormGroup>
              <span>
                Still haven't received the verification code?{" "}
                <Button type="link">Click Here!</Button>
              </span>
            </div>
            <div className="card-footer">
              <Button
                type="button"
                className="btn btn-primary"
                href={`/pages/`}
              >
                Start My Journey!
              </Button>
            </div>
          </div>
        </section>
      </Fade>
    );
  }
}
