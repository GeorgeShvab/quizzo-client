import { FC } from 'react'
import { selectParticipants } from '../../../redux/slices/participants'
import { useAppSelector } from '../../../redux/store'
import Button from '../../../ui/Button/Button'
import './style.css'
import Result from './Result'

const ResultsStage: FC = () => {
  const { data } = useAppSelector(selectParticipants)

  return (
    <div className="session-layout">
      <div className="session-layout__content-block participants__container">
        {data
          .sort((a, b) => (a.points || 0) - (b.points || 0))
          .map((item, index) => (
            <Result
              key={item.id}
              place={index + 1}
              className={
                index === 0 ? 'first-place' : index === 1 ? 'second-place' : index === 2 ? 'third-place' : undefined
              }
              {...item}
            />
          ))}
      </div>
      <div className="session-layout__secondary-block">
        <h1 className="session-layout__title">Results</h1>
        <p className="session-layout__sub-title">Good game!</p>
        <Button href="/">Leave</Button>
      </div>
    </div>
  )
}

export default ResultsStage
