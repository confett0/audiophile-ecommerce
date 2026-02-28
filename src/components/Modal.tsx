export default function Modal({ closeModal, children, isCart } : ModalProps) {
  return (
    <>
      <div className="modal-wrap" onClick={closeModal}></div>
      <div
        className={
          isCart
            ? "modal-content cart-modal"
            : "modal-content confirmation-modal"
        }
      >
        {children}
      </div>
    </>
  );
}

type ModalProps = {
  closeModal: () => void;
  children: React.ReactNode;
  isCart?: boolean;
}
