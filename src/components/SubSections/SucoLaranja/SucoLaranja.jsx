// Import React
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import BreadcrumbNavigation from "../../BreadCrumb/BreadCrumb";

// Import Imagens
import SucoLaranjaSubSection from "../../../assets/suco_laranja.jpg";

// Import CSS
import "../SucoLaranja/SubSectionGlobal.css";

const SucoLaranja = () => {
  return (
    <Container className="subsection-global">
      <BreadcrumbNavigation
        currentSection="Suco de Laranja"
        previousSections={[
          { name: 'Menu', link: '/' },
          { name: 'Bebidas', link: '/bebidas' }
        ]}
      />
      <h2>Suco de Laranja</h2>
      <Row className="align-items-start justify-content-center">
        <Col md={6} className="d-flex justify-content-center">
          <div className="image-container">
            <img src={SucoLaranjaSubSection} alt="Suco de Laranja" className="arroz-img" />
          </div>
        </Col>
        <Col md={6}>
          <div className="methods-container">
            <h3>Métodos de Preparo</h3>
            <Card className="prep-card-horizontal">
              <Card.Body>
                <Card.Text className="prep-card-text">
                  <ul className="prep-card-list">
                    <li>Passo 1: Esprema o suco das laranjas usando um espremedor.</li>
                    <li>Passo 2: Coe o suco para remover a polpa, se preferir.</li>
                    <li>Passo 3: Adicione açúcar a gosto e misture bem.</li>
                    <li>Passo 4: Sirva gelado ou com gelo.</li>
                    <li>Passo 5: Aproveite seu suco de laranja fresco!</li>
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
                    <li>4 laranjas.</li>
                    <li>Açúcar a gosto.</li>
                    <li>Água .</li>
                    <li>Gelo .</li>
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

export default SucoLaranja;
