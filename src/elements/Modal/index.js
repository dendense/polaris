import React from 'react'
import Button from 'elements/Button';

const Modal = ({ handleClose, show, children, headModal }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  
  return (
    <div
      className={showHideClassName + `fade`}
      id="staticBackdrop"
      data-backdrop="static"
      data-keyboard="false"
      tabindex="-1"
      role="dialog"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">{headModal}</h5>
          </div>
        </div>
      </div>
      {/* {{children}
        <Button
          type="button"
          className="btn btn-info"
          onClick={handleClose}
          href={``}
        >
          Close
        </Button>} */}
    </div>
    
  );
}

export default Modal
