import React, { useState } from "react";
import "./Accordion.css";
// import openIcon from "example.png";
// import closeIcon from "example.png";

const Accordion = ({ title, content, type }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion ${type}`}>
      <div className="accordion-header" onClick={toggleAccordion}>
        <p>{title}</p>
        <img
          src={isOpen ? "example.png" : "example.png"}
          alt={isOpen ? "Open" : "Close"}
          className="accordion-icon"
        />
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default Accordion;
