import ButtonChangeState from "./components/ButtonChangeState";
import Card from "./components/Card";
import ListRendering from "./components/ListRendering";
import SimpleCounter from "./components/SimpleCounter";

function App() {
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
    </div>
  );
}

export default App;
