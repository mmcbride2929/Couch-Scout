import { useAppDispatch } from '../../app/hooks'
import {
  addPlayer,
  removePlayer,
} from '../../features/application/rosterListSlice'
import Button from '../Button/Button'

interface Props {
  playerData: {
    _id: string
    name: string
    position: string
    age: number
    role: string
  }
  rosterPlayer: boolean
}

const Player = ({ playerData, rosterPlayer }: Props) => {
  const { name, position, age, _id } = playerData

  const dispatch = useAppDispatch()

  const handleClick = () => {
    if (rosterPlayer) {
      dispatch(removePlayer(_id))
    }

    if (!rosterPlayer) {
      dispatch(addPlayer(_id))
    }
  }

  return (
    <div>
      <div>
        <h1>{name}</h1>
        <span>{position}</span>
      </div>
      <span>{age}</span>
      <div>
        <Button
          label={rosterPlayer ? 'Remove' : 'Add'}
          handleClick={handleClick}
        />
      </div>
    </div>
  )
}
export default Player
