import { Outlet } from "react-router-dom";
import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export default function Navbar1() {
  return (
    <>
      <Navbar className="nav" bg="prop" variant="dark">
        <Container>
          <Navbar.Brand className="navtext">
            <span>C</span>ine<span>F</span>licks
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/movie">Movies</Nav.Link>
            <Nav.Link href="/AboutUs">AboutUs</Nav.Link>
            <Nav.Link href="/home"> <Link className="docs" to="/Documentation/CineFlicks_Documentation.pdf" target="_blank" download>Documentation</Link> </Nav.Link>
          </Nav>
        </Container>
      </Navbar >
      <Outlet />
    </>
  );
}
