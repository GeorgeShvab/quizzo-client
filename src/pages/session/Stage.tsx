import { FC } from 'react'
import * as types from '../../types'
import stages from '../../stages.map'
import Countdown from '../../components/Quiz/Countdown/Countdown'
import SessionUnavailable from './SessionUnavailable'
import LoaderDisplay from '../../components/Quiz/LoaderDisplay'
import JoiningStage from '../../components/Quiz/JoiningStage/JoiningStage'
import WaitingStage from '../../components/Quiz/WaitingStage/WaitingStage'
import QuestionStage from '../../components/Quiz/QuestionStage/QuestionStage'
import ResultsStage from '../../components/Quiz/ResultsStage/ResultsStage'

interface Props {
  stage: types.Stage
}

const Stage: FC<Props> = ({ stage }) => {
  if (stage === stages.PARTICIPANT_FORM) {
    return <JoiningStage />
  } else if (stage === stages.PARTICIPANT_LIST) {
    return <WaitingStage />
  } else if (stage === stages.WAITING_FOR_START) {
    return <WaitingStage />
  } else if (stage === stages.QUESTION) {
    return <QuestionStage />
  } else if (stage === stages.RESULTS) {
    return <ResultsStage />
  } else if (stage === stages.QUIZ_COUNTDOWN) {
    return <Countdown time={10000} title="The quiz starts in" />
  } else if (stage === stages.QUESTION_COUNTDOWN) {
    return <Countdown time={10000} title="The question starts in" />
  } else if (stage === stages.RESULTS_COUNTDOWN) {
    return <Countdown time={10000} title="Results wiil be displayed in" />
  } else if (stage === 'session-closed') {
    return (
      <SessionUnavailable
        title="Session has not started yet"
        subtitle="Wait until owner opens the session"
        img="/closed-img.png"
      />
    )
  } else if (stage === 'session-ended') {
    return (
      <SessionUnavailable
        title="Session has already ended"
        subtitle="Make sure provided code is correct"
        img="/ended-img.png"
      />
    )
  } else if (stage === 'session-started') {
    return (
      <SessionUnavailable
        title="Session has already started"
        subtitle="You can not join to already started session"
        img="/running-img.png"
      />
    )
  } else if (stage === 'session-loading') {
    return <LoaderDisplay />
  } else {
    return (
      <SessionUnavailable title="Session does not exist" subtitle="Make sure provided code is correct" img="/404.png" />
    )
  }
}

export default Stage
