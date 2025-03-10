import React from "react";
import data from "../data/data.json";

const ListRendering = () => {
  return (
    <div>
      <h3>List:</h3>
      <div>
        {data.length === 0 ? (
          <p>Nenhum item encontrado</p>
        ) : (
          data.map((a) => (
            <div key={a.id}>
              <p>
                {a.nome} - {a.idade} - {a.email} - {a.ativo}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ListRendering;
