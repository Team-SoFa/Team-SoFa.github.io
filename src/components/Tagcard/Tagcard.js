import React from "react";
import "./Tagcard.css";

const Tagcard = ({ tag, onRemove }) => {
  return (
    <div className="tag-card">
      <span>{tag}</span>
      <button className="remove-btn" onClick={onRemove}>
        x
      </button>
    </div>
  );
};

export default Tagcard;
