import styles from "./Modal.module.css";
import { useEffect, useRef } from "react";

export default function Modal({
  closeModal,
  children,
  isCart,
  isOpen,
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const prevActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden"; // block page scroll

    prevActiveElement.current = document.activeElement as HTMLElement; // save previous active element
    modalRef.current?.focus();

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
      prevActiveElement.current?.focus(); // move focus to previous active element when closing modal
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null;
  return (
    <div className={`${styles.overlay} ${styles.open}`} onClick={closeModal}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        ref={modalRef}
        tabIndex={-1}
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
