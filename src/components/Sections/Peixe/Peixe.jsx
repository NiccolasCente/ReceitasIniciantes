import React from "react";
import { Outlet, useLocation, Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";

// Import CSS 
import "../Peixe/SectionGlobal.css"; 

// Import Imagens
import PeixeTilapiaSubSection from "../../../assets/tilapia_subsection.webp"; 
import PeixeBacalhauSubSection from "../../../assets/bacalhau_subsection.png"; 


const Peixe = () => {
  const location = useLocation();
  const isPeixeTilapia = location.pathname.includes('/peixes/peixe-tilapia');
  const isPeixeBacalhau = location.pathname.includes('/peixes/peixe-bacalhau');

  return (
    <section className="section-global" id="peixe-section">
      {!isPeixeTilapia && !isPeixeBacalhau && (
        <Container>
          <h1>Peixe</h1>
          <p>
            O peixe é uma excelente opção para quem busca refeições saudáveis e saborosas. Rico em nutrientes e com diversas formas de preparo, ele é um ingrediente versátil que pode ser o destaque em qualquer refeição.
          </p>
          <h2>Receitas Disponíveis:</h2>
          <Row>
            <Col xs={12} md={4} className="mb-4">
              <Link to="/peixes/peixe-tilapia" className="nav-link">
                <Card className="main-card">
                  <Card.Img variant="top" src={PeixeTilapiaSubSection} className="main-card-img-top" alt="Peixe Branco" />
                  <Card.Body className="main-card-body">
                    <Card.Title>Peixe Tilápia</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col xs={12} md={4} className="mb-4">
              <Link to="/peixes/peixe-bacalhau" className="nav-link">
                <Card className="main-card">
                  <Card.Img variant="top" src={PeixeBacalhauSubSection} className="main-card-img-top" alt="Peixe Branco" />
                  <Card.Body className="main-card-body">
                    <Card.Title>Peixe Bacalhau</Card.Title>
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

export default Peixe;
