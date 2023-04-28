import { useAppDispatch, useAppSelector } from '../../app/hooks'
import {
  resetRoster,
  selectRosterList,
} from '../../features/application/rosterListSlice'
import Button from './Button'

const ResetButton = (): React.ReactElement => {
  const dispatch = useAppDispatch()
  const rosterListArr = useAppSelector(selectRosterList) as string[]

  const handleClick: () => void = () => {
    console.log('clicked')
    dispatch(resetRoster())
  }

  return (
    <>
      <Button
        disabled={rosterListArr.length > 0 ? false : true}
        label="reset"
        handleClick={handleClick}
      />
    </>
  )
}
export default ResetButton
