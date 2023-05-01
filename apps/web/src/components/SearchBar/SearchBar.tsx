import Input from './Input'
import { useAppDispatch } from '../../app/hooks'
import { setSearchFilter } from '../../features/application/searchBarSlice'

const SearchBar = () => {
  const dispatch = useAppDispatch()

  const handleOnChange: (value: string) => void = (inputValue) => {
    dispatch(setSearchFilter(inputValue))
  }

  return <Input handleOnChange={handleOnChange} />
}
export default SearchBar
