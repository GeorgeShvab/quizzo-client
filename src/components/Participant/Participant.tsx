import { FC } from 'react'
import * as types from '../../types'
import Avatar from '../../ui/Avatar/Avatar'
import './style.css'

interface Props {
  name: string
  avatar: types.Avatar
}

const Participant: FC<Props> = ({ name, avatar }) => {
  return (
    <div className="participant">
      <Avatar src={`/${avatar}.png`} height="60px" width="60px" />
      <h4 className="participant__name">{name}</h4>
    </div>
  )
}

export default Participant
