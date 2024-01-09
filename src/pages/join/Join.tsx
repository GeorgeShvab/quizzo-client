import { FC, FormEvent } from 'react'
import Button from '../../ui/Button/Button'
import './style.css'
import JoinImage from '../../assets/join-img.png'
import Input from '../../ui/Input/Input'
import { useNavigate } from 'react-router-dom'

const Join: FC = () => {
  const navigate = useNavigate()

  const handleSubmit = (e: FormEvent<HTMLFormElement> & { target: { code: HTMLInputElement } }) => {
    e.preventDefault()

    navigate('/session/' + e.target.code.value)
  }

  return (
    <div className="session-layout">
      <div className="session-layout__content-block join__image-container">
        <img src={JoinImage} width="100%" />
      </div>
      <form className="session-layout__secondary-block" onSubmit={handleSubmit}>
        <h1 className="session-layout__title">Provide session code to join the quiz</h1>
        <p className="session-layout__sub-title">Session code can be obtained from organizator</p>
        <Input className="join-input" name="code" maxLength={4} />
        <Button>Join</Button>
      </form>
    </div>
  )
}

export default Join
