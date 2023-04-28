import ResetButton from '../Button/ResetButton'
import PlayerTotal from './PlayerTotal'

const ButtonsInterface = (): React.ReactElement => {
  return (
    <>
      <ResetButton />
      <PlayerTotal />
    </>
  )
}
export default ButtonsInterface

// we can have the sort by off/def buttons + screenshot button
// maybe add a searchbar and renamed the interface

// buttons that set a variable to different values, and the filteredList can display the list bassed on that.
// all, off, def, spt
