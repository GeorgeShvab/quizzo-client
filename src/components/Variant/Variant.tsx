import { FC, MouseEvent } from 'react'
import './style.css'

interface Props {
  onClick?: (e: MouseEvent) => void
  className?: string
  text: string
}

const Variant: FC<Props> = ({ text, onClick, className = '' }) => {
  return (
    <div className={`variant ${className}`} onClick={onClick}>
      <div className="variant__text-container">
        <p className="variant__text">{text}</p>
      </div>
    </div>
  )
}

export default Variant
