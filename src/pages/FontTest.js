import React from "react";
import Typography from "../styles/Typography/Typography";
import "../styles/Typography/Typography.css";

const variants = [
  { name: "page-title", label: "Page Title" },
  { name: "pop-up-title", label: "Pop Up Title" },
  { name: "page-description", label: "Page Description" },
  { name: "button-label", label: "Button Label (Bold)" },
  { name: "button-label-light", label: "Button Label (Light)" },
  { name: "body-text", label: "Body Text" },
  { name: "input-field-label", label: "Input Field Label" },
];

const App = () => {
  return (
    <div>
      {variants.map(({ name, label }) => (
        <Typography key={name} variant={name}>
          {label}
        </Typography>
      ))}
    </div>
  );
};

export default App;
