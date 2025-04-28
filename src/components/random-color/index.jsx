import React, { useEffect, useState } from "react";

export default function RandomColor() {
  const [color, setColor] = useState("#000000");
  const [typeOfColor, setTypeOfColor] = useState("hex");

  const randomColorUtil = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleRandomcHexColor = () => {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[randomColorUtil(letters.length)];
    }
    setColor(color);
  };
  const handleRandomcRgbColor = () => {
    let g = randomColorUtil(256);
    let b = randomColorUtil(256);
    let r = randomColorUtil(256);
    setColor(`rgb(${r},${g},${b})`);
  };

  useEffect(() => {
    if (typeOfColor === "hex") handleRandomcHexColor();
    else handleRandomcRgbColor();
  }, [typeOfColor]);

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
        <button
          onClick={
            typeOfColor === "hex"
              ? handleRandomcHexColor
              : handleRandomcRgbColor
          }
        >
          Generate Random Color
        </button>
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
