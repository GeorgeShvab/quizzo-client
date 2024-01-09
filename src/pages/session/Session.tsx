import { FC } from 'react'
import './style.css'
import { useParams } from 'react-router-dom'
import useMusic from './useMusic'
import useSessionEvents from './useSessionEvents'
import useStage from './useStage'
import Stage from './Stage'
import ResultsStage from '../../components/Quiz/ResultsStage/ResultsStage'

const Session: FC = () => {
  const { code } = useParams()

  useSessionEvents(code as string)
  useMusic()

  const stage = useStage()

  return <Stage stage={stage} />
}

export default Session
