import React from "react";
import { createPortal } from "react-dom";

function Modal({ isOpen, onClose, className, children }) {
	return createPortal(
		<section className={`modal ${isOpen && "active"}`}>
			<div className={`modal_wrapper ${className}`}>
				<button className="modal_btn_close" onClick={onClose}>
					❌
				</button>
				{children}
			</div>
		</section>,
		document.querySelector("body")
	);
}

export default Modal;
