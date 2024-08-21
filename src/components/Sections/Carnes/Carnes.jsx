// Componentes React
import React from "react";
import { Outlet, useLocation, Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";


// Import CSS
import "../Carnes/SectionGlobal.css"; 

//Import Imagens
import PicanhaNormalSection from "../../../assets/picanha_section.jpg";
import FrangoSection from "../../../assets/frango_section.jpg";

const Carnes = () => {
  const location = useLocation();
  const isPicanha = location.pathname.includes('/carnes/picanha');
  const isFrango = location.pathname.includes('/carnes/frango');

  return (
    <section className="section-global" id="picante-section">
      {!isPicanha && !isFrango && (
        <Container>
          <h1>Carnes</h1>
          <p>
            A carne é um ingrediente versátil e saboroso, capaz de transformar qualquer refeição em uma experiência memorável. Seja grelhada, assada ou cozida, ela oferece uma riqueza de sabores e texturas que agradam a todos os paladares. Experimente diferentes cortes e métodos de preparo para descobrir novas maneiras de apreciar este ingrediente essencial.
          </p>
          <h2>Receitas Disponíveis:</h2>
          <Row>
            <Col xs={12} md={4} className="mb-4">
              <Link to="/carnes/picanha" className="nav-link">
                <Card className="main-card">
                  <Card.Img variant="top" src={PicanhaNormalSection} className="main-card-img-top" alt="Picante Normal" />
                  <Card.Body className="main-card-body">
                    <Card.Title>Picanha</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col xs={12} md={4} className="mb-4">
              <Link to="/carnes/frango" className="nav-link">
                <Card className="main-card">
                  <Card.Img variant="top" src={FrangoSection} className="main-card-img-top" alt="Frango" />
                  <Card.Body className="main-card-body">
                    <Card.Title>Frango</Card.Title>
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

export default Carnes;
