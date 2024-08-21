// Componentes React
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import BreadcrumbNavigation from "../../BreadCrumb/BreadCrumb.jsx";

// Import Imagens
import ArrozSubSection from "../../../assets/arroz_branco_main.jpg";

// Import CSS
import './SubSectionGlobal.css';

const ArrozNormal = () => {
  return (
    <Container className="subsection-global">
      <BreadcrumbNavigation 
        currentSection="Arroz Branco" 
        previousSections={[
          { name: 'Menu', link: '/' },
          { name: 'Arroz', link: '/arroz' }
        ]}
      />
      <h2>Arroz Branco</h2>
      <Row className="align-items-start justify-content-center">
        <Col md={6} className="d-flex justify-content-center">
          <div className="image-container">
            <img src={ArrozSubSection} alt="Arroz Pronto" className="arroz-img" />
          </div>
        </Col>
        <Col md={6}>
          <div className="methods-container">
            <h3>Métodos de Preparo</h3>
            <Card className="prep-card-horizontal">
              <Card.Body>
                <Card.Text className="prep-card-text">
                  <ul className="prep-card-list">
                    <li>Passo 1: Secar o arroz/ Quantidade: 2 Xícaras de Arroz.</li>
                    <li>Passo 2: Pegar uma panela e colocar no fogão.</li>
                    <li>Passo 3: Ligar o fogo no fogão.</li>
                    <li>Passo 4: Colocar um pouco de óleo na panela.</li>
                    <li>Passo 5: Colocar um pouco de alho na panela.</li>
                    <li>Passo 6: Mexer durante alguns segundos ambos.</li>
                    <li>Passo 7: Colocar o arroz que estava secando na panela.</li>
                    <li>Passo 8: Coloque um pouco de sal e mexa durante alguns segundos.</li>
                    <li>Passo 9: Coloque 2 copos de água.</li>
                    <li>Passo 10: Mexa durante alguns segundos.</li>
                    <li>Passo 11: Feche a panela com a tampa.</li>
                    <li>Passo 12: Espere durante alguns minutos o arroz borbulhar e secar.</li>
                    <li>Passo 13: Quando estiver quase nada de bolha e estiver seco, desligue o fogão.</li>
                    <li>Passo 14: Espere durante alguns minutos o arroz descansar.</li>
                    <li>Passo 15: Aproveite!</li>
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
                    <li>2 Xícaras de Arroz.</li>
                    <li>2 Colheres de Óleo.</li>
                    <li>3 Dentes de Alho.</li>
                    <li>1 Colher de Sal.</li>
                    <li>2 Copos de Água.</li>
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

export default ArrozNormal;
