import React from "react";
import { Outlet, useLocation, Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";

// Import CSS 
import "../Bebidas/SectionGlobal.css"; 

// Import Imagens
import LaranjaSection from "../../../assets/suco_laranja_section.jpg";

const Bebidas = () => {
  const location = useLocation();
  const isSucoLaranja = location.pathname.includes('/bebidas/suco-de-laranja');

  return (
    <section className="section-global" id="bebidas-section">
      {!isSucoLaranja && (
        <Container>
          <h1>Bebidas</h1>
          <p>
            As bebidas são essenciais para complementar qualquer refeição e podem variar de simples a sofisticadas. 
            Seja um suco refrescante, um smoothie nutritivo ou uma bebida quente reconfortante, elas trazem sabor e alegria aos nossos dias. 
            Explore diferentes receitas e descubra novas combinações para atender a todos os gostos e ocasiões.
          </p>
          <h2>Receitas Disponíveis:</h2>
          <Row>
            <Col xs={12} md={4} className="mb-4">
              <Link to="/bebidas/suco-de-laranja" className="nav-link">
                <Card className="main-card">
                  <Card.Img variant="top" src={LaranjaSection} className="main-card-img-top" alt="Suco de Laranja" />
                  <Card.Body className="main-card-body">
                    <Card.Title>Suco de Laranja</Card.Title>
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

export default Bebidas;
