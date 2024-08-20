//Components React/Bootstrap
import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FaInstagram, FaGithub, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

//Componente CSS
import '../Footer/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <div className="social-links">
              <FaInstagram size={24} className="icon" />
              <span>Nos Siga nas Redes Sociais</span>
            </div>
          </Col>
          <Col md={6} className="text-end">
            <div className="info">
              <p className="mb-0">Desenvolvido por: Niccolas Cente</p>
              <Nav>
                <Nav.Link href="https://github.com/NiccolasCente" target="_blank" className="icon">
                  <FaGithub size={24} />
                </Nav.Link>
                <Nav.Link href="https://wa.me/11934747011" target="_blank" className="icon">
                  <FaWhatsapp size={24} />
                </Nav.Link>
                <Nav.Link href="mailto:niccolas.dev@hotmail.com" className="icon">
                  <FaEnvelope size={24} />
                </Nav.Link>
              </Nav>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
