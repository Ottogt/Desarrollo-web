import Button from 'react-bootstrap/Button'
import RBForm from 'react-bootstrap/Form'
import type { FormEvent } from 'react'
import './Form.scss'

export interface TaskFormProps {
  onClose?: () => void
}

export default function TaskForm({ onClose }: TaskFormProps) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onClose?.()
  }

  return (
    <RBForm className="task-form" onSubmit={handleSubmit}>
      <RBForm.Group className="mb-3" controlId="taskName">
        <RBForm.Label>Nombre de la tarea</RBForm.Label>
        <RBForm.Control type="text" placeholder="Ej. Estudiar React" />
      </RBForm.Group>

      <RBForm.Group className="mb-3" controlId="taskDescription">
        <RBForm.Label>Descripción</RBForm.Label>
        <RBForm.Control as="textarea" rows={3} placeholder="Detalle de la tarea" />
      </RBForm.Group>

      <RBForm.Group className="mb-3" controlId="taskDueDate">
        <RBForm.Label>Fecha límite</RBForm.Label>
        <RBForm.Control type="date" />
      </RBForm.Group>

      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </RBForm>
  )
}
