import { useEffect, useState } from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'
import AddMobileButton from './components/AddMobileButton/AddMobileButton'
import TaskForm from './components/Form/Form'
import Item from './components/Item/Item'
import Menu from './components/Menu/Menu'
import { useGoalStore } from './store/goalStore'
import { useMenuStore } from './store/menuStore'
import { useTaskStore } from './store/taskStore'
import type { Goal, Task } from './types/entities'
import './App.scss'

const initialTasks: Task[] = [
  {
    id: 'task-seed-1',
    name: 'Tarea 1',
    description: 'Descripción 1',
    dueDate: '2026-05-15',
  },
  {
    id: 'task-seed-2',
    name: 'Tarea 2',
    description: 'Descripción 2',
    dueDate: '2026-05-16',
  },
]

const initialGoals: Goal[] = [
  {
    id: 'goal-seed-1',
    name: 'Meta 1',
    description: 'Descripción 1',
    dueDate: '2026-05-15',
  },
  {
    id: 'goal-seed-2',
    name: 'Meta 2',
    description: 'Descripción 2',
    dueDate: '2026-05-16',
  },
]

function App() {
  const [showModal, setShowModal] = useState(false)

  const active = useMenuStore((s) => s.active)
  const tasks = useTaskStore((s) => s.tasks)
  const goals = useGoalStore((s) => s.goals)
  const setTasks = useTaskStore((s) => s.setTasks)
  const setGoals = useGoalStore((s) => s.setGoals)
  const removeTask = useTaskStore((s) => s.removeTask)
  const removeGoal = useGoalStore((s) => s.removeGoal)

  useEffect(() => {
    setTasks(initialTasks)
    setGoals(initialGoals)
  }, [setTasks, setGoals])

  const handleOpenModal = () => setShowModal(true)
  const handleCloseModal = () => setShowModal(false)

  const list = active === 'task' ? tasks : goals

  const modalTitle = active === 'task' ? 'Add Task' : 'Add Goal'

  return (
    <>
      <Menu />

      <Container fluid className="app-main">
        <Row>
          <Col md={6} className="d-none d-md-block">
            <TaskForm />
          </Col>

          <Col xs={12} md={6} className="tasks-column">
            <AddMobileButton
              className="d-md-none"
              onClick={handleOpenModal}
            />

            <div className="tasks-scroll">
              {list.map((item) => (
                <Item
                  key={item.id}
                  item={item}
                  onDelete={() =>
                    active === 'task'
                      ? removeTask(item.id)
                      : removeGoal(item.id)
                  }
                />
              ))}
            </div>
          </Col>
        </Row>
      </Container>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TaskForm onClose={handleCloseModal} />
        </Modal.Body>
      </Modal>
    </>
  )
}

export default App
