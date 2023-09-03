import { Button, Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <Container>
      <div className="text-center">
        <img src={logo} alt="" />
        <p className="text-secondary">
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="d-flex">
        <Button variant="danger">Latesst</Button>
        <Marquee speed={100}>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>

      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="bg-body-tertiary"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#career">Career</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#profile">Profile</Nav.Link>
              <Nav.Link
                className="bg-secondary rounded text-white"
                eventKey={2}
                href="#login"
              >
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
