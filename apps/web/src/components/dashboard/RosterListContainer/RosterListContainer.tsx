import * as React from 'react'
import RosterList from '../RosterList/RosterList'
import { PlayerInterface } from '../PlayerList/PlayerList'
import { useAppSelector } from '../../../app/hooks'
import { selectPlayerList } from '../../../features/application/playerListSlice'
import { selectRosterList } from '../../../features/application/rosterListSlice'

const RosterListContainer = (): React.ReactElement => {
  const rosterListArr = useAppSelector(selectRosterList) as string[]
  const playerListArr = useAppSelector(selectPlayerList) as PlayerInterface[]

  return (
    <>
      <RosterList rosterListArr={rosterListArr} playerListArr={playerListArr} />
    </>
  )
}
export default RosterListContainer
