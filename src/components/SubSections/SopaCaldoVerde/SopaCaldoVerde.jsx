// Import React
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import BreadcrumbNavigation from "../../BreadCrumb/BreadCrumb";

// Import Imagens
import SopaCaldoVerdeSubSection from "../../../assets/sopa_caldo_verde.jpg";

// Import CSS
import "../SopaCaldoVerde/SubSectionGlobal.css";

const SopaCaldoVerde = () => {
    return (
        <Container className="subsection-global">
            <BreadcrumbNavigation
                currentSection="Caldo Verde"
                previousSections={[
                    { name: 'Menu', link: '/' },
                    { name: 'Sopas', link: '/sopas' }
                ]}
            />
            <h2>Sopa Caldo Verde</h2>
            <Row className="align-items-start justify-content-center">
                <Col md={6} className="d-flex justify-content-center">
                    <div className="image-container">
                        <img
                            src={SopaCaldoVerdeSubSection}
                            alt="Sopa Caldo Verde"
                            className="arroz-img"
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
                                            <strong>Passo 2:</strong> Adicione as batatas picadas à panela e cubra com água. Tempere com sal a gosto. Deixe cozinhar até que as batatas fiquem bem macias, cerca de 20-25 minutos.
                                        </li>
                                        <li>
                                            <strong>Passo 3:</strong> Use um mixer de mão ou liquidificador para bater as batatas e o caldo até obter uma mistura cremosa e homogênea.
                                        </li>
                                        <li>
                                            <strong>Passo 4:</strong> Adicione as rodelas de linguiça ao caldo e deixe cozinhar por cerca de 10 minutos para que os sabores se misturem.
                                        </li>
                                        <li>
                                            <strong>Passo 5:</strong> Adicione a couve fatiada ao caldo e cozinhe por mais 5 minutos, apenas até que a couve amoleça, mas ainda mantenha sua cor verde vibrante.
                                        </li>
                                        <li>
                                            <strong>Passo 6:</strong> Prove a sopa e ajuste o sal e a pimenta, se necessário.
                                        </li>
                                        <li>
                                            <strong>Passo 7:</strong> Sirva o caldo verde quente, acompanhado de pão rústico, se desejar.
                                        </li>
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
                                        <li>4 batatas grandes, descascadas e cortadas em cubos.</li>
                                        <li>1 cebola média, picada.</li>
                                        <li>2 dentes de alho, picados.</li>
                                        <li>1 colher de sopa de azeite de oliva.</li>
                                        <li>1 linguiça ou chouriço, cortado em rodelas finas.</li>
                                        <li>1 maço de couve-manteiga, cortada em tiras finas.</li>
                                        <li>Sal e pimenta a gosto.</li>                       
                                        <li>Água suficiente para cobrir as batatas.</li>
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

export default SopaCaldoVerde;
