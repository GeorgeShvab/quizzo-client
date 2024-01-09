import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import events from '../../events.map'
import { setParticipants } from '../../redux/slices/participants'
import { setQuestion } from '../../redux/slices/question'
import { setQuiz } from '../../redux/slices/quiz'
import { setResults } from '../../redux/slices/results'
import { setSession } from '../../redux/slices/session'
import { Participant, Question, Quiz, SessionStatus, Stage } from '../../types'
import { getWebSocket } from '../../ws'

const useSessionEvents = (sessionId: number | string) => {
  const dispath = useDispatch()

  useEffect(() => {
    const socket = getWebSocket()

    socket.on(events.RECEIVE_PARTICIPANTS, (data: Participant[]) => dispath(setParticipants(data)))
    socket.on(events.RECEIVE_SESSION_STATUS, (data: SessionStatus) => dispath(setSession({ status: data })))
    socket.on(events.RECEIVE_RESULTS, (data: Participant[]) => dispath(setResults(data)))
    socket.on(events.RECEIVE_QUESTION, (data: Question) => dispath(setQuestion(data)))
    socket.on(events.RECEIVE_QUIZ, (data: Quiz) => dispath(setQuiz(data)))
    socket.on(events.RECEIVE_CLIENT_STATUS, (data: 'joined') => dispath(setSession({ participantStatus: data })))
    socket.on(events.RECEIVE_STAGE, (data: Stage) => dispath(setSession({ stage: data })))

    socket.emit(events.GET_SESSION_STATUS, { sessionId: Number(sessionId) })

    return () => {
      socket.disconnect()
    }
  }, [])
}

export default useSessionEvents
