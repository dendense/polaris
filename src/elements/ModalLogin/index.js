import React, { useState } from "react";
import propTypes from "prop-types";
import LoginTabs from "parts/LoginTabs";
import Button from "elements/Button";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  Form,
  FormGroup,
} from "reactstrap";

const ModalTest = (props) => {
  const { buttonLabel, className } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button
        type="button"
        className="btn btn-primary text-black"
        onClick={toggle}
      >
        {buttonLabel}
      </Button>
      <Modal
        isOpen={modal}
        toggle={toggle}
        className={className}
        backdrop="static"
        keyboard={false}
      >
        <ModalHeader toggle={toggle}>User Access</ModalHeader>
        <ModalBody>
          <LoginTabs></LoginTabs>
        </ModalBody>
        <ModalFooter>
          <Button type="link">Forgot Password?</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
export default ModalTest;
