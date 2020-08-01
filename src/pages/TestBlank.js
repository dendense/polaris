import React, { Component } from "react";
import Button from "elements/Button";
import Modal from "elements/Modal";

export default class TimeLine extends Component {
  state = { show: false };
  showModal = () => {
    this.setState({ show: true });
  };
  hideModal = () => {
    this.setState({ show: false });
  };
  render() {
    return (
      <div>
        <h1>Modal Button</h1>
        <Modal
          show={this.state.show}
          handleClose={this.hideModal}
          headModal="Sign Up"
        >
          <p>Ini Modal Login</p>
        </Modal>
        <Button
          type="button"
          className="btn btn-primary text-black"
          data-toggle="modal"
          data-target="#staticBackdrop"
          onClick={this.showModal}
          href={``}
        >
          Log In / Sign Up
        </Button>
      </div>
    );
  }
}
