import React from "react";// File: components/Keypad.js

function Keypad() {
  const handleChange = () => {
    console.log("Entering password...");
  };

  return (
    <input
      type="password"
      onChange={handleChange}
      placeholder="Enter password"
    />
  );
}

export default Keypad; 