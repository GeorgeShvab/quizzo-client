import { FC, FormEvent, useState } from 'react'
import { Question } from '../../../types'
import Button from '../../../ui/Button/Button'
import Variant from '../../Variant/Variant'

interface Props extends Question {
  onSubmit: (position: number) => void
  time: number
}

const UnsubmittedQuestion: FC<Props> = ({ onSubmit, time, variants, title }) => {
  const [selectedVariant, setSelectedVariant] = useState<number>()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    selectedVariant !== undefined && onSubmit(selectedVariant)
  }

  return (
    <form className="session-layout" onSubmit={handleSubmit}>
      <div className="session-layout__content-block variants">
        {variants.map((item, index) => (
          <Variant
            key={index}
            text={item}
            onClick={() => setSelectedVariant(index)}
            className={index === selectedVariant ? 'selected' : ''}
          />
        ))}
      </div>
      <div className="session-layout__secondary-block">
        <h1 className="session-layout__title">{title}</h1>
        <p className="session-layout__sub-title">You have {time} seconds to answer</p>
        <Button disabled={selectedVariant === undefined}>Submit</Button>
      </div>
    </form>
  )
}

export default UnsubmittedQuestion
