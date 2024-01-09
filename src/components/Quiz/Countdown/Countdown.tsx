import { FC } from 'react'
import CountdownContainer from './CountdownContainer'
import useTimer from '../../../hooks/useTimer'

interface Props {
  onEnd?: () => void
  time: number
  title: string
  subtitle?: string
}

const Countdown: FC<Props> = (props) => {
  const time = useTimer(props.time)

  const timer = Math.round(time / 1000)

  return <CountdownContainer {...props} time={timer >= 0 ? timer : 0} />
}

export default Countdown
