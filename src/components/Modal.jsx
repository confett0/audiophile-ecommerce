export default function Modal({closeModal, children, isCart}) {
    return (
        <>
        <div className="modal-wrap" onClick={closeModal}></div>
        <div className={isCart? "modal-content cart-modal" : "modal-content confirmation-modal"}>
            {children}
        </div>
        </>
    )
}