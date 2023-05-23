import * as React from 'react'
import { useEffect, useState } from 'react'
import Player from '../Player/Player'
import './PlayerList.scss'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { selectPlayerList } from '../../../features/application/playerListSlice'
import { selectRosterList } from '../../../features/application/rosterListSlice'
import {
  selectActiveFilter,
  setFilter,
} from '../../../features/application/activeFilterSlice'
import {
  filterBySearchBar,
  setSearchFilter,
} from '../../../features/application/searchBarSlice'

interface Props {
  initialLoad: boolean
  setInitialLoad: React.Dispatch<React.SetStateAction<boolean>>
}

export interface PlayerInterface {
  _id: string
  name: string
  position: string
  age: number
  role: string
}

const PlayerList = ({
  initialLoad,
  setInitialLoad,
}: Props): React.ReactElement => {
  const playerListArr = useAppSelector(selectPlayerList) as PlayerInterface[]
  const rosterListArr = useAppSelector<string[]>(selectRosterList)
  const activeFilter = useAppSelector<string>(selectActiveFilter)
  const searchBarFilter = useAppSelector<string>(filterBySearchBar)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (initialLoad) {
      console.log(initialLoad)
      console.log('d')
      dispatch(setFilter('available'))
      dispatch(setSearchFilter(''))
      setInitialLoad(false)
    }
  }, [initialLoad])

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
      {displayPlayers.length === 0 ? (
        <div className="no-results-wrapper">
          <h1 className="no-results-h1">No Results Found</h1>
        </div>
      ) : (
        displayPlayers.map((singlePlayer) => {
          return (
            <Player
              key={singlePlayer._id}
              playerData={singlePlayer}
              rosterPlayer={false}
            />
          )
        })
      )}
    </div>
  )
}

export default PlayerList
