// Import React
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import BreadcrumbNavigation from "../../BreadCrumb/BreadCrumb";

// Import Imagens
import MacarraoPestoSubSection from "../../../assets/macarrao_pesto.webp"; 

// Import CSS
import "./SubSectionGlobal.css";

const MacarraoEspaguetePesto = () => {
  return (
    <Container className="subsection-global">
      <BreadcrumbNavigation
        currentSection="Macarrão Espaguete ao Pesto"
        previousSections={[
          { name: 'Menu', link: '/' },
          { name: 'Macarrão', link: '/macarrao' }
        ]}
      />
      <h2>Macarrão Espaguete ao Pesto</h2>
      <Row className="align-items-start justify-content-center">
        <Col md={6} className="d-flex justify-content-center">
          <div className="image-container">
            <img src={MacarraoPestoSubSection} alt="Macarrão Espaguete ao Pesto" className="arroz-img" />
          </div>
        </Col>
        <Col md={6}>
          <div className="methods-container">
            <h3>Métodos de Preparo</h3>
            <Card className="prep-card-horizontal">
              <Card.Body>
                <Card.Text className="prep-card-text">
                  <ul className="prep-card-list">
                    <li><strong>Passo 1:</strong> Cozinhe o espaguete conforme as instruções da embalagem até ficar al dente.</li>
                    <li><strong>Passo 2:</strong> Enquanto o espaguete cozinha, prepare o molho pesto. Em um processador de alimentos, combine o manjericão, o alho, as nozes (ou pinhões), e o queijo parmesão. Processe até obter uma mistura homogênea.</li>
                    <li><strong>Passo 3:</strong> Com o processador ainda em funcionamento, adicione o azeite lentamente até que o pesto esteja bem incorporado e cremoso.</li>
                    <li><strong>Passo 4:</strong> Escorra o espaguete e reserve um pouco da água do cozimento.</li>
                    <li><strong>Passo 5:</strong> Misture o pesto ao espaguete ainda quente, adicionando um pouco da água do cozimento, se necessário, para atingir a consistência desejada.</li>
                    <li><strong>Passo 6:</strong> Sirva o espaguete ao pesto quente, polvilhado com queijo parmesão adicional e folhas de manjericão fresco, se desejar.</li>
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
                    <li>250g de espaguete.</li>
                    <li>2 xícaras de manjericão fresco.</li>
                    <li>2 dentes de alho.</li>
                    <li>1/2 xícara de nozes ou pinhões.</li>
                    <li>1/2 xícara de queijo parmesão ralado.</li>
                    <li>1/2 xícara de azeite de oliva.</li>
                    <li>Sal e pimenta a gosto.</li>
                    <li>Queijo parmesão adicional para servir (opcional).</li>
                    <li>Folhas de manjericão fresco para decorar (opcional).</li>
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

export default MacarraoEspaguetePesto;
