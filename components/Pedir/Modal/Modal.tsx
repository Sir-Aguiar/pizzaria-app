import React from "react";
import styles from "./Modal.module.css";
import { AiFillCloseCircle } from "react-icons/ai";

const Modal: React.FC<ModalProps> = ({ onClose, food }) => {
  return (
    <div
      className={styles.backdrop}
      onClick={(e) => {
        onClose(false);
        e.stopPropagation();
      }}
    >
      <div className={`${styles.modal}`}>
        <p className={styles.tip}>Clique na foto para adicionar ao carrinho</p>
        <p className={styles.foodDes}>{food.description}</p>
        <AiFillCloseCircle className={styles.closeIcon} />
      </div>
    </div>
  );
};

export default Modal;
