import React, { Component } from "react";
import Button from "elements/Button";
import ModalLogin from "elements/ModalLogin";
import LoginTabs from "parts/LoginTabs";

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
        <LoginTabs></LoginTabs>
      </div>
    );
  }
}
