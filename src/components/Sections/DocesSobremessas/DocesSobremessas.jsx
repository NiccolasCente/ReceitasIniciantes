//Componentes React
import React from "react";
import { Outlet, useLocation, Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";

// Componentes CSS
import "../DocesSobremessas/SectionGlobal.css"; 

// Componentes Imagens
import BrigadeiroSection from "../../../assets/brigadeiro_Section.jpg";
import PudimSection from "../../../assets/Pudim_section.jpeg";

const DocesSobremessas = () => {
  const location = useLocation();
  const isSubRouteActive = location.pathname !== '/doces'; 

  return (
    <section className="section-global" id="doces-sobremessas-section">
      {!isSubRouteActive && (
        <Container>
          <h1>Doces e Sobremessas</h1>
          <p>
            Os doces e sobremessas são parte essencial de diversas culturas culinárias, trazendo sabores e texturas que agradam a todos os gostos. Desde bolos e tortas até brigadeiros e pudins, há uma infinidade de receitas deliciosas para experimentar.
          </p>
          <h2>Receitas Disponíveis:</h2>
          <Row>
            <Col xs={12} md={4} className="mb-4">
              <Link to="/doces/brigadeiro" className="nav-link">
                <Card className="main-card">
                  <Card.Img variant="top" src={BrigadeiroSection} className="main-card-img-top" alt="Doce" />
                  <Card.Body className="main-card-body">
                    <Card.Title>Brigadeiro</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col xs={12} md={4} className="mb-4">
              <Link to="/doces/pudim" className="nav-link">
                <Card className="main-card">
                  <Card.Img variant="top" src={PudimSection} className="main-card-img-top" alt="Sobremessa" />
                  <Card.Body className="main-card-body">
                    <Card.Title>Pudim</Card.Title>
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

export default DocesSobremessas;
