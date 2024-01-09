import { ReactElement, FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
import './style.css'
import { Link } from 'react-router-dom'

interface Props {
  children: string | ReactElement
  color?: 'purple' | 'grey'
  className?: string
  href?: string
}

type ComponentProps = Props & (ButtonHTMLAttributes<HTMLButtonElement> | AnchorHTMLAttributes<HTMLAnchorElement>)

const Button: FC<ComponentProps> = ({ children, href, color = 'purple', className = '', ...rest }) => {
  if (href) {
    return (
      <Link className={`button ${color} ${className}`} to={href} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    )
  }

  return (
    <button className={`button ${color} ${className}`} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}

export default Button
