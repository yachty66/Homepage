import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./css/Header.css";

function Header() {
  return (
    <>
      <Navbar bg="blue" variant="dark" className="navbar">
        <Container className="navbar-container">
          <Navbar.Brand href="#home" className="brand-name">
            Home
          </Navbar.Brand>
          <Nav>
            <a className="categorie">hallo</a>

            <Nav.Link href="#pricing" className="categorie">
              Pricing
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
