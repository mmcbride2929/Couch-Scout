import { useRef } from 'react'
import './input.scss'

interface Props {
  handleOnChange: (searchParam: string) => void
}

const Input = ({ handleOnChange }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange: () => void = () => {
    const inputValue: string = inputRef.current?.value ?? ''
    handleOnChange(inputValue)
  }

  return (
    <input
      className="searchbar"
      ref={inputRef}
      type="search"
      placeholder="Find A Player"
      onChange={handleChange}
    />
  )
}
export default Input
