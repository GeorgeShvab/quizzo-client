import { FC, FormEvent, useState } from 'react'
import AvatarSelection from './AvatarSelection'
import { Avatar } from '../../../types'
import Button from '../../../ui/Button/Button'
import Input from '../../../ui/Input/Input'
import './style.css'
import { getWebSocket } from '../../../ws'

const JoiningStage: FC = () => {
  const [selectedAvatar, setSelectedAvatar] = useState<Avatar>()

  const handleSubmit = (e: FormEvent<HTMLFormElement> & { target: { name: HTMLInputElement } }) => {
    e.preventDefault()

    const socket = getWebSocket()

    socket.emit('join', { avatar: selectedAvatar, name: e.target.name.value })
  }

  return (
    <form className="session-layout" onSubmit={handleSubmit}>
      <div className="session-layout__content-block">
        <AvatarSelection selectedAvatar={selectedAvatar} setAvatar={setSelectedAvatar} />
      </div>
      <div className="session-layout__secondary-block">
        <h1 className="session-layout__title">Choose avatar and write your nickname</h1>
        <p className="session-layout__sub-title">Name</p>
        <div>
          <Input name="name" placeholder="Bob" className="joining__name-input" />
          <Button disabled={selectedAvatar === undefined}>Done</Button>
        </div>
      </div>
    </form>
  )
}

export default JoiningStage
