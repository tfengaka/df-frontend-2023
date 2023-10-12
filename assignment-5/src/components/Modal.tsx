import React from 'react';

interface IModalProps {
  className?: string;
  onClose: () => void;
  children: React.ReactNode;
}

function Modal({ className, onClose, children }: IModalProps) {
  return (
    <div className="flex justify-center fixed inset-0 w-full h-full bg-black bg-opacity-50 z-50 pt-[5%]">
      <div className={`relative p-6 w-full h-full bg-white rounded-lg ${className}`}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 cursor-pointer transition-colors hover:bg-primary hover:bg-opacity-10 p-1 rounded-full"
        >
          ❌
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
