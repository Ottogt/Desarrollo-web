import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import './Menu.scss'

export default function Menu() {
  return (
    <Navbar expand="md" className="app-navbar" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#">To Do List</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar-nav" />
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#tareas">Tareas</Nav.Link>
            <Nav.Link href="#metas">Metas</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
