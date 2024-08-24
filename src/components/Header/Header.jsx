//Componentes React
import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button, Dropdown } from "react-bootstrap";
import SearchLogic from "../SearchLogic/SearchLogic";

//Componentes CSS
import "../Header/Header.css";

////Componentes Imagens
import LogoHeader from "../../assets/receitas_iniciantes_logo.png";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");
  const location = useLocation();

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSubmittedQuery(searchQuery.trim().toLowerCase());
    }
  };

  useEffect(() => {
    if (location.pathname === '/') {
      setSubmittedQuery("");
    } else {
      setSearchQuery("");
      setSubmittedQuery("");
    }
  }, [location]);

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
            <Nav.Link as={NavLink} to="/sobrenos">
              Sobre Nós
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="form-container">
        <Form className="d-flex search-form" onSubmit={handleSearch}>
          <FormControl
            type="search"
            placeholder="Procure uma receita ou prato"
            className="search-input"
            aria-label="Search"
            value={searchQuery}
            onChange={handleInputChange}
          />
          <Button variant="outline-success" className="search-button" type="submit">
            Procurar
          </Button>
        </Form>
      </div>

      {submittedQuery && <SearchLogic query={submittedQuery} />}

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

          <Dropdown as={Nav.Item} className="nav-link-dropdown">
            <Dropdown.Toggle
              as={NavLink}
              to="/peixes"
              className="nav-link"
              id="dropdown-peixes"
            >
              Peixes
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={NavLink} to="/peixes/peixe-tilapia">
                Tilápia
              </Dropdown.Item>
              <Dropdown.Item as={NavLink} to="/peixes/peixe-bacalhau">
                Bacalhau
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown as={Nav.Item} className="nav-link-dropdown">
            <Dropdown.Toggle
              as={NavLink}
              to="/sopas"
              className="nav-link"
              id="dropdown-sopas"
            >
              Sopas
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={NavLink} to="/sopas/caldo-verde">
                Caldo Verde
              </Dropdown.Item>
              <Dropdown.Item as={NavLink} to="/sopas/sopa-de-legumes">
                Sopa de Legumes
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown as={Nav.Item} className="nav-link-dropdown">
            <Dropdown.Toggle
              as={NavLink}
              to="/macarrao"
              className="nav-link"
              id="dropdown-macarrao"
            >
              Macarrão
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={NavLink} to="/macarrao/macarrao-espaguete-ao-molho">
                Macarrão ao Molho
              </Dropdown.Item>
              <Dropdown.Item as={NavLink} to="/macarrao/macarrao-espaguete-ao-pesto">
                Macarrão ao Pesto
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown as={Nav.Item} className="nav-link-dropdown">
            <Dropdown.Toggle
              as={NavLink}
              to="/doces"
              className="nav-link"
              id="dropdown-doces"
            >
              Doces e Sobremesas
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={NavLink} to="/doces/brigadeiro">
                Brigadeiro
              </Dropdown.Item>
              <Dropdown.Item as={NavLink} to="/doces/pudim">
                Pudim
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown as={Nav.Item} className="nav-link-dropdown dropdown-bebidas">
            <Dropdown.Toggle
              as={NavLink}
              to="/bebidas"
              className="nav-link"
              id="dropdown-bebidas"
            >
              Bebidas
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={NavLink} to="/bebidas/suco-de-laranja">
                Suco de Laranja
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Navbar>
    </header>
  );
};

export default Header;
