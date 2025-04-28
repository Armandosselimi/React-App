import React, { useState } from "react";

export default function RandomColor() {
  const [color, setColor] = useState("#000000");
  const [typeOfColor, setTypeOfColor] = useState("hex");

  function randomColor(colorType) {
    if (colorType === "hex") {
      let letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    } else if (colorType === "rgb") {
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);
      let r = Math.floor(Math.random() * 256);
      let color = `rgb(${r},${g},${b})`;
      return color;
    }
  }

  const handleRandomColor = () => {
    setColor(() => randomColor(typeOfColor));
  };
  return (
    <div
      style={{
        height: "100vh",
        display: "grid",
        placeItems: "center",
        background: color,
      }}
    >
      <div>
        <button onClick={handleRandomColor}>Generate Random Color</button>
        <button
          onClick={() => setTypeOfColor("hex")}
          disabled={typeOfColor === "hex"}
        >
          Create HEX Color
        </button>

        <button
          onClick={() => setTypeOfColor("rgb")}
          disabled={typeOfColor === "rgb"}
        >
          Create RGB Color
        </button>
      </div>
      <div style={{ color: "#fff", fontSize: "5rem", fontWeight: "bold" }}>
        {typeOfColor.toUpperCase()} Color
      </div>
      <div style={{ color: "#fff", fontSize: "5rem", fontWeight: "bold" }}>
        {color}
      </div>
    </div>
  );
}
