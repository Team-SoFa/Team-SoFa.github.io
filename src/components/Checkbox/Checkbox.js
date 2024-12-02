import React, { useState } from "react";
import "./Checkbox.css";

const Checkbox = () => {
  const [checked, setChecked] = useState(false); // 체크박스 상태

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="checkbox-container">
      <label>
        <input type="checkbox" checked={checked} onChange={handleChange} />
        content
      </label>
    </div>
  );
};

export default Checkbox;
