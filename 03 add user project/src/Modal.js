import React from "react";
import ReactDOM from "react-dom";
function Modal(props) {
  const myModal = document.querySelector("#myModal");
  return ReactDOM.createPortal(
    <div>
      <div className="back-drop"></div>
      <div className="modal-content">
        modal content
        <button onClick={props.onClose}> close </button>
      </div>
    </div>,
    myModal
  );
}

export default Modal;
