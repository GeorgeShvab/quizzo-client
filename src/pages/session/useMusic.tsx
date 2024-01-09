import { useEffect, useRef } from 'react'

const useMusic = () => {
  const music = useRef<HTMLAudioElement>()

  useEffect(() => {
    if (!music.current) {
      music.current = new Audio('/music.mp3')

      music.current.play()
      music.current.loop = true
    }
  })

  useEffect(() => {
    return () => music.current?.pause()
  }, [])
}

export default useMusic
