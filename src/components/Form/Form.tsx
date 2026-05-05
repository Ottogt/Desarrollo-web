import { useRef } from 'react'
import Button from 'react-bootstrap/Button'
import RBForm from 'react-bootstrap/Form'
import type { FormEvent } from 'react'
import { useGoalStore } from '../../store/goalStore'
import { useMenuStore } from '../../store/menuStore'
import { useTaskStore } from '../../store/taskStore'
import './Form.scss'

export interface TaskFormProps {
  onClose?: () => void
}

function newId(): string {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID()
  }
  return String(Date.now())
}

export default function TaskForm({ onClose }: TaskFormProps) {
  const nameRef = useRef<HTMLInputElement>(null)
  const descriptionRef = useRef<HTMLTextAreaElement>(null)
  const dueDateRef = useRef<HTMLInputElement>(null)

  const active = useMenuStore((s) => s.active)
  const addTask = useTaskStore((s) => s.addTask)
  const addGoal = useGoalStore((s) => s.addGoal)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const name = nameRef.current?.value.trim() ?? ''
    const description = descriptionRef.current?.value.trim() ?? ''
    const dueDate = dueDateRef.current?.value.trim() ?? ''

    if (!name || !description || !dueDate) return

    const payload = {
      id: newId(),
      name,
      description,
      dueDate,
    }

    if (active === 'task') {
      addTask(payload)
    } else {
      addGoal(payload)
    }

    if (nameRef.current) nameRef.current.value = ''
    if (descriptionRef.current) descriptionRef.current.value = ''
    if (dueDateRef.current) dueDateRef.current.value = ''

    onClose?.()
  }

  const submitLabel = active === 'task' ? 'Add Task' : 'Add Goal'

  return (
    <RBForm className="task-form" onSubmit={handleSubmit}>
      <RBForm.Group className="mb-3" controlId="goalName">
        <RBForm.Label>Name</RBForm.Label>
        <RBForm.Control ref={nameRef} type="text" />
      </RBForm.Group>

      <RBForm.Group className="mb-3" controlId="goalDescription">
        <RBForm.Label>Description</RBForm.Label>
        <RBForm.Control ref={descriptionRef} as="textarea" rows={3} />
      </RBForm.Group>

      <RBForm.Group className="mb-3" controlId="goalDueDate">
        <RBForm.Label>Due Date</RBForm.Label>
        <RBForm.Control ref={dueDateRef} type="date" />
      </RBForm.Group>

      <Button type="submit" className="btn-lavender task-form__submit">
        {submitLabel}
      </Button>
    </RBForm>
  )
}
