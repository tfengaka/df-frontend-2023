'use client';

import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface IModalProps {
  isOpen: boolean;
  className: string;
  onClose: () => void;
  children: React.ReactNode;
}

function Modal({ isOpen, className, onClose, children }: IModalProps) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('Finished load modal');
  }, []);

  return createPortal(
    <section
      className={`flex justify-center fixed inset-0 w-full h-full bg-black bg-opacity-50 z-50 pt-[5%] ${
        isOpen ? 'visible' : 'invisible'
      }`}
    >
      <div className={`relative p-6 w-full h-full bg-white rounded-lg ${className}`}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 cursor-pointer transition-colors hover:bg-primary hover:bg-opacity-10 p-1 rounded-full"
        >
          ❌
        </button>
        {children}
      </div>
    </section>,
    document.querySelector('body') as HTMLBodyElement
  );
}

export default Modal;
