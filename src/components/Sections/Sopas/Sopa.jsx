// Componentes React
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
    <section className="section-global" id="sopa-section">
      {!isSopaCaldoVerde && !isSopaLegumes && (
        <Container>
          <h1>Sopas</h1>
          <p>
            As sopas são uma ótima opção para refeições confortantes e nutritivas. Com uma variedade de receitas que vão desde opções mais leves até pratos mais encorpados, as sopas são versáteis e podem ser adaptadas para diferentes gostos e preferências.
          </p>
          <h2>Receitas Disponíveis:</h2>
          <Row>
            <Col xs={12} md={4} className="mb-4">
              <Link to="/sopas/caldo-verde" className="nav-link">
                <Card className="main-card">
                  <Card.Img variant="top" src={SopaCaldoVerdeSubSection} className="main-card-img-top" alt="Sopa Caldo Verde" />
                  <Card.Body className="main-card-body">
                    <Card.Title>Sopa Caldo Verde</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col xs={12} md={4} className="mb-4">
              <Link to="/sopas/sopa-de-legumes" className="nav-link">
                <Card className="main-card">
                  <Card.Img variant="top" src={SopaLegumesSubSection} className="main-card-img-top" alt="Sopa de Legumes" />
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
