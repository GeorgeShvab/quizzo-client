import stages from './stages.map'

export interface Participant {
  name: string
  avatar: Avatar
  id: string
  points?: number
}

export type SessionStatus = 'opened' | 'started' | 'ended' | 'closed' | 'not-found'

export interface Question {
  title: string
  variants: string[]
  answer: number
  startedAt: number
  id: number
}

export interface Quiz {
  title: string
}

export interface Results {
  participants: Participant[]
}

export type Avatar = 'bear' | 'cat' | 'chicken' | 'koala' | 'meerkat' | 'panda' | 'rabbit' | 'dog' | 'giraffe'

export type Stage = (typeof stages)[keyof typeof stages]
