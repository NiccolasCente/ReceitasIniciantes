import React from "react";
import { Outlet, useLocation } from 'react-router-dom'; // Importa o Outlet e useLocation

const Arroz = () => {
  const location = useLocation(); // Obtém a localização atual

  // Verifica se a URL contém um caminho para um componente filho
  const isChildRoute = location.pathname.includes('/arroz/arroz-normal');

  return (
    <div>
      {!isChildRoute && <h2>Arroz</h2>}
      <Outlet />
    </div>
  );
};

export default Arroz;
