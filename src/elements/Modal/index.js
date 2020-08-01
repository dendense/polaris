import React from "react";
import Button from "elements/Button";
import "./index.css";

const Modal = ({ handleClose, show, children, headModal }) => {
  const showHideClassName = show ? "modal d-block" : "modal d-none";

  return (
    <div
      className={showHideClassName}
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      data-backdrop="static"
      data-keyboard="false"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
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
