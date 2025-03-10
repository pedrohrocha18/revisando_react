import React, { useMemo, useState } from "react";

const MemoTestingTwo = () => {
  const [number, setNumber] = useState(0);

  const listNumbers = useMemo(() => {
    const numbers = [2, 3, 4, 8, 9];

    const numberFiltered = numbers.filter((num) => num === number);

    return numberFiltered;
  }, [number]);

  return (
    <div>
      <h3>MemoTestingTwo</h3>
      <input
        type="number"
        style={{ width: "200px" }}
        placeholder="Digite um número de 1 a 10"
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      {listNumbers.length === 0 ? <p>Tente Novamente!</p> : <p>Acertou!</p>}
    </div>
  );
};

export default MemoTestingTwo;
