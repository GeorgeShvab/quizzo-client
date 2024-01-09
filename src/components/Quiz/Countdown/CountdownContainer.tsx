import { FC } from 'react'
import './style.css'

interface Props {
  time: number
  title: string
  onEnd?: () => void
  subtitle?: string
}

const CountdownContainer: FC<Props> = ({ time, title, subtitle }) => {
  return (
    <div className="session countdown">
      <h1 className="countdown__timer">{time}</h1>
      <div className="countdown__text-container">
        <p className="countdown__title">{title}</p>
        <p className="countdown__sub-title">{subtitle}</p>
      </div>
    </div>
  )
}

export default CountdownContainer
