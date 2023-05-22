import * as React from 'react'
import { useQuery } from 'react-query'
import PlayerList from '../PlayerList/PlayerList'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import './PlayerListContainer.scss'
import { selectActiveTeam } from '../../../features/application/activeTeamSlice'
import { useAppSelector } from '../../../app/hooks'
import { populatePlayerList } from '../../../features/application/playerListSlice'

const PlayerListContainer = (): React.ReactElement => {
  const dispatch = useDispatch()
  const team = useAppSelector(selectActiveTeam)

  const fetchPlayers = async () => {
    const response = await axios.get(
      `https://roster-predictor-v2-production.up.railway.app/${team}`
    )
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
        <div className="player-list-wrapper">
          <PlayerList />
        </div>
      )}
    </>
  )
}
export default PlayerListContainer
