// Import React
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import BreadcrumbNavigation from "../../BreadCrumb/BreadCrumb";

// Import Imagens
import MacarraoMolhoSubSection from "../../../assets/macarrao_ao_molho.jpeg"; 

// Import CSS
import "./SubSectionGlobal.css";

const MacarraoEspagueteMolho = () => {
  return (
    <Container className="subsection-global">
      <BreadcrumbNavigation
        currentSection="Macarrão Espaguete ao Molho"
        previousSections={[
          { name: 'Menu', link: '/' },
          { name: 'Macarrão', link: '/macarrao' }
        ]}
      />
      <h2>Macarrão Espaguete ao Molho</h2>
      <Row className="align-items-start justify-content-center">
        <Col md={6} className="d-flex justify-content-center">
          <div className="image-container">
            <img src={MacarraoMolhoSubSection} alt="Macarrão Espaguete ao Molho" className="arroz-img" />
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
                    <li><strong>Passo 2:</strong> Enquanto o espaguete cozinha, aqueça o azeite em uma panela grande e refogue a cebola e o alho até ficarem macios.</li>
                    <li><strong>Passo 3:</strong> Adicione o molho de tomate e tempere com sal, pimenta, e suas ervas favoritas.</li>
                    <li><strong>Passo 4:</strong> Deixe o molho cozinhar por cerca de 10-15 minutos para apurar os sabores.</li>
                    <li><strong>Passo 5:</strong> Escorra o espaguete e adicione-o à panela com o molho. Misture bem para que o molho envolva o macarrão.</li>
                    <li><strong>Passo 6:</strong> Cozinhe por mais alguns minutos para que o espaguete absorva os sabores do molho.</li>
                    <li><strong>Passo 7:</strong> Sirva o espaguete quente, polvilhado com queijo parmesão ralado e folhas de manjericão fresco, se desejar.</li>
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
                    <li>2 colheres de sopa de azeite.</li>
                    <li>1 cebola média.</li>
                    <li>2 dentes de alho.</li>
                    <li>400g de molho de tomate.</li>
                    <li>Sal e pimenta a gosto.</li>
                    <li>Ervas secas (orégano, manjericão) a gosto.</li>
                    <li>Queijo parmesão ralado a gosto (opcional).</li>
                    <li>Manjericão fresco para decorar (opcional).</li>
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

export default MacarraoEspagueteMolho;
