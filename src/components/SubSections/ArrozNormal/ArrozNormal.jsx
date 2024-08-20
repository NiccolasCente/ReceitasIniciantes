import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ArrozSubSection from '../../../assets/arroz_branco_main.jpg';
import './ArrozNormal.css';

const ArrozNormal = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={10}>
          <h2 className="text-center mb-5 mt-4">ARROZ NORMAL</h2>
          <Row>
            {/* Imagem posicionada à esquerda */}
            <Col md={4} className="d-flex justify-content-center align-items-center">
              <img src={ArrozSubSection} alt="Arroz Pronto" className="arroz-img" />
            </Col>
            {/* Texto e Card do lado direito */}
            <Col md={8}>
              <h3 className="prep-title">Métodos de Preparo</h3>
              <Card className="prep-card-horizontal">
                <Card.Body>
                  <Card.Text className="prep-card-text">
                    <p>Aqui você pode listar os métodos de preparo do arroz normal.</p>
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
                      <li>Passo 14: Espere durante alguns minutos o Arroz descansar.</li>
                      <li>Passo 15: Aproveite!</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ArrozNormal;
