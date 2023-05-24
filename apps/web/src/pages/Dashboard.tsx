import { useEffect, useState } from 'react'
import FunctionalityBar from '../components/dashboard/FunctionalityBar/FunctionalityBar'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { selectActiveTeam } from '../features/application/activeTeamSlice'
import { useNavigate } from 'react-router-dom'
import PlayerHeader from '../components/dashboard/PlayerHeader/PlayerHeader'
import PlayerTableHeader from '../components/dashboard/PlayerTableHeader/PlayerTableHeader'
import PlayerListContainer from '../components/dashboard/PlayerListContainer/PlayerListContainer'
import RosterTableHeader from '../components/dashboard/RosterTableHeader/RosterTableHeader'
import RosterHeader from '../components/dashboard/RosterHeader/RosterHeader'
import RosterListContainer from '../components/dashboard/RosterListContainer/RosterListContainer'
import { resetRoster } from '../features/application/rosterListSlice'

const Home = () => {
  const team = useAppSelector(selectActiveTeam)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [initialLoad, setInitialLoad] = useState<boolean>(true)
  const [displayAvailablePlayers, setDisplayAvailablePlayers] =
    useState<boolean>(true)

  const handleClick = () => {
    setDisplayAvailablePlayers(!displayAvailablePlayers)
  }

  const handleReset = () => {
    dispatch(resetRoster())
  }

  useEffect(() => {
    if (!team) {
      navigate('https://final53.netlify.app/')

      handleReset()
    }
  }, [team, navigate])

  return (
    <div className="home-container">
      <div className="page-content-container">
        <div className="functionality">
          <PlayerHeader
            handleClick={handleClick}
            displayAvailablePlayers={displayAvailablePlayers}
          />
          <FunctionalityBar />
        </div>

        {displayAvailablePlayers ? (
          <>
            <PlayerTableHeader />
            <div className="list-container">
              <PlayerListContainer
                initialLoad={initialLoad}
                setInitialLoad={setInitialLoad}
              />
            </div>
          </>
        ) : (
          <>
            <RosterTableHeader />
            <div className="list-container">
              <RosterListContainer />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Home
