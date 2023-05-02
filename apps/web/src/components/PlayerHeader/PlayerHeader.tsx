import FilterBySelect from '../FilterBySelect/FilterBySelect'
import './PlayerHeader.scss'

const PlayerHeader = () => {
  return (
    <div className="player-available-container">
      <h1>Available Players</h1>
      <FilterBySelect />
    </div>
  )
}
export default PlayerHeader
