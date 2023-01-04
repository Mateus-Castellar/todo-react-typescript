import React from "react";
import styles from "./Modal.module.css";

type Props = {
  children: React.ReactNode;
};

const Modal = ({ children }: Props) => {
  return (
    <div id="modal">
      <div className={styles.fade}></div>

      <div>
        <h2 className={styles.modal}>{children}</h2>
      </div>
    </div>
  );
};

export default Modal;
