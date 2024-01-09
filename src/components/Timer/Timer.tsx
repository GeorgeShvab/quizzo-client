import { FC, useEffect, useMemo, useRef, useState } from 'react'

interface Props {
  end?: number
}

const Timer: FC<Props> = ({ end = 60 }) => {
  const [time, setTime] = useState<number>(0)
  const timer = useMemo(
    () =>
      setInterval(() => {
        setTime((prev) => prev + 1)
      }, 1000),
    []
  )

  useEffect(() => {
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (time > 60) {
      clearInterval(timer)
    }
  }, [time])

  return (
    <div className="timer-bg">
      <div className="timer">
        <div className="timer-mask" style={{ width: (100 / end) * time + '%' }}></div>
      </div>
    </div>
  )
}

export default Timer
