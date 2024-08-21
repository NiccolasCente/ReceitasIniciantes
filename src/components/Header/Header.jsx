import React from "react";
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button, Dropdown } from "react-bootstrap";

// Componentes CSS
import "../Header/Header.css";

// Componentes Imagens
import LogoHeader from "../../assets/receitas_iniciantes_logo.png";

const Header = () => {
  return (
    <header>
      <Navbar expand="lg" className="header-navbar mb-2">
        <div className="logo-container">
          <Navbar.Brand as={Link} to="/" className="logo">
            <img src={LogoHeader} alt="Logo" />
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto header-nav">
            <Nav.Link as={NavLink} to="/" end>
              Início
            </Nav.Link>
            <Nav.Link as={NavLink} to="/sobrenós">
              Sobre Nós
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="form-container">
        <Form className="d-flex search-form">
          <FormControl
            type="search"
            placeholder="Procure uma receita ou prato"
            className="search-input"
            aria-label="Search"
          />
          <Button variant="outline-success" className="search-button">
            Procurar
          </Button>
        </Form>
      </div>

      <Navbar bg="dark" variant="dark" expand="lg">
        <Nav className="container-fluid">
          <Dropdown as={Nav.Item} className="nav-link-dropdown">
            <Dropdown.Toggle
              as={NavLink}
              to="/arroz"
              className="nav-link"
              id="dropdown-arroz"
            >
              Arroz
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={NavLink} to="/arroz/arroz-branco">
                Arroz Branco
              </Dropdown.Item>
              <Dropdown.Item as={NavLink} to="/arroz/arroz-integral">
                Arroz Integral
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown as={Nav.Item} className="nav-link-dropdown">
            <Dropdown.Toggle
              as={NavLink}
              to="/carnes"
              className="nav-link"
              id="dropdown-carnes"
            >
              Carnes
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={NavLink} to="/carnes/picanha">
              Picanha
              </Dropdown.Item>
              <Dropdown.Item as={NavLink} to="/carnes/frango">
              Frango
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Nav.Link as={NavLink} to="/peixes" className="nav-link">Peixes</Nav.Link>
          <Nav.Link as={NavLink} to="/sopas" className="nav-link">Sopas</Nav.Link>
          <Nav.Link as={NavLink} to="/macarrao" className="nav-link">Macarrão</Nav.Link>
          <Nav.Link as={NavLink} to="/doces" className="nav-link">Doces e Sobremesas</Nav.Link>
          <Nav.Link as={NavLink} to="/bebidas" className="nav-link">Bebidas</Nav.Link>
        </Nav>
      </Navbar>
    </header>
  );
};

export default Header;
