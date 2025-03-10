import React from "react";

const ButtonClick = ({ onClick }) => {
  console.log("botão renderizado!");
  return <button onClick={onClick}>Clique aqui!</button>;
};

export default React.memo(ButtonClick);
