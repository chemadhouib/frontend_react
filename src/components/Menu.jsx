import React from 'react'
import { Nav ,Navbar , Container, Form,FormControl,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand> Gestion Commeriale </Navbar.Brand>
        <Nav className='me-auto'> 
            <Nav.Link as={Link} to="/categories"> Catégories </Nav.Link>
            <Nav.Link as={Link} to="/categories"> Sous Catégories </Nav.Link>
            <Nav.Link as={Link} to="/categories"> Liste des Articles </Nav.Link>
        </Nav>
      </Container>
      <Form className="d-flex">
        <FormControl
        type = "search"
        placeholder='Search'
        className='me-2'
        aria-label='Search'/>
        <Button variant='success'> Chercher </Button>
      </Form>
    </Navbar>
  )
}

export default Menu
