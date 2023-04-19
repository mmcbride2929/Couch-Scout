import * as React from 'react'
import { useQuery } from 'react-query'
import { useAppDispatch } from '../../app/hooks'
import PlayerList from '../PlayerList/PlayerList'
import { populatePlayerList } from '../../features/application/playerListSlice'
import axios from 'axios'

const PlayerListContainer = (): React.ReactElement => {
  const dispatch = useAppDispatch()

  const fetchPlayers = async () => {
    const response = await axios.get('http://localhost:5100/')
    const data = response.data
    dispatch(populatePlayerList(data))
    return data
  }

  const { isLoading } = useQuery('players-list', fetchPlayers, {
    staleTime: Infinity,
  })

  return <>{isLoading ? <>Loading Players</> : <PlayerList />}</>
}
export default PlayerListContainer
