import React from "react";
import "../style/textInput.css";

export default function TextInput(props) {
  const { placeholder, isValid } = props;
  console.log(props);
  return (
    <div
      className="input-container"
      style={isValid ? null : { color: "#F24E1E" }}
    >
      <input type="text" placeholder={placeholder} className="text-input" />
    </div>
  );
}
