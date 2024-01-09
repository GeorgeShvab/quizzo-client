import { FC, useState } from 'react'
import './style.css'
import * as types from '../../../types'
import useTimer from '../../../hooks/useTimer'
import UnsubmittedQuestion from './Unsubmitted'
import CountdownContainer from '../Countdown/CountdownContainer'

interface Props extends types.Question {
  onSubmit: (position: number) => void
}

const Question: FC<Props> = (props) => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

  const time = useTimer(60000)

  const handleSubmit = (position: number) => {
    setIsSubmitted(true)
    props.onSubmit(position)
  }

  const timer = Math.round(time / 1000)

  if (isSubmitted) {
    return (
      <CountdownContainer
        time={timer >= 0 ? timer : 0}
        title="Wait until all participants answer or time runs out"
        subtitle="Time left"
      />
    )
  }

  return <UnsubmittedQuestion {...props} onSubmit={handleSubmit} time={timer >= 0 ? timer : 0} />
}

export default Question
