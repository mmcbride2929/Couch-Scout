import { useAppSelector } from '../../app/hooks'
import { selectRosterList } from '../../features/application/rosterListSlice'
import './RosterHeader.scss'

const RosterHeader = () => {
  const rosterListArr = useAppSelector(selectRosterList) as string[]

  return (
    <div className="playertotal-container">
      <h1>Roster Players</h1>
      <h1>
        <span>{rosterListArr.length}</span>/53
      </h1>
    </div>
  )
}
export default RosterHeader
