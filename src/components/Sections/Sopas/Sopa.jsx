//Componentes React
import React from "react";
import { Outlet, useLocation, Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";

// Import CSS 
import "../Sopas/SectionGlobal.css";

// Import Imagens
import SopaCaldoVerdeSubSection from "../../../assets/sopa_caldo_verde.jpg"; 
import SopaLegumesSubSection from "../../../assets/sopa_legumes.avif"; 


const Sopa = () => {
  const location = useLocation();
  const isSopaCaldoVerde = location.pathname.includes('/sopas/caldo-verde');
  const isSopaLegumes = location.pathname.includes('/sopas/sopa-de-legumes');

  return (
    <section className="section-global" id="peixe-section">
      {!isSopaCaldoVerde && !isSopaLegumes && (
        <Container>
          <h1>Sopa</h1>
          <p>
            O peixe é uma excelente opção para quem busca refeições saudáveis e saborosas. Rico em nutrientes e com diversas formas de preparo, ele é um ingrediente versátil que pode ser o destaque em qualquer refeição.
          </p>
          <h2>Receitas Disponíveis:</h2>
          <Row>
            <Col xs={12} md={4} className="mb-4">
              <Link to="/sopas/caldo-verde" className="nav-link">
                <Card className="main-card">
                  <Card.Img variant="top" src={SopaCaldoVerdeSubSection} className="main-card-img-top" alt="Peixe Branco" />
                  <Card.Body className="main-card-body">
                    <Card.Title>Sopa Caldo Verde</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col xs={12} md={4} className="mb-4">
              <Link to="/sopas/sopa-de-legumes" className="nav-link">
                <Card className="main-card">
                  <Card.Img variant="top" src={SopaLegumesSubSection} className="main-card-img-top" alt="Peixe Branco" />
                  <Card.Body className="main-card-body">
                    <Card.Title>Sopa de Legumes</Card.Title>
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

export default Sopa;
