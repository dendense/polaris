import React, { useState } from "react";
import Button from "elements/Button";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

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
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>User Access</ModalHeader>
        <ModalBody></ModalBody>
        <ModalFooter>
          <Button
            type="button"
            className="btn btn-primary text-black"
            onClick={toggle}
          >
            Do Something
          </Button>{" "}
          <Button
            type="button"
            className="btn btn-secondary text-black"
            onClick={toggle}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
export default ModalTest;
