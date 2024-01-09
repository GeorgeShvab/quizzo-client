import { FC } from 'react'
import Avatar from '../../../ui/Avatar/Avatar'
import { Participant } from '../../../types'

interface Props extends Participant {
  place: number
  className?: string
}

const Result: FC<Props> = ({ avatar, name, place, className = '' }) => {
  return (
    <div className={`participant ${className}`}>
      <p className="participant__place">{place}</p>
      <Avatar src={`/${avatar}.png`} height="60px" width="60px" />
      <h4 className="participant__name">{name}</h4>
    </div>
  )
}

export default Result
