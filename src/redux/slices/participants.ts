import { Action, createSlice } from '@reduxjs/toolkit'
import { Participant } from '../../types'
import { RootState } from '../store'

interface AddParticipantsAction extends Action {
  payload: Participant[]
}

interface RemoveParticipantsAction extends Action {
  payload: string[]
}

interface ParticipantsState {
  data: Participant[]
}

const initialState: ParticipantsState = {
  data: [],
}

const participantsSlice = createSlice({
  name: 'participants',
  initialState,
  reducers: {
    addParticipants: (state, action: AddParticipantsAction) => ({ data: [...state.data, ...action.payload] }),
    removeParticipants: (state, action: RemoveParticipantsAction) => ({
      data: state.data.filter((item) => !action.payload.includes(item.id)),
    }),
    setParticipants: (state, action: AddParticipantsAction) => ({ data: action.payload }),
  },
})

export default participantsSlice.reducer
export const { addParticipants, removeParticipants, setParticipants } = participantsSlice.actions

export const selectParticipants = (state: RootState) => state.participants
