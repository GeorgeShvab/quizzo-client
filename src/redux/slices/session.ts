import { Action, createSlice } from '@reduxjs/toolkit'
import { SessionStatus, Stage } from '../../types'
import { RootState } from '../store'

interface SessionState {
  status: SessionStatus | null
  participantStatus: 'joined' | null
  stage: Stage
}

interface SetSessionAction extends Action {
  payload: Partial<SessionState>
}

const initialState: SessionState = {
  status: null,
  participantStatus: null,
  stage: 'session-loading',
}

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setSession: (state, action: SetSessionAction) => ({ ...state, ...action.payload }),
  },
})

export default sessionSlice.reducer
export const { setSession } = sessionSlice.actions

export const selectSession = (state: RootState) => state.session
