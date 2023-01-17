import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
const Backdrop = function (props) {
  return <div className={styles.backdrop} onClick={props.onClick}></div>;
};
const ModalOverlay = function (props) {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

function Modal(props) {
  const portalElement = document.getElementById("overlays");
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onHideCart} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
}

export default Modal;
