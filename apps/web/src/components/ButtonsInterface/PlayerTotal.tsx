import { useAppSelector } from '../../app/hooks'
import { selectRosterList } from '../../features/application/rosterListSlice'

const PlayerTotal = () => {
  const rosterListArr = useAppSelector(selectRosterList) as string[]

  return (
    <div>
      <h1>
        Roster 0/<span>{rosterListArr.length}</span>
      </h1>
    </div>
  )
}
export default PlayerTotal
