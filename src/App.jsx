import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import AboutUs from "./components/AboutUs/AboutUs";

// Importação dos Componentes Sections
import Arroz from "./components/Sections/Arroz/Arroz";
import Carnes from "./components/Sections/Carnes/Carnes";

// Importação dos Componentes SubSections
import ArrozNormal from "./components/SubSections/ArrozNormal/ArrozNormal";
import ArrozIntegral from "./components/SubSections/ArrozIntegral/ArrozIntegral";
import Picanha from "./components/SubSections/Picanha/Picanha";

// Componentes CSS
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./App.css"

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/sobrenós" element={<AboutUs />} /> 
          <Route path="/arroz" element={<Arroz />}>
            <Route path="arroz-branco" element={<ArrozNormal />} />
            <Route path="arroz-integral" element={<ArrozIntegral />} />
          </Route>
          <Route path="/carnes" element={<Carnes />}>
            <Route path="picanha" element={<Picanha />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
