import { selectSession } from '../../redux/slices/session'
import { useAppSelector } from '../../redux/store'

const useStage = () => {
  const { stage } = useAppSelector(selectSession)

  return stage
}

export default useStage
