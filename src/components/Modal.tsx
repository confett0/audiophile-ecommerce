import styles from "./Modal.module.css";
import { useEffect } from "react";

export default function Modal({
  closeModal,
  children,
  isCart,
  isOpen,
}: ModalProps) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, closeModal]);
  return (
    <div
      className={`${styles.overlay} ${isOpen && styles.modalOpen}`}
      onClick={closeModal}
    >
      <div
        className={
          isCart
            ? `${styles.modal} cart-modal`
            : `${styles.modal} confirmation-modal`
        }
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

type ModalProps = {
  closeModal: () => void;
  children: React.ReactNode;
  isCart?: boolean;
  isOpen: boolean;
};
