import React, { useState } from "react";

const SimpleCounter = () => {
  const [counter, setCounter] = useState(0);

  const changeValue = (e) => {
    if (e.target.value === "decrement") {
      setCounter((prev) => prev - 1);
    } else if (e.target.value === "increment") {
      setCounter((prev) => prev + 1);
    } else {
      setCounter(0);
    }
  };

  return (
    <div>
      <h3>Simple Counter:</h3>
      {counter}
      <div style={{ marginTop: "10px" }}>
        <button onClick={changeValue} value={"decrement"}>
          -
        </button>
        <button onClick={changeValue} value={"increment"}>
          +
        </button>
        <button onClick={changeValue} value={"clean"} style={{ width: "50px" }}>
          Zerar
        </button>
      </div>
    </div>
  );
};

export default SimpleCounter;
