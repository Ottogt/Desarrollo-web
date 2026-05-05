import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { useMenuStore } from '../../store/menuStore'
import './Menu.scss'

export default function Menu() {
  const active = useMenuStore((s) => s.active)
  const setActive = useMenuStore((s) => s.setActive)

  return (
    <Navbar expand="md" className="app-navbar" variant="dark">
      <Container fluid>
        <Navbar.Brand className="app-navbar__brand" href="#">
          React-Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar-nav" />
        <Navbar.Collapse id="main-navbar-nav">
          <Nav
            className="ms-auto"
            activeKey={active}
            onSelect={(k) => {
              if (k === 'task' || k === 'goals') setActive(k)
            }}
          >
            <Nav.Link eventKey="task">Tareas</Nav.Link>
            <Nav.Link eventKey="goals">Metas</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
