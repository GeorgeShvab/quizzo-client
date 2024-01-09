import { useState, useEffect } from 'react'

const useTimer = (ms: number) => {
  const [time, setTime] = useState<number>(ms)

  useEffect(() => {
    const timer = setInterval(() => setTime((prev) => prev - 1000), 1000)

    return () => clearInterval(timer)
  }, [])

  return time
}

export default useTimer
