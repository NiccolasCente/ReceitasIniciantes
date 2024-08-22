// Componentes React
import React from "react";
import { Outlet, useLocation, Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";

//Componentes CSS
import "../Macarrão/SectionGlobal.css"; 

//Componentes Imagens
import MacarraoMolhoSection from "../../../assets/macarrao_ao_molho.jpeg";
import MacarraoPestoSection from "../../../assets/macarrao_ao_pesto.jpeg";

const Macarrao = () => {
  const location = useLocation();
  const isMacarraoEspagueteMolho = location.pathname.includes('/macarrao/macarrao-espaguete-ao-molho');
  const isMacarraoEspaguetePesto = location.pathname.includes('/macarrao/macarrao-espaguete-ao-pesto');

  return (
    <section className="section-global" id="arroz-section">
      {!isMacarraoEspagueteMolho && !isMacarraoEspaguetePesto && (
        <Container>
          <h1>Macarrão</h1>
          <p>
            O macarrão é um dos alimentos mais populares e versáteis da culinária mundial. Existem diversas variedades e preparos, desde o clássico espaguete até o 
            penne e o fusilli. Cada tipo de macarrão pode ser combinado com diferentes molhos e ingredientes para criar pratos deliciosos e variados.
          </p>
          <h2>Receitas Disponíveis:</h2>
          <Row>
            <Col xs={12} md={4} className="mb-4">
              <Link to="/macarrao/macarrao-espaguete-ao-molho" className="nav-link">
                <Card className="main-card">
                  <Card.Img variant="top" src={MacarraoMolhoSection} className="main-card-img-top" alt="Macarrão ao Molho" />
                  <Card.Body className="main-card-body">
                    <Card.Title>Macarrão Espaguete ao Molho</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col xs={12} md={4} className="mb-4">
              <Link to="/macarrao/macarrao-espaguete-ao-pesto" className="nav-link">
                <Card className="main-card">
                  <Card.Img variant="top" src={MacarraoPestoSection} className="main-card-img-top" alt="Macarrão ao Pesto" />
                  <Card.Body className="main-card-body">
                    <Card.Title>Macarrão Espaguete ao Pesto</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          </Row>
        </Container>
      )}
      <Outlet />
    </section>
  );
};

export default Macarrao;
