import Searchbar from '../SearchBar/SearchBar'
import Toggle from '../Toggle/Toggle'
import './FunctionalityBar.scss'
import resetIcon from '../../Assets/resetIcon.svg'
import { resetRoster } from '../../features/application/rosterListSlice'
import { useAppDispatch } from '../../app/hooks'

interface Props {
  handleClick: () => void
}

const FunctionalityBar = ({ handleClick }: Props) => {
  const dispatch = useAppDispatch()

  const handleReset = () => {
    dispatch(resetRoster())
  }

  return (
    <div className="functionality-container">
      <div className="left-container">
        <Toggle handleClick={handleClick} />
        <img src={resetIcon} alt="reset-icon" onClick={handleReset} />
      </div>
      <div className="searchbar-container">
        <Searchbar />
      </div>
    </div>
  )
}
export default FunctionalityBar
