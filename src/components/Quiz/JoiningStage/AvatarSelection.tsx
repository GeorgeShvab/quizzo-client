import { FC } from 'react'
import * as types from '../../../types'
import Avatar from '../../../ui/Avatar/Avatar'

interface Props {
  selectedAvatar: types.Avatar | undefined
  setAvatar: (arg: types.Avatar) => void
}

const avatras: types.Avatar[] = ['bear', 'cat', 'rabbit', 'chicken', 'dog', 'giraffe', 'meerkat', 'panda', 'koala']

const AvatarSelection: FC<Props> = ({ selectedAvatar, setAvatar }) => {
  return (
    <div className="avatars">
      {avatras.map((item, index) => (
        <Avatar
          key={index}
          src={`/${item}.png`}
          className={item === selectedAvatar ? 'selected' : ''}
          onClick={() => setAvatar(item)}
        />
      ))}
    </div>
  )
}

export default AvatarSelection
