import { FC } from 'react'
import Button from '../../ui/Button/Button'

interface Props {
  img: string
  title: string
  subtitle: string
}

const SessionUnavailable: FC<Props> = ({ title, subtitle, img }) => {
  return (
    <div className="session-layout">
      <div className="session-layout__content-block session-layout__image-container">
        <img src={img} width="100%" className="status-info__img" />
      </div>
      <div className="session-layout__secondary-block">
        <h1 className="session-layout__title">{title}</h1>
        <p className="session-layout__sub-title">{subtitle}</p>
        <Button href="/join">Back</Button>
      </div>
    </div>
  )
}

export default SessionUnavailable
