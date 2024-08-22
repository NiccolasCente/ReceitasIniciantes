// Import React
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import BreadcrumbNavigation from "../../BreadCrumb/BreadCrumb";

// Import Imagens
import PudimSubSectionImage from "../../../assets/Pudim_section.jpeg";

// Import CSS
import "./SubSectionGlobal.css";

const Pudim = () => {
  return (
    <Container className="subsection-global">
      <BreadcrumbNavigation
        currentSection="Pudim"
        previousSections={[
          { name: 'Menu', link: '/' },
          { name: 'Doces', link: '/doces' }
        ]}
      />
      <h2>Pudim</h2>
      <Row className="align-items-start justify-content-center">
        <Col md={6} className="d-flex justify-content-center">
          <div className="image-container">
            <img src={PudimSubSectionImage} alt="Pudim" className="arroz-img" />
          </div>
        </Col>
        <Col md={6}>
          <div className="methods-container">
            <h3>Métodos de Preparo</h3>
            <Card className="prep-card-horizontal">
              <Card.Body>
                <Card.Text className="prep-card-text">
                  <ul className="prep-card-list">
                    <li><strong>Passo 1:</strong> No liquidificador, bata o leite condensado, o leite e os ovos até obter uma mistura homogênea.</li>
                    <li><strong>Passo 2:</strong> Caramelize o açúcar em uma forma de pudim e despeje a mistura batida por cima.</li>
                    <li><strong>Passo 3:</strong> Asse em banho-maria no forno a 180°C por cerca de 1 hora e 30 minutos, ou até que, ao enfiar um palito, ele saia limpo.</li>
                    <li><strong>Passo 4:</strong> Deixe esfriar completamente antes de desenformar.</li>
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
                    <li>1 lata de leite condensado.</li>
                    <li>2 medidas (da lata de leite condensado) de leite.</li>
                    <li>3 ovos.</li>
                    <li>1 xícara de açúcar para caramelizar a forma.</li>
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

export default Pudim;
