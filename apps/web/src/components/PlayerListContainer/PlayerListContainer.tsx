import * as React from 'react'
import { useQuery } from 'react-query'
import PlayerList from '../PlayerList/PlayerList'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { populatePlayerList } from '../../features/application/playerListSlice'
import PlayerHeader from '../PlayerHeader/PlayerHeader'
import PlayerTableHeader from '../PlayerTableHeader/PlayerTableHeader'

const PlayerListContainer = (): React.ReactElement => {
  const dispatch = useDispatch()

  const fetchPlayers = async () => {
    const response = await axios.get('http://localhost:5100/')
    const data = response.data
    dispatch(populatePlayerList(data))
    return data
  }

  const { isLoading, error } = useQuery('players-list', fetchPlayers, {
    staleTime: Infinity,
  })

  if (error) {
    return <>{error}</>
  }

  return (
    <>
      {isLoading ? (
        <>Loading Players</>
      ) : (
        <>
          <PlayerTableHeader />
          <PlayerList />
        </>
      )}
    </>
  )
}
export default PlayerListContainer
