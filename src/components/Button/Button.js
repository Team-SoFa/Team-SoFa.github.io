import React from "react";
import "./Button.css";

const Button = ({ label, onClick, className, Icon, imgSrc, imgAlt }) => {
  return (
    <button className={`btn ${className}`} onClick={onClick}>
      <>
        {Icon && (
          <span className="btn-icon" aria-label={imgAlt || "button icon"}>
            <Icon />
          </span>
        )}
        {imgSrc && (
          <img
            className="btn-img"
            src={imgSrc}
            alt={imgAlt || "button image"}
          />
        )}
        {label && <span>{label}</span>}
      </>
    </button>
  );
};

export default Button;
