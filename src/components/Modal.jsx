export default function Modal({closeModal, children}) {
    return (
        <>
        <div className="modal-wrap" onClick={closeModal}></div>
        <div className="modal-content">
            {children}
        </div>
        </>
    )
}