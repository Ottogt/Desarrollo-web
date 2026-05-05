import { useState } from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'
import AddMobileButton from './components/AddMobileButton/AddMobileButton'
import TaskForm from './components/Form/Form'
import Item from './components/Item/Item'
import Menu from './components/Menu/Menu'
import './App.scss'

function App() {
  const [showModal, setShowModal] = useState(false)

  const handleOpenModal = () => setShowModal(true)
  const handleCloseModal = () => setShowModal(false)

  return (
    <>
      <Menu />

      <Container fluid className="app-main">
        <Row>
          <Col md={6} className="d-none d-md-block">
            <TaskForm onClose={handleCloseModal} />
          </Col>

          <Col xs={12} md={6} className="tasks-column">
            <AddMobileButton
              className="d-md-none"
              onClick={handleOpenModal}
            />

            <div className="tasks-scroll">
              <Item />
              <Item />
              <Item />
            </div>
          </Col>
        </Row>
      </Container>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Nueva tarea</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TaskForm onClose={handleCloseModal} />
        </Modal.Body>
      </Modal>
    </>
  )
}

export default App
