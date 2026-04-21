import styles from "./Modal.module.css";
import { useEffect, useRef } from "react";

export default function Modal({
  closeModal,
  children,
  isCart,
  isOpen,
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  // add focus trap

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null;
  return (
    <div className={`${styles.overlay} ${styles.open}`} onClick={closeModal}>
      <div
        role="dialog"
        ref={modalRef}
        aria-modal="true"
        aria-labelledby="modal-title"
        className={`${styles.modal} ${isCart ? styles.cartModal : styles.confirmationModal}`}
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
