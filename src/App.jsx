import { useCallback, useState } from "react";
import ButtonChangeState from "./components/ButtonChangeState";
import Card from "./components/Card";
import EffectTest from "./components/EffectTest";
import ListRendering from "./components/ListRendering";
import MemoTesting from "./components/MemoTesting";
import MemoTestingTwo from "./components/MemoTestingTwo";
import SimpleCounter from "./components/SimpleCounter";
import ButtonClick from "./components/ButtonClick";

function App() {
  const [counter, setCounter] = useState(0);

  const incrementNumber = useCallback(() => {
    setCounter((prev) => prev + 1);
  }, []);


  return (
    <div>
      <h2>Revisando React - Básico ao avançado</h2>
      <hr />
      <div>
        <h3>Component</h3>
        <Card title={"Título"} description={"Descrição do card"} />
        <Card title={"Título 2"} description={"Descrição do card 2"} />
      </div>
      <hr />
      <div>
        <h3>useState Simples</h3>
        <ButtonChangeState />
      </div>
      <hr />
      <ListRendering />
      <hr />
      <SimpleCounter />
      <hr />
      <EffectTest />
      <hr />
      <MemoTesting />
      <hr />
      <MemoTestingTwo />
      <hr />
      <h3>CallBack test</h3>
      <p>{counter}</p>
      <ButtonClick onClick={incrementNumber} />
    </div>
  );
}

export default App;
