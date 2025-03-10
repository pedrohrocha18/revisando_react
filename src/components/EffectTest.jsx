import React, { useEffect } from "react";

const EffectTest = () => {
  useEffect(() => {
    console.log("Componente foi montado");
    return console.log("Componente foi desmontado");
  }, []);

  return (
    <div>
      <h3>EffectTest</h3>
      <p>Olhe no console :D</p>
    </div>
  );
};

export default EffectTest;
