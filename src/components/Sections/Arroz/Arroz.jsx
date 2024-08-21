// Componentes React
import React from "react";
import { Outlet, useLocation, Link } from 'react-router-dom'; // Importa o Link para navegação
import { Container, Row, Col, Card } from 'react-bootstrap'; // Importa os componentes do React Bootstrap

// Componentes CSS
import "../Arroz/Arroz.css";

// Componentes Imagens
import ArrozSection from "../../../assets/arroz_section.jpg";
import ArrozNormalSection from "../../../assets/arroz_branco_main.jpg";

const Arroz = () => {
  const location = useLocation(); // Obtém a localização atual

  // Verifica se a URL contém um caminho para um componente filho
  const isArrozBrancoRoute = location.pathname.includes('/arroz/arroz-branco');
  const isArrozIntegralRoute = location.pathname.includes('/arroz/arroz-integral');

  return (
    <section id="arroz-section">
      {!isArrozBrancoRoute && !isArrozIntegralRoute && (
        <Container>
          <h1 id="arroz-title">Arroz</h1>
          <p id="arroz-description">
            O arroz é um dos alimentos mais versáteis e consumidos mundialmente, com uma grande variedade de tipos e preparos. Desde o arroz branco, que é o mais comum, até variedades como o arroz integral e o arroz de jasmim, cada tipo tem suas características únicas e usos culinários específicos.
          </p>

          <h2 id="recipes-heading">Receitas Disponíveis:</h2>
          <Row>
            <Col xs={12} md={4} className="mb-4">
              <Link to="/arroz/arroz-branco" className="nav-link">
                <Card className="main-card">
                  <Card.Img variant="top" src={ArrozNormalSection} className="main-card-img-top" alt="Arroz Branco" />
                  <Card.Body className="main-card-body">
                    <Card.Title>Arroz Branco</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col xs={12} md={4} className="mb-4">
              <Link to="/arroz/arroz-integral" className="nav-link">
                <Card className="main-card">
                  <Card.Img variant="top" src={ArrozSection} className="main-card-img-top" alt="Arroz Integral" />
                  <Card.Body className="main-card-body">
                    <Card.Title>Arroz Integral</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            {/* Adicione mais cartões conforme necessário */}
          </Row>
        </Container>
      )}
      <Outlet />
    </section>
  );
};

export default Arroz;
