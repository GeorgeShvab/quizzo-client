import { FC } from 'react'
import Button from '../../ui/Button/Button'
import './style.css'
import WelcomeImage from '../../assets/welcome-img.png'

const Index: FC = () => {
  return (
    <div className="session-layout">
      <div className="session-layout__content-block">
        <img src={WelcomeImage} width="100%" />
      </div>
      <form className="session-layout__secondary-block">
        <h1 className="session-layout__title">Welcome To Quizzo</h1>
        <p className="session-layout__sub-title">Join the quiz or create new one</p>
        <Button className="join-button" href="/join">
          Join Quiz
        </Button>
        <Button color="grey">Create Quiz</Button>
      </form>
    </div>
  )
}

export default Index
