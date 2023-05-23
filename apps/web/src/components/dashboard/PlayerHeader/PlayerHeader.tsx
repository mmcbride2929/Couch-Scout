import Toggle from '../Toggle/Toggle'
import './PlayerHeader.scss'
import backIcon from '../../../Assets/backIcon.png'
import { Link } from 'react-router-dom'

interface Props {
  handleClick: () => void
  displayAvailablePlayers: boolean
}

const PlayerHeader = ({ handleClick, displayAvailablePlayers }: Props) => {
  return (
    <div className="player-available-container">
      <div className="left-container-player-header">
        <button>
          <Link to="/">
            <img src={backIcon} alt="back-icon" />
          </Link>
        </button>
      </div>
      <div className="right-container">
        <h1>
          {displayAvailablePlayers ? 'Available Players' : 'Roster Players'}
        </h1>
        <Toggle handleClick={handleClick} />
      </div>
    </div>
  )
}
export default PlayerHeader

// keep button on after toggle, whats triggering it to leave?
// conditionally render avail/roster
// delete rosterlistheader

// what is the toggle of the button?
