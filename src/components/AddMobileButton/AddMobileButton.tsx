import Button from 'react-bootstrap/Button'
import './AddMobileButton.scss'

export interface AddMobileButtonProps {
  onClick?: () => void
  className?: string
}

export default function AddMobileButton({ onClick, className }: AddMobileButtonProps) {
  return (
    <Button
      type="button"
      className={`add-mobile-btn btn-lavender ${className ?? ''}`}
      onClick={onClick}
      aria-label="Agregar tarea"
    >
      +
    </Button>
  )
}
