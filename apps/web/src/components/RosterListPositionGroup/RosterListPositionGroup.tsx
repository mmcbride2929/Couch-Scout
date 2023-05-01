import Player from '../Player/Player'
import { PlayerInterface } from '../PlayerList/PlayerList'
import RosterListHeader from '../RosterListHeader/RosterListHeader'

interface Props {
  position: string
  players: PlayerInterface[]
}

const RosterListPositionGroup = ({
  players,
  position,
}: Props): React.ReactElement => {
  const PlayerObjectsByRole: PlayerInterface[] = players.filter(
    (player) => player.position === position
  )

  return (
    <div>
      {PlayerObjectsByRole.length > 0 && <RosterListHeader header={position} />}

      {PlayerObjectsByRole.map((player) => {
        return (
          <Player key={player._id} playerData={player} rosterPlayer={true} />
        )
      })}
    </div>
  )
}
export default RosterListPositionGroup
