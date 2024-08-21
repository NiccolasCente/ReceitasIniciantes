// Import React
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import BreadcrumbNavigation from "../../BreadCrumb/BreadCrumb";

// Import Imagens
import FrangoSubSections from "../../../assets/frango_subsection.jpg"; 

// Import CSS
import "./SubSectionGlobal.css";

const Frango = () => {
  return (
    <Container className="subsection-global">
      <BreadcrumbNavigation
        currentSection="Frango"
        previousSections={[
          { name: 'Menu', link: '/' },
          { name: 'Carnes', link: '/carnes' }
        ]}
      />
      <h2>Frango</h2>
      <Row className="align-items-start justify-content-center">
        <Col md={6} className="d-flex justify-content-center">
          <div className="image-container">
            <img src={FrangoSubSections} alt="Frango Pronto" className="arroz-img" />
          </div>
        </Col>
        <Col md={6}>
          <div className="methods-container">
            <h3>Métodos de Preparo</h3>
            <Card className="prep-card-horizontal">
              <Card.Body>
                <Card.Text className="prep-card-text">
                  <ul className="prep-card-list">
                    <li>Passo 1: Tempere o frango com sal, pimenta e outras especiarias a gosto.</li>
                    <li>Passo 2: Aqueça uma frigideira ou grelha com um pouco de óleo.</li>
                    <li>Passo 3: Coloque o frango na frigideira ou grelha.</li>
                    <li>Passo 4: Cozinhe o frango por cerca de 6-8 minutos de cada lado, até que esteja completamente cozido.</li>
                    <li>Passo 5: Retire o frango da frigideira e deixe descansar por alguns minutos antes de servir.</li>
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
                    <li>1 peça de frango (peito, coxa, ou sua escolha).</li>
                    <li>Sal a gosto.</li>
                    <li>Pimenta a gosto.</li>
                    <li>Especiarias a gosto (por exemplo, alho em pó, paprika).</li>
                    <li>Óleo para cozinhar.</li>
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

export default Frango;
