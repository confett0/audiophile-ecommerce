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
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, closeModal]);
  return (
    <div
      className={`modal-overlay ${isOpen ? "open" : ""}`}
      onClick={closeModal}
    >
      <div
        className={
          isCart
            ? "modal-content cart-modal"
            : "modal-content confirmation-modal"
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
