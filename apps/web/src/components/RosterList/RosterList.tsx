import * as React from 'react'
import Player from '../Player/Player'
import { PlayerInterface } from '../PlayerList/PlayerList'

interface Props {
  rosterListArr: string[]
  playerListArr: PlayerInterface[]
}

const RosterList = ({ rosterListArr, playerListArr }: Props) => {
  const filteredRosterPlayers: PlayerInterface[] = playerListArr.filter(
    (singleplayer: PlayerInterface) => rosterListArr.includes(singleplayer._id)
  )

  return (
    <div>
      {filteredRosterPlayers.map((singlePlayerObject) => {
        return (
          <Player
            key={singlePlayerObject._id}
            playerData={singlePlayerObject}
            rosterPlayer={true}
          />
        )
      })}
    </div>
  )
}
export default RosterList
