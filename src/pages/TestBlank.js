import React, { Component } from "react";
import Button from "elements/Button";
import Modal from "elements/ModalTest";
import ModalTest from "elements/ModalTest";

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
        <ModalTest></ModalTest>
      </div>
    );
  }
}
