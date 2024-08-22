import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import AboutUs from "./components/AboutUs/AboutUs";

// Importação dos Componentes Sections
import Arroz from "./components/Sections/Arroz/Arroz";
import Carnes from "./components/Sections/Carnes/Carnes";
import Peixe from "./components/Sections/Peixe/Peixe";
import Sopa from "./components/Sections/Sopas/Sopa";
import Bebidas from "./components/Sections/Bebidas/Bebidas";
import DocesSobremessas from "./components/Sections/DocesSobremessas/DocesSobremessas";
import Macarrao from "./components/Sections/Macarrão/Macarrao";

// Importação dos Componentes SubSections
// Arroz
import ArrozNormal from "./components/SubSections/ArrozNormal/ArrozNormal";
import ArrozIntegral from "./components/SubSections/ArrozIntegral/ArrozIntegral";

// Carnes
import Picanha from "./components/SubSections/Picanha/Picanha";
import Frango from "./components/SubSections/Frango/Frango";

// Peixes
import PeixeTilapia from "./components/SubSections/PeixeTilápia/PeixeTilapia";
import PeixeBacalhau from "./components/SubSections/PeixeBacalhau/PeixeBacalhau";

// Sopas
import SopaCaldoVerde from "./components/SubSections/SopaCaldoVerde/SopaCaldoVerde";
import SopaLegumes from "./components/SubSections/SopaLegumes/SopaLegumes";

//Macarrão
import MacarraoEspagueteMolho from "./components/SubSections/MacarraoEspagueteMolho/MacarraoEspagueteMolho";
import MacarraoEspaguetePesto from "./components/SubSections/MacarraoEspaguetePosto/MacarraoEspaguetePosto";

//Doces e Sobremessas
import Brigadeiro from "./components/SubSections/Brigadeiro/Brigadeiro";
import Pudim from "./components/SubSections/Pudim/Pudim";

// Bebidas
import SucoLaranja from "./components/SubSections/SucoLaranja/SucoLaranja";

// Componentes CSS
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/sobrenos" element={<AboutUs />} /> 
          
          <Route path="/arroz" element={<Arroz />}>
            <Route path="arroz-branco" element={<ArrozNormal />} />
            <Route path="arroz-integral" element={<ArrozIntegral />} />
          </Route>

          <Route path="/carnes" element={<Carnes />}>
            <Route path="picanha" element={<Picanha />} />
            <Route path="frango" element={<Frango />} />
          </Route>

          <Route path="/peixes" element={<Peixe />}>
            <Route path="peixe-tilapia" element={<PeixeTilapia />} /> 
            <Route path="peixe-bacalhau" element={<PeixeBacalhau />} /> 
          </Route>

          <Route path="/sopas" element={<Sopa />}>
            <Route path="caldo-verde" element={<SopaCaldoVerde />} />
            <Route path="sopa-de-legumes" element={<SopaLegumes />} />
          </Route>

          <Route path="/macarrao" element={<Macarrao />}>
            <Route path="macarrao-espaguete-ao-molho" element={<MacarraoEspagueteMolho />} />
            <Route path="macarrao-espaguete-ao-pesto" element={<MacarraoEspaguetePesto />} />
          </Route>

          <Route path="/doces" element={<DocesSobremessas />} >
            <Route path="brigadeiro" element={<Brigadeiro />} />
            <Route path="pudim" element={<Pudim />} />
          </Route>
          
          <Route path="/bebidas" element={<Bebidas />}>
            <Route path="suco-de-laranja" element={<SucoLaranja />} />
          </Route>
        
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
