// Import React
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import BreadcrumbNavigation from "../../BreadCrumb/BreadCrumb";

// Import Imagens
import SopaLegumesSubSection from "../../../assets/sopa_legumes.avif";

// Import CSS
import "../SopaLegumes/SubSectionGlobal.css";

const SopaLegumes = () => {
    return (
        <Container className="subsection-global">
            <BreadcrumbNavigation
                currentSection="Sopa de Legumes"
                previousSections={[
                    { name: 'Menu', link: '/' },
                    { name: 'Sopas', link: '/sopas' }
                ]}
            />
            <h2>Sopa de Legumes</h2>
            <Row className="align-items-start justify-content-center">
                <Col md={6} className="d-flex justify-content-center">
                    <div className="image-container">
                        <img
                            src={SopaLegumesSubSection}
                            alt="Sopa de Legumes"
                            className="sopa-legumes-img"
                        />
                    </div>
                </Col>
                <Col md={6}>
                    <div className="methods-container">
                        <h3>Métodos de Preparo</h3>
                        <Card className="prep-card-horizontal">
                            <Card.Body>
                                <Card.Text className="prep-card-text">
                                    <ul className="prep-card-list">
                                        <li>
                                            <strong>Passo 1:</strong> Em uma panela grande, aqueça o azeite e refogue a cebola e o alho até que fiquem macios e translúcidos.
                                        </li>
                                        <li>
                                            <strong>Passo 2:</strong> Adicione os legumes picados (cenoura, batata, abóbora, chuchu, etc.) à panela e cubra com água. Tempere com sal a gosto.
                                        </li>
                                        <li>
                                            <strong>Passo 3:</strong> Deixe cozinhar até que os legumes estejam macios, cerca de 20-30 minutos.
                                        </li>
                                        <li>
                                            <strong>Passo 4:</strong> Use um mixer de mão ou liquidificador para bater parte dos legumes, criando uma textura cremosa, mas deixando alguns pedaços inteiros para dar consistência.
                                        </li>
                                        <li>
                                            <strong>Passo 5:</strong> Adicione temperos a gosto, como pimenta-do-reino e ervas frescas.
                                        </li>
                                        <li>
                                            <strong>Passo 6:</strong> Cozinhe por mais alguns minutos para apurar os sabores e ajustar a consistência, se necessário.
                                        </li>
                                        <li>
                                            <strong>Passo 7:</strong> Sirva a sopa de legumes quente, acompanhada de pão ou torradas.
                                        </li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <h3>Ingredientes</h3>
                        <Card className="prep-card-horizontal">
                            <Card.Body>
                                <Card.Text className="prep-card-text">
                                    <ul className="prep-card-list">
                                        <li>2 colheres de sopa de azeite</li>
                                        <li>1 cebola picada</li>
                                        <li>2 dentes de alho picados</li>
                                        <li>2 cenouras picadas</li>
                                        <li>2 batatas picadas</li>
                                        <li>1 abobrinha picada</li>
                                        <li>1 chuchu picado</li>
                                        <li>1/2 abóbora picada</li>
                                        <li>Sal e pimenta-do-reino a gosto</li>
                                        <li>Ervas frescas (como salsinha e cebolinha) a gosto</li>
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

export default SopaLegumes;
