import * as React from 'react'
import { useQuery } from 'react-query'
import PlayerList from '../PlayerList/PlayerList'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { populatePlayerList } from '../../features/application/playerListSlice'
import './PlayerListContainer.scss'
import { useAppSelector } from '../../app/hooks'
import { selectActiveTeam } from '../../features/application/activeTeamSlice'

const PlayerListContainer = (): React.ReactElement => {
  const dispatch = useDispatch()
  const team = useAppSelector(selectActiveTeam)

  const fetchPlayers = async () => {
    const response = await axios.get(`http://localhost:5100/${team}`)
    const data = response.data
    dispatch(populatePlayerList(data))
    return data
  }

  const { isLoading, error } = useQuery('players-list', fetchPlayers, {
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  })

  if (error) {
    return <>There was an error</>
  }

  return (
    <>
      {isLoading ? (
        <div className="player-list-loading-div">
          <h1 className="loading-title">Loading Players..</h1>
        </div>
      ) : (
        <>
          <PlayerList />
        </>
      )}
    </>
  )
}
export default PlayerListContainer
