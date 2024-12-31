import { Container, Navbar, Nav, Button } from "react-bootstrap";
import logo from "../../assets/Coffee_Logo.png";
import { NavLink, Link, useNavigate } from "react-router";

const Menu = ({ usuarioLogueado, setUsuarioLogueado }) => {
  const navegacion = useNavigate()

 const logout = ()=>{
  sessionStorage.removeItem('userKey');
  setUsuarioLogueado('')
  navegacion('/')
 }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to={"/"} className="navbar-brand">
          <img
            src={logo}
            alt="logo Rolling Coffee"
            className="img-fluid"
            width={150}
          />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink end className="nav-link" to={"/"}>
              Inicio
            </NavLink>
            {usuarioLogueado.length > 0 ? (
              <>
                <NavLink end className="nav-link" to={"/administrador"}>
                  Administrador
                </NavLink>
                <Button className='nav-link' onClick={logout}>Logout</Button>
              </>
            ) : (
              <NavLink end className="nav-link" to={"/login"}>
                Login
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
