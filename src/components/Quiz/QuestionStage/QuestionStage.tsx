import { FC } from 'react'
import { useAppSelector } from '../../../redux/store'
import { selectQuestion } from '../../../redux/slices/question'
import Question from './Question'
import { getWebSocket } from '../../../ws'
import events from '../../../events.map'

const QuestionStage: FC = () => {
  const { data } = useAppSelector(selectQuestion)

  if (!data) return null

  const handleSubmitAnswer = (position: number) => {
    const socket = getWebSocket()

    socket.emit(events.SEND_ANSWER, { questionId: data.id, answer: position })
  }

  return <Question {...data} onSubmit={handleSubmitAnswer} />
}

export default QuestionStage
