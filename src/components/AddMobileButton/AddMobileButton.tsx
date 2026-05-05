import Button from 'react-bootstrap/Button'
import './AddMobileButton.scss'

export interface AddMobileButtonProps {
  onClick?: () => void
  className?: string
}

export default function AddMobileButton({ onClick, className }: AddMobileButtonProps) {
  return (
    <Button
      variant="success"
      type="button"
      className={`add-mobile-btn ${className ?? ''}`}
      onClick={onClick}
      aria-label="Agregar tarea"
    >
      +
    </Button>
  )
}
