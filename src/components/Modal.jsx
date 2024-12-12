import PropTypes from "prop-types";

export default function Modal({ closeModal, children, isCart }) {
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

Modal.propTypes = {
  closeModal: PropTypes.func,
  children: PropTypes.element,
  isCart: PropTypes.bool,
};
