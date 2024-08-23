//Componentes React
import React from "react";

//Componentes CSS
import "../NotFound/NotFound.css"

const NotFound = () => {
  return (
    <div className="notfound-container text-center mt-4">
      <h2 className="notfound-title mb-3">Ops, essa receita/prato ainda não foi adicionado</h2>
      <p className="notfound-text mb-5">Veja outras opções no menu.</p>
    </div>
  );
};

export default NotFound;