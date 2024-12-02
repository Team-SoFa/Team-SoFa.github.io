import React, { useState } from "react";
import "./Toggle.css";

function Toggle() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled((prev) => !prev);
  };

  return (
    <div
      onClick={handleToggle}
      className={`toggle-case ${isToggled ? "toggled" : ""}`}
    >
      <div className="toggle-circle" />
    </div>
  );
}

export default Toggle;
