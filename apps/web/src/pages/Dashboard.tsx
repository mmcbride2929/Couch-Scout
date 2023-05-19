import { useEffect, useState } from 'react'
import FunctionalityBar from '../components/dashboard/FunctionalityBar/FunctionalityBar'
import { useAppSelector } from '../app/hooks'
import { selectActiveTeam } from '../features/application/activeTeamSlice'
import { useNavigate } from 'react-router-dom'
import PlayerHeader from '../components/dashboard/PlayerHeader/PlayerHeader'
import PlayerTableHeader from '../components/dashboard/PlayerTableHeader/PlayerTableHeader'
import PlayerListContainer from '../components/dashboard/PlayerListContainer/PlayerListContainer'
import RosterTableHeader from '../components/dashboard/RosterTableHeader/RosterTableHeader'
import RosterHeader from '../components/dashboard/RosterHeader/RosterHeader'
import RosterListContainer from '../components/dashboard/RosterListContainer/RosterListContainer'

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
          <div className="">
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
