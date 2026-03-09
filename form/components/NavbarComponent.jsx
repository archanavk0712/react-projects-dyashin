import React, { useState } from "react";
import { Container, Navbar, Form, Button } from "react-bootstrap";

function NavBarComponent({searchTerm, setSearchTerm}) {
   return (
    <div>
      <Navbar className="bg-primary">
        <Container className="d-flex justify-content-between">
          <Navbar.Brand className="text-white">DS Yathra</Navbar.Brand>

          <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="Search Employee..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}   // live search
            />
            <Button variant="light" className="ms-2" type="button">
              Search
            </Button>
          </Form>
        </Container>
      </Navbar>
    </div>
  );
}


export default NavBarComponent
