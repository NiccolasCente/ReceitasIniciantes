// Import React
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import BreadcrumbNavigation from "../../BreadCrumb/BreadCrumb";

// Import Imagens
import BacalhauSubSections from "../../../assets/bacalhau_subsection.png"; 

// Import CSS
import "./SubSectionGlobal.css";

const PeixeBacalhau = () => {
  return (
    <Container className="subsection-global">
      <BreadcrumbNavigation
        currentSection="Bacalhau"
        previousSections={[
          { name: 'Menu', link: '/' },
          { name: 'Peixe', link: '/peixes' }
        ]}
      />
      <h2>Peixe Bacalhau</h2>
      <Row className="align-items-start justify-content-center">
        <Col md={6} className="d-flex justify-content-center">
          <div className="image-container">
            <img src={BacalhauSubSections} alt="Frango Pronto" className="arroz-img" />
          </div>
        </Col>
        <Col md={6}>
          <div className="methods-container">
            <h3>Métodos de Preparo</h3>
            <Card className="prep-card-horizontal">
              <Card.Body>
                <Card.Text className="prep-card-text">
                  <ul className="prep-card-list">
                    <li>Passo 1: Desfie o bacalhau em pedaços pequenos.</li>
                    <li>Passo 2: Descasque e corte as batatas em rodelas.</li>
                    <li>Passo 3: Refogue a cebola e o alho no azeite até ficarem dourados.</li>
                    <li>Passo 4: Adicione o pimentão e continue refogando.</li>
                    <li>Passo 5: Junte o bacalhau desfiado e as batatas. Tempere com sal e pimenta a gosto.</li>
                    <li>Passo 6: Cozinhe até que as batatas estejam macias e o bacalhau bem misturado.</li>
                    <li>Passo 7: Finalize com cheiro-verde picado e sirva quente.</li>
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
                    <li>500g de bacalhau dessalgado.</li>
                    <li>1 cebola grande.</li>
                    <li>2 dentes de alho.</li>
                    <li>1 pimentão vermelho.</li>
                    <li>4 batatas médias.</li>
                    <li>Azeite a gosto.</li>
                    <li>Sal e pimenta a gosto.</li>
                    <li>Cheiro-verde picado.</li>
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

export default PeixeBacalhau;
