import { useEffect, useState } from 'react'
import FunctionalityBar from '../components/FunctionalityBar/FunctionalityBar'
import PlayerHeader from '../components/PlayerHeader/PlayerHeader'
import PlayerListContainer from '../components/PlayerListContainer/PlayerListContainer'
import RosterHeader from '../components/RosterHeader/RosterHeader'
import RosterTableHeader from '../components/RosterTableHeader/RosterTableHeader'
import RosterListContainer from '../components/RosterListContainer/RosterListContainer'
import PlayerTableHeader from '../components/PlayerTableHeader/PlayerTableHeader'
import { useAppSelector } from '../app/hooks'
import { selectActiveTeam } from '../features/application/activeTeamSlice'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const team = useAppSelector(selectActiveTeam)
  const navigate = useNavigate()

  const [displayAvailablePlayers, setDisplayAvailablePlayers] =
    useState<boolean>(true)

  const handleClick = () => {
    setDisplayAvailablePlayers(!displayAvailablePlayers)
  }

  useEffect(() => {
    if (!team) {
      navigate('/')
    }
  }, [team])

  return (
    <div className="home-container">
      {displayAvailablePlayers ? (
        <div className="page-content-container">
          <div className="functionality">
            <PlayerHeader />
            <FunctionalityBar handleClick={handleClick} />
            <PlayerTableHeader />
          </div>
          <div className="list-container">
            <PlayerListContainer />
          </div>
        </div>
      ) : (
        <div className="page-content-container">
          <div className="functionality">
            <RosterHeader />
            <FunctionalityBar handleClick={handleClick} />
            <RosterTableHeader />
          </div>
          <div className="list-container">
            <RosterListContainer />
          </div>
        </div>
      )}
    </div>
  )
}
export default Home
