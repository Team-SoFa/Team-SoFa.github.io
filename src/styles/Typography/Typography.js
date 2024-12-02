import React from "react";
import PropTypes from "prop-types";
import "./Typography.css";

const Typography = ({ variant, children, className, ...props }) => {
  const classes = `${variant} ${className || ""}`.trim(); // Trim to remove extra spaces
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

// PropTypes로 허용된 variant 리스트 명시
Typography.propTypes = {
  variant: PropTypes.oneOf([
    "page-title",
    "pop-up-title",
    "page-description",
    "button-label",
    "button-label-light",
    "body-text",
    "input-field-label",
  ]).isRequired,
  className: PropTypes.string,
};

export default Typography;
