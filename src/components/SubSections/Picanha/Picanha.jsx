// Import React
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import BreadcrumbNavigation from "../../BreadCrumb/BreadCrumb.jsx";

// Import Imagens
import PicanhaImage from "../../../assets/picanha_main.webp"; 

// Import CSS
import "./SubSectionGlobal.css";

const Picanha = () => {
  return (
    <Container className="subsection-global">
      <BreadcrumbNavigation 
        currentSection="Picanha" 
        previousSections={[
          { name: 'Menu', link: '/' },
          { name: 'Carnes', link: '/carnes' }
        ]}
      />
      <h2>Picanha</h2>
      <Row className="align-items-start justify-content-center">
        <Col md={6} className="d-flex justify-content-center">
          <div className="image-container">
            <img src={PicanhaImage} alt="Picanha Pronta" className="arroz-img" />
          </div>
        </Col>
        <Col md={6}>
          <div className="methods-container">
            <h3>Métodos de Preparo</h3>
            <Card className="prep-card-horizontal">
              <Card.Body>
                <Card.Text className="prep-card-text">
                  <ul className="prep-card-list">
                    <li>Passo 1: Tempere a picanha com sal e pimenta.</li>
                    <li>Passo 2: Aqueça a grelha ou churrasqueira.</li>
                    <li>Passo 3: Coloque a picanha na grelha.</li>
                    <li>Passo 4: Grelhe a picanha por cerca de 4-5 minutos de cada lado.</li>
                    <li>Passo 5: Retire da grelha e deixe descansar por alguns minutos.</li>
                    <li>Passo 6: Sirva e aproveite!</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="ingredients-container mt-4">
            <h3>Ingredientes</h3>
            <Card className="prep-card-horizontal">
              <Card.Body>
                <Card.Text className="prep-card-text">
                  <ul className="prep-card-list">
                    <li>1 peça de picanha.</li>
                    <li>Sal a gosto.</li>
                    <li>Pimenta a gosto.</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Picanha;
