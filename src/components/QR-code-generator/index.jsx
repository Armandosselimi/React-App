import React, { useState } from "react";
import QRCode from "react-qr-code";

export default function QrCodeGEnerator() {
  const [input, setInput] = useState("");
  const [qrInput, setQrInput] = useState("");

  const handleSubmit = () => {
    setQrInput(input);
    setInput("");
  };
  return (
    <div
      style={{
        height: "100vh",
        display: "grid",
        placeItems: "center",
        alignContent: "center",
        gap: "2rem",
      }}
    >
      <h1>QR Code Generator</h1>

      <input
        type='text'
        name='qr-code'
        id='qr-code'
        placeholder='Type something...'
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button
        disabled={input?.trim() === ""}
        onClick={handleSubmit}
      >
        Generate
      </button>

      <QRCode
        size={400}
        value={qrInput}
      />
    </div>
  );
}
