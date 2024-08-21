// Componentes React
import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

//Componente CSS
import "../AboutUs/AboutUs.css";

//Componente Imagem
import LogoAboutUs from "../../assets/hero-img.jpg";

const AboutUs = () => {
  return (
    <Container>
      <h1 className="about-us-title">Sobre Nós</h1>
      <Row className="align-items-center">
        <Col md={4}>
          <Image
            src={LogoAboutUs}
            alt="Niccolas Cente"
            roundedCircle
            fluid
          />
        </Col>
        <Col md={8}>
          <article>
            <p className="about-us-paragraph">
              Olá, me chamo Niccolas Cente, desenvolvedor web, e aprendi a
              cozinhar apenas na vida adulta. Sempre achei que não tinha
              capacidade para cozinhar devido a dificuldades de memorização e ao
              TDAH (Transtorno do Déficit de Atenção e Hiperatividade). Foi
              pensando em pessoas com dificuldades semelhantes, que enfrentam
              desafios na cozinha ou que estão começando agora, que desenvolvi
              este site.
            </p>
            <p className="about-us-paragraph">
              Este projeto é especialmente voltado para aqueles que têm
              dificuldades de atenção e memorização, oferecendo um guia passo a
              passo e dicas práticas para tornar o processo culinário mais
              acessível e menos estressante. Espero que este site seja uma
              ferramenta útil e encorajadora para você, assim como foi para mim.
            </p>
          </article>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
