import { FC, InputHTMLAttributes } from 'react'
import './style.css'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

const Input: FC<Props> = ({ className = '', ...rest }) => {
  return <input className={`input ${className}`} {...rest} />
}

export default Input
