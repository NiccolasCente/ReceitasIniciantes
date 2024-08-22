// Import React
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import BreadcrumbNavigation from "../../BreadCrumb/BreadCrumb";

// Import Imagens
import BrigadeiroSubSectionImage from "../../../assets/brigadeiro_Section.jpg"; 

// Import CSS
import "./SubSectionGlobal.css";

const Brigadeiro = () => {
  return (
    <Container className="subsection-global">
      <BreadcrumbNavigation
        currentSection="Brigadeiro"
        previousSections={[
          { name: 'Menu', link: '/' },
          { name: 'Doces', link: '/doces' }
        ]}
      />
      <h2>Brigadeiro</h2>
      <Row className="align-items-start justify-content-center">
        <Col md={6} className="d-flex justify-content-center">
          <div className="image-container">
            <img src={BrigadeiroSubSectionImage} alt="Brigadeiro" className="arroz-img" />
          </div>
        </Col>
        <Col md={6}>
          <div className="methods-container">
            <h3>Métodos de Preparo</h3>
            <Card className="prep-card-horizontal">
              <Card.Body>
                <Card.Text className="prep-card-text">
                  <ul className="prep-card-list">
                    <li><strong>Passo 1:</strong> Em uma panela, misture o leite condensado, o cacau em pó e a manteiga.</li>
                    <li><strong>Passo 2:</strong> Cozinhe em fogo médio, mexendo sempre, até que a mistura comece a desgrudar do fundo da panela. Isso deve levar cerca de 10 minutos.</li>
                    <li><strong>Passo 3:</strong> Retire a panela do fogo e deixe o brigadeiro esfriar em temperatura ambiente.</li>
                    <li><strong>Passo 4:</strong> Com as mãos levemente untadas de manteiga, forme bolinhas com o brigadeiro.</li>
                    <li><strong>Passo 5:</strong> Passe as bolinhas no granulado de chocolate até que estejam completamente cobertas.</li>
                    <li><strong>Passo 6:</strong> Coloque os brigadeiros em forminhas de papel e sirva.</li>
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
                    <li>2 colheres de sopa de cacau em pó.</li>
                    <li>1 colher de sopa de manteiga.</li>
                    <li>Granulado de chocolate para decorar.</li>
                    <li>Manteiga para untar as mãos.</li>
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

export default Brigadeiro;
