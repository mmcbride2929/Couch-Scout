import { useAppDispatch, useAppSelector } from '../../app/hooks'
import {
  addPlayer,
  removePlayer,
  selectRosterList,
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
    <div>
      {rosterPlayer ? (
        <h1>{rosterName[0].charAt(0) + '. ' + rosterName[1]}</h1>
      ) : (
        <>
          <h1>{name}</h1>
          <span>{position}</span>
          <span>{age}</span>
        </>
      )}
      <Button
        label={rosterPlayer ? 'Remove' : 'Add'}
        handleClick={handleClick}
        disabled={disabled}
      />
    </div>
  )
}
export default Player
