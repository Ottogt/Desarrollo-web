import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import './Item.scss'

export default function Item() {
  return (
    <Card className="item-card">
      <Card.Body>
        <Card.Title>Lavar los platos</Card.Title>
        <Card.Text>
          Tarea del hogar para mantener el orden de la cocina.
        </Card.Text>
        <Card.Text className="item-date">
          Fecha de vencimiento: 10/05/2026
        </Card.Text>
        <Button variant="info" className="item-delete-btn">
          Eliminar
        </Button>
      </Card.Body>
    </Card>
  )
}
