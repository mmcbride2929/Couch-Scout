import * as React from 'react'
import { useAppSelector } from '../../app/hooks'
import { selectRosterList } from '../../features/application/rosterListSlice'
import RosterList from '../RosterList/RosterList'
import { PlayerInterface } from '../PlayerList/PlayerList'
import { selectPlayerList } from '../../features/application/playerListSlice'
import RosterHeader from '../RosterHeader/RosterHeader'
import RosterTableHeader from '../RosterTableHeader/RosterTableHeader'

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
