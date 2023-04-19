import * as React from 'react'

import { populatePlayerList } from '../../features/application/playerListSlice'
import { useAppSelector } from '../../app/hooks'

interface Props {
  playersListItems: object[]
}

const PlayerList = (): React.ReactElement => {
  const playerListArr = useAppSelector(populatePlayerList)
  return <div>comp</div>
}
export default PlayerList

// need to map data here if data is available
