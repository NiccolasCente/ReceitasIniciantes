import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const AboutUs = () => {
  return (
    <Container>
      <h1>Sobre Nós</h1>
      <Row className="align-items-center">
        <Col md={4}>
          <Image
            src="caminho-para-sua-imagem.jpg"
            alt="Niccolas Cente"
            roundedCircle
            fluid
          />
        </Col>
        <Col md={8}>
          <article>
            <p>
              Olá, me chamo Niccolas Cente, desenvolvedor web, e aprendi a
              cozinhar apenas na vida adulta. Sempre achei que não tinha
              capacidade para cozinhar devido a dificuldades de memorização, mas
              descobri que isso não precisava me impedir. Foi pensando em
              pessoas como eu, que têm dificuldades na cozinha ou que estão
              começando agora, que desenvolvi este site.
            </p>
            <p>
              Este é um projeto voluntário, criado para ajudar quem enfrenta
              desafios na hora de memorizar receitas e técnicas culinárias.
              Aqui, você encontrará um guia passo a passo, feito com carinho,
              para tornar o processo de cozinhar mais acessível e menos
              intimidador. Espero que este site seja uma ferramenta útil para
              você, assim como é para mim.
            </p>
          </article>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
