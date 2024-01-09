import { FC } from 'react'
import { selectParticipants } from '../../../redux/slices/participants'
import { useAppSelector } from '../../../redux/store'
import Button from '../../../ui/Button/Button'
import Participant from '../../Participant/Participant'
import './style.css'

const WaitingStage: FC = () => {
  const { data } = useAppSelector(selectParticipants)

  return (
    <div className="session-layout">
      <div className="session-layout__content-block participants__container">
        {data.map((item, index) => (
          <Participant key={index} {...item} />
        ))}
      </div>
      <div className="session-layout__secondary-block">
        <h1 className="session-layout__title">
          Waiting for other participants
          <span className="loading-dots">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </span>
        </h1>
        <p className="session-layout__sub-title">
          {data.length === 1 ? '1 participant has already joined' : data.length + ' participants have already joined'}
        </p>
        <Button href="/">Leave</Button>
      </div>
    </div>
  )
}

export default WaitingStage
