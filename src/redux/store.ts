import { configureStore } from '@reduxjs/toolkit'
import participants from './slices/participants'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import question from './slices/question'
import quiz from './slices/quiz'
import session from './slices/session'

const store = configureStore({
  reducer: {
    participants,
    question,
    session,
    quiz,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

type DispatchFunc = () => AppDispatch
export const useAppDispatch: DispatchFunc = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store
