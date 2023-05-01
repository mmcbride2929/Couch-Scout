import * as React from 'react'
import { PlayerInterface } from '../PlayerList/PlayerList'
import RosterListPositionGroup from '../RosterListPositionGroup/RosterListPositionGroup'

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
      <RosterListPositionGroup position="QB" players={filteredRosterPlayers} />
      <RosterListPositionGroup position="RB" players={filteredRosterPlayers} />
      <RosterListPositionGroup position="WR" players={filteredRosterPlayers} />
      <RosterListPositionGroup position="TE" players={filteredRosterPlayers} />
      <RosterListPositionGroup position="OT" players={filteredRosterPlayers} />
      <RosterListPositionGroup position="IOL" players={filteredRosterPlayers} />
      <RosterListPositionGroup position="CB" players={filteredRosterPlayers} />
      <RosterListPositionGroup position="S" players={filteredRosterPlayers} />
      <RosterListPositionGroup position="DT" players={filteredRosterPlayers} />
      <RosterListPositionGroup position="ILB" players={filteredRosterPlayers} />
      <RosterListPositionGroup position="OLB" players={filteredRosterPlayers} />
      <RosterListPositionGroup
        position="Special Teams"
        players={filteredRosterPlayers}
      />
    </div>
  )
}
export default RosterList
