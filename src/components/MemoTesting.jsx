import React, { useEffect, useMemo, useState } from "react";

const MemoTesting = () => {
  const [count, setCount] = useState(0);
  const [multiply, setMultiply] = useState(1);

  const multiplyNumber = useMemo(() => {
    return count * multiply;
  }, [count]);

  const handleSelectOption = (e) => {
    setMultiply(e.target.value);
  };

  const cleanValues = () => {
    setCount(0);
    setMultiply(1);
  };

  useEffect(() => {
    console.log("Componente Montado");
  }, []);

  return (
    <div>
      <h3>Memo Testing:</h3>
      <p>
        {count} * {multiply} = {multiplyNumber}
      </p>
      <div>
        <p>Multiplicador:</p>
        <select onChange={handleSelectOption}>
          <option value="" disabled>
            Selecione uma opção
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
      <button onClick={() => setCount(count + 1)}>Incrementar + 1</button>
      <button onClick={cleanValues}>Zerar Valores</button>
    </div>
  );
};

export default MemoTesting;
