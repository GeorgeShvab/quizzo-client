const stages = {
  WAITING_FOR_START: 'waiting-for-start',
  PARTICIPANT_LIST: 'participant-list',
  PARTICIPANT_FORM: 'participant-form',
  RESULTS: 'results',
  RESULTS_COUNTDOWN: 'results-countdown',
  QUIZ_COUNTDOWN: 'quiz-countdown',
  QUESTION: 'question',
  QUESTION_COUNTDOWN: 'question-countdown',
  SESSION_NOT_FOUND: 'session-not-found',
  SESSION_IS_ENDED: 'session-ended',
  SESSION_IS_CLOSED: 'session-closed',
  SESSION_HAS_STARTED: 'session-started',
  SESSION_IS_LOADING: 'session-loading',
} as const

export default stages
