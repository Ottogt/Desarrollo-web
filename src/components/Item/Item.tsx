import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import type { Task } from '../../types/entities'
import './Item.scss'

function formatDueDate(value: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value.trim())
  if (m) return `${m[3]}/${m[2]}/${m[1]}`
  return value
}

export interface ItemProps {
  item: Task
  onDelete: () => void
}

export default function Item({ item, onDelete }: ItemProps) {
  return (
    <Card className="item-card">
      <Card.Body>
        <Card.Title className="item-card__title">{item.name}</Card.Title>
        <p className="item-card__label">Descripción</p>
        <p className="item-card__value">{item.description}</p>
        <p className="item-card__label">Fecha de Vencimiento</p>
        <p className="item-card__value item-card__value--date">
          {formatDueDate(item.dueDate)}
        </p>
        <Button
          type="button"
          className="btn-lavender item-delete-btn"
          onClick={(e) => {
            e.stopPropagation()
            onDelete()
          }}
        >
          Eliminar
        </Button>
      </Card.Body>
    </Card>
  )
}
