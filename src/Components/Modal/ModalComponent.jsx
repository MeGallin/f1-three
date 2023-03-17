import React, { useState } from 'react';
import './ModalComponent.css';

const ModalComponent = (props, { className }) => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = (e) => {
    e.stopPropagation();
    setShowModal(true);
  };
  return (
    <>
      {showModal ? (
        <div>
          <div
            title="Close modal"
            className={showModal ? 'modal-overlay' : null}
            onClick={() => setShowModal(false)}
          />
          <div className="modal-wrapper">
            {props.content}
            <button
              onClick={() => setShowModal(false)}
              className="confirmation"
            >
              {props.closeButtonTitle}
            </button>
          </div>
        </div>
      ) : null}
      <div
        title="Click to view drivers details"
        onClick={(e) => handleShowModal(e)}
        className={`${className} modal-btn`}
      >
        {props.openButtonTitle}
      </div>
    </>
  );
};

export default ModalComponent;
