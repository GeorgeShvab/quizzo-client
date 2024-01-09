import { Action, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { Quiz } from '../../types'

interface QuizState {
  data: Quiz | null
}

interface SetQuizAction extends Action {
  payload: Quiz
}

const initialState: QuizState = {
  data: null,
}

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setQuiz: (state, action: SetQuizAction) => ({ data: action.payload }),
  },
})

export default quizSlice.reducer
export const { setQuiz } = quizSlice.actions

export const selectQuiz = (state: RootState) => state.quiz
