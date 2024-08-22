// Componentes React
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import BreadcrumbNavigation from "../../BreadCrumb/BreadCrumb.jsx";

// Import Imagens
import PeixeTilapiaImage from "../../../assets/tilapia_subsection.webp"; 

// Import CSS
import "./SubSectionGlobal.css";

const PeixeTilapia = () => {
  return (
    <Container className="subsection-global">
      <BreadcrumbNavigation 
        currentSection="Tilápia" 
        previousSections={[
          { name: 'Menu', link: '/' },
          { name: 'Peixe', link: '/peixes' }
        ]}
      />
      <h2>Tilápia</h2>
      <Row className="align-items-start justify-content-center">
        <Col md={6} className="d-flex justify-content-center">
          <div className="image-container">
            <img src={PeixeTilapiaImage} alt="Tilápia Pronta" className="peixe-img" />
          </div>
        </Col>
        <Col md={6}>
          <div className="methods-container">
            <h3>Métodos de Preparo</h3>
            <Card className="prep-card-horizontal">
              <Card.Body>
                <Card.Text className="prep-card-text">
                  <ul className="prep-card-list">
                    <li>Passo 1: Tempere os filés de tilápia com limão, sal e pimenta.</li>
                    <li>Passo 2: Deixe marinar por 15 minutos.</li>
                    <li>Passo 3: Aqueça uma frigideira com azeite.</li>
                    <li>Passo 4: Grelhe os filés por 3-4 minutos de cada lado.</li>
                    <li>Passo 5: Sirva com legumes ou arroz.</li>
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
                    <li>2 filés de tilápia.</li>
                    <li>Suco de 1 limão.</li>
                    <li>Sal a gosto.</li>
                    <li>Pimenta a gosto.</li>
                    <li>Azeite para grelhar.</li>
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

export default PeixeTilapia;
