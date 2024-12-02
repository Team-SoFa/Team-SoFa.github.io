// src/components/Modal.js
import React, { useRef } from "react";
import "./Modal.css";
import { OutsideClick } from "../OutsideClick";

const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef(null);
  const [isActive, setIsActive] = OutsideClick(modalRef, isOpen);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" ref={modalRef}>
      <div className="modal">
        <button className="modal-close" onClick={onClose}>
          X
        </button>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
