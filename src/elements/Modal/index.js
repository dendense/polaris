import React from "react";
import Button from "elements/Button";
import "./index.css";

const Modal = ({ handleClose, show, children, headModal }) => {
  const showHideClassName = show ? "modal d-block" : "modal d-none";

  return (
    <div
      className={showHideClassName}
      id="static"
      tabindex="-1"
      role="dialog"
      aria-labelledby="LoginModal"
      aria-hidden="true"
      data-backdrop="static"
      data-keyboard="false"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="static">
              {headModal}
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={handleClose}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">{children}</div>
          <div class="modal-footer">
            <Button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={handleClose}
            >
              Close
            </Button>
            <Button type="button" className="btn btn-info">
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
