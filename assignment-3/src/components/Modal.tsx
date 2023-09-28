import React from 'react';
import { createPortal } from 'react-dom';

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  className: string;
  children: React.ReactNode;
}

function Modal({ isOpen, onClose, className, children }: IModalProps) {
  return createPortal(
    <section className={`modal ${isOpen && 'active'}`}>
      <div className={`modal_wrapper ${className}`}>
        <button className="modal_btn_close" onClick={onClose}>
          ❌
        </button>
        {children}
      </div>
    </section>,
    document.querySelector('body') as HTMLBodyElement
  );
}

export default Modal;
