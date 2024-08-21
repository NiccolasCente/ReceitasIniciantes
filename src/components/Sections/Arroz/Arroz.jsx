// Componentes React
import React from "react";
import { Outlet, useLocation, Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";

//Componentes CSS
import "../Arroz/SectionGlobal.css"; 

//Componentes Imagens
import ArrozSection from "../../../assets/arroz_section.jpg";
import ArrozNormalSection from "../../../assets/arroz_branco_main.jpg";

const Arroz = () => {
  const location = useLocation();
  const isArrozBrancoRoute = location.pathname.includes('/arroz/arroz-branco');
  const isArrozIntegralRoute = location.pathname.includes('/arroz/arroz-integral');

  return (
    <section className="section-global" id="arroz-section">
      {!isArrozBrancoRoute && !isArrozIntegralRoute && (
        <Container>
          <h1>Arroz</h1>
          <p>
            O arroz é um dos alimentos mais versáteis e consumidos mundialmente, com uma grande variedade de tipos e preparos. Desde o arroz branco, que é o mais comum, até variedades como o arroz integral e o arroz de jasmim, cada tipo tem suas características únicas e usos culinários específicos.
          </p>
          <h2>Receitas Disponíveis:</h2>
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
          </Row>
        </Container>
      )}
      <Outlet />
    </section>
  );
};

export default Arroz;
