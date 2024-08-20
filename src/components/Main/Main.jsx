import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from 'react-router-dom'; 

// Componentes CSS
import "../Main/Main.css";

// Componentes Imagens
import LogoMain from "../../assets/receitas_iniciantes_logo.png";
import ArrozNormal from "../../assets/arroz_branco_main.jpg";
import Picanha from "../../assets/picanha_main.webp";
import SucoLaranja from "../../assets/suco_laranja.jpg";

const Main = () => {
  return (
    <main>
      <Container className="text-center mt-4">
        <img src={LogoMain} alt="Logo" className="img-fluid mb-4" />
        
        <Row className="mb-5">
          <Col>
            <h1 className="mb-3">Sejam Todos Bem-Vindos ao<br />
              Receitas Iniciantes!</h1>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col>
            <h1>Lugar Ideal para você<br />
              que quer desenvolver<br />
              seus dotes culinários</h1>
          </Col>
        </Row>
        
        <Row>
          <Col xs={12} md={4} className="mb-4">
            <Link to="/arroz/arroz-normal"> 
              <Card className="main-card">
                <Card.Img variant="top" src={ArrozNormal} className="main-card-img-top" alt="Arroz Normal" />
                <Card.Body className="main-card-body">
                  <Card.Title>Arroz Normal</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col xs={12} md={4} className="mb-4">
            <Link to="/carnes/picanha"> 
              <Card className="main-card">
                <Card.Img variant="top" src={Picanha} className="main-card-img-top" alt="Picanha" />
                <Card.Body className="main-card-body">
                  <Card.Title>Picanha</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col xs={12} md={4} className="mb-4">
            <Link to="/bebidas/suco-laranja"> 
              <Card className="main-card">
                <Card.Img variant="top" src={SucoLaranja} className="main-card-img-top" alt="Suco de Laranja" />
                <Card.Body className="main-card-body">
                  <Card.Title>Suco de Laranja</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Main;
