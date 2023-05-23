import Searchbar from '../SearchBar/SearchBar'
import { useAppSelector } from '../../../app/hooks'
import { selectRosterList } from '../../../features/application/rosterListSlice'
import './FunctionalityBar.scss'
import { resetRoster } from '../../../features/application/rosterListSlice'
import { useAppDispatch } from '../../../app/hooks'
import FilterBySelect from '../FilterBySelect/FilterBySelect'

const FunctionalityBar = () => {
  const rosterListArr = useAppSelector(selectRosterList) as string[]

  const dispatch = useAppDispatch()

  const handleReset = () => {
    dispatch(resetRoster())
  }

  return (
    <div className="functionality-container">
      <div className="searchbar-container">
        <Searchbar />
        <div className="roster-length-wrapper">
          <h1>
            Roster
            <span> {rosterListArr.length}</span>/53
          </h1>
        </div>
      </div>
      <div className="func-wrapper">
        <div className="func-top-container">
          <FilterBySelect />
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  )
}
export default FunctionalityBar
