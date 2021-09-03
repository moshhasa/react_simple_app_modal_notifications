import React from "react";
import ReactDom from "react-dom";
import Button from "./Button";
import Card from "./Card";
import styles from "./Modal.module.css";

const Backdrop = ({ closeModal }) => (
  <div className={styles.backdrop} onClick={closeModal}></div>
);

const ModalOverlay = ({ title, children, closeModal }) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{title}</h2>
      </header>
      <div className={styles.content}>{children}</div>
      <footer className={styles.actions}>
        <Button onClick={closeModal}>Okay</Button>
      </footer>
    </Card>
  );
};

const Modal = ({ title, children, closeModal }) => {
  return (
    <>
      {ReactDom.createPortal(
        <Backdrop closeModal={closeModal} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <ModalOverlay
          closeModal={closeModal}
          title={title}
          children={children}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default Modal;
