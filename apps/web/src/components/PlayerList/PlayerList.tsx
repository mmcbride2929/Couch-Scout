import * as React from 'react'
import Player from '../Player/Player'
import { useAppSelector } from '../../app/hooks'
import { selectPlayerList } from '../../features/application/playerListSlice'
import { selectRosterList } from '../../features/application/rosterListSlice'
import { selectActiveFilter } from '../../features/application/activeFilterSlice'
import { filterBySearchBar } from '../../features/application/searchBarSlice'
import './PlayerList.scss'

export interface PlayerInterface {
  _id: string
  name: string
  position: string
  age: number
  role: string
}

const PlayerList = (): React.ReactElement => {
  const playerListArr = useAppSelector(selectPlayerList) as PlayerInterface[]
  const rosterListArr = useAppSelector<string[]>(selectRosterList)
  const activeFilter = useAppSelector<string>(selectActiveFilter)
  const searchBarFilter = useAppSelector<string>(filterBySearchBar)

  // no filter, available players
  const availablePlayerObjects: PlayerInterface[] = playerListArr.filter(
    (singlePlayerObject) => !rosterListArr.includes(singlePlayerObject._id)
  )

  // filter players by button
  const filteredPlayerObjects: PlayerInterface[] =
    availablePlayerObjects.filter(
      (singlePlayerObject) => singlePlayerObject.role === activeFilter
    )

  // filter players with searchbar
  const filteredBySearchBar: PlayerInterface[] =
    activeFilter === 'available' && searchBarFilter !== ''
      ? availablePlayerObjects.filter((singlePlayerObject) =>
          singlePlayerObject.name
            .toLowerCase()
            .includes(searchBarFilter.toLowerCase())
        )
      : activeFilter !== 'available' && searchBarFilter !== ''
      ? filteredPlayerObjects.filter((singlePlayerObject) =>
          singlePlayerObject.name
            .toLowerCase()
            .includes(searchBarFilter.toLowerCase())
        )
      : []

  // how to display with filters logic
  const displayPlayers: PlayerInterface[] =
    searchBarFilter !== ''
      ? filteredBySearchBar
      : activeFilter !== 'available'
      ? filteredPlayerObjects
      : searchBarFilter === '' && activeFilter === 'available'
      ? availablePlayerObjects
      : []

  return (
    <div className="player-list-container">
      {displayPlayers?.map((singlePlayer) => {
        return (
          <Player
            key={singlePlayer._id}
            playerData={singlePlayer}
            rosterPlayer={false}
          />
        )
      })}
    </div>
  )
}

export default PlayerList
