import * as React from 'react'
import { useAppSelector } from '../../app/hooks'
import { selectRosterList } from '../../features/application/rosterListSlice'
import RosterList from '../RosterList/RosterList'
import { PlayerInterface } from '../PlayerList/PlayerList'
import { selectPlayerList } from '../../features/application/playerListSlice'
import RosterHeader from '../RosterHeader/RosterHeader'

const RosterListContainer = (): React.ReactElement => {
  const rosterListArr = useAppSelector(selectRosterList) as string[]
  const playerListArr = useAppSelector(selectPlayerList) as PlayerInterface[]
  console.log(rosterListArr)
  return (
    <>
      {rosterListArr.length === 0 ? (
        <p>Add Players</p>
      ) : (
        <>
          <RosterHeader />
          <RosterList
            rosterListArr={rosterListArr}
            playerListArr={playerListArr}
          />
        </>
      )}
    </>
  )
}
export default RosterListContainer
