import React, { useState } from "react";
import "./Checkbox.css";

const MultiCheckbox = () => {
  const [checkboxes, setCheckboxes] = useState({
    option1: false,
    option2: false,
    option3: false,
  });

  const handleChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes({
      ...checkboxes,
      [name]: checked, //체크된 값 업데이트
    });
  };

  const options = [
    { name: "option1", label: "Option 1" },
    { name: "option2", label: "Option 2" },
    { name: "option3", label: "Option 3" },
  ];

  return (
    <div className="checkbox-container">
      {options.map((option) => (
        <label key={option.name}>
          <input
            type="checkbox"
            name={option.name}
            checked={checkboxes[option.name]}
            onChange={handleChange}
          />
          {option.label}
        </label>
      ))}

      {/* <div>
        <h3>Selected Options:</h3>
        {Object.keys(checkboxes)
          .filter((key) => checkboxes[key])
          .map((key) => (
            <p key={key}>{key}</p>
          ))}
      </div> */}
    </div>
  );
};

export default MultiCheckbox;
