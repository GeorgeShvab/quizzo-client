import { Action, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { Question } from '../../types'

interface QuestionState {
  data: Question | null
}

interface SetQuestionAction extends Action {
  payload: Question
}

const initialState: QuestionState = {
  data: null,
}

const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    setQuestion: (state, action: SetQuestionAction) => ({ data: action.payload }),
  },
})

export default questionSlice.reducer
export const { setQuestion } = questionSlice.actions

export const selectQuestion = (state: RootState) => state.question
