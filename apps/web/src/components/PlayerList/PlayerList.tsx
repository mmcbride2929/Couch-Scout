import * as React from 'react'
import Player from '../Player/Player'
import { useAppSelector } from '../../app/hooks'
import { selectPlayerList } from '../../features/application/playerListSlice'
import { selectRosterList } from '../../features/application/rosterListSlice'

export interface PlayerInterface {
  _id: string
  name: string
  position: string
  age: number
  role: string
}

const PlayerList = (): React.ReactElement => {
  const playerListArr = useAppSelector(selectPlayerList) as PlayerInterface[]
  const rosterListArr = useAppSelector(selectRosterList) as string[]

  // iinstead of getting selectplayer list, get filtered list. or make selected filtered
  const filteredPlayerObjects: PlayerInterface[] = playerListArr.filter(
    (singlePlayerObject) => !rosterListArr.includes(singlePlayerObject._id)
  )

  return (
    <div>
      {filteredPlayerObjects?.map((singlePlayer) => {
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
