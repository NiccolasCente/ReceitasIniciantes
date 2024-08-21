// Picante.js
import React from "react";
import { Outlet, useLocation, Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';


import "../Carnes/SectionGlobal.css"; // Importa o CSS global

import PicanhaNormalSection from "../../../assets/picanha_main.webp";

const Picante = () => {
  const location = useLocation();
  const isPicanteNormalRoute = location.pathname.includes('/picante/picante-normal');
  const isPicanteEspecialRoute = location.pathname.includes('/picante/picante-especial');

  return (
    <section className="section-global" id="picante-section">
      {!isPicanteNormalRoute && !isPicanteEspecialRoute && (
        <Container>
          <h1>Picante</h1>
          <p>
            O picante é um dos sabores que pode transformar um prato comum em algo extraordinário, adicionando um toque especial e uma explosão de sabor. Explore diferentes variações e receitas para intensificar sua experiência culinária.
          </p>
          <h2>Receitas Disponíveis:</h2>
          <Row>
            <Col xs={12} md={4} className="mb-4">
              <Link to="/picante/picante-normal" className="nav-link">
                <Card className="main-card">
                  <Card.Img variant="top" src={PicanhaNormalSection} className="main-card-img-top" alt="Picante Normal" />
                  <Card.Body className="main-card-body">
                    <Card.Title>Picante Normal</Card.Title>
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

export default Picante;
