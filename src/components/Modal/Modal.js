import React from 'react';
import './Modal.scss';

const Modal = ({ isOpen, onClose, onConfirm, children }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                {children}
                <div className="modal-buttons">
                    <button onClick={onConfirm}>Yes</button>
                    <button onClick={onClose}>Back to safety</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
