import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "../../assets/Coffee_Logo.png";

const Menu = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <img
            src={logo}
            alt="logo Rolling Coffee"
            className="img-fluid"
            width={150}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#">Inicio</Nav.Link>
            <Nav.Link href="#">Administrador</Nav.Link>
            <Nav.Link href="#">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
