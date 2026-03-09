import React from "react";
import { Container, Navbar } from "react-bootstrap";

function NavbarComp() {
  return (
    <div>
      <Navbar className="bg-secondary">
        <Container>
          <Navbar.Brand>Products</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComp;
