import React, { useState } from "react";

const ButtonChangeState = () => {
  const [message, setMessage] = useState("Mensagem Inicial");

  return (
    <div>
      <p style={{ marginBottom: "10px" }}>{message}</p>
      <button
        onClick={() => setMessage("Mensagem 01")}
        style={{ marginLeft: "10px" }}
      >
        Mensagem 01
      </button>
      <button
        onClick={() => setMessage("Mensagem 02")}
        style={{ marginLeft: "10px" }}
      >
        Mensagem 02
      </button>
      <button
        onClick={() => setMessage("Mensagem 03")}
        style={{ marginLeft: "10px" }}
      >
        Mensagem 03
      </button>
      <button
        onClick={() => setMessage("Mensagem 04")}
        style={{ marginLeft: "10px" }}
      >
        Mensagem 04
      </button>
    </div>
  );
};

export default ButtonChangeState;
