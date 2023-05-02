import { useAppDispatch, useAppSelector } from '../../app/hooks'
import {
  addPlayer,
  removePlayer,
  selectRosterList,
} from '../../features/application/rosterListSlice'
import Button from '../Button/Button'
import './Player.scss'

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
  const rosterListArr = useAppSelector(selectRosterList)

  const handleClick = () => {
    if (rosterPlayer) {
      dispatch(removePlayer(_id))
    }

    if (!rosterPlayer) {
      dispatch(addPlayer(_id))
    }
  }

  const disabled = rosterListArr.length >= 53 && !rosterPlayer ? true : false

  const rosterName = name.split(' ')

  return (
    <div className="player-container">
      <div className="player-info-container">
        <h1 className="name">{name}</h1>
        <h1 className="position">
          {position === 'Special Teams' ? 'SPT' : position}
        </h1>
        <h1 className="age">{age}</h1>
      </div>

      <div className="button-container">
        <Button
          label={rosterPlayer ? 'Remove' : 'Add'}
          handleClick={handleClick}
          disabled={disabled}
        />
      </div>
    </div>
  )
}
export default Player
