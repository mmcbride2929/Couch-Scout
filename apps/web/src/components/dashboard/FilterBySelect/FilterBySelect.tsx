import React, { useState } from 'react'
import { setFilter } from '../../../features/application/activeFilterSlice'
import { useAppDispatch } from '../../../app/hooks'
import './FilterBySelect.scss'

const FilterBySelect = () => {
  const [value, setValue] = useState<string>('')

  const dispatch = useAppDispatch()

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value

    setValue(selectedValue)
    dispatch(setFilter(selectedValue))
  }

  return (
    <select value={value} onChange={handleChange}>
      <option value="available">Available</option>
      <option value="offense">Offense</option>
      <option value="defense">Defense</option>
      <option value="spt">Special Teams</option>
    </select>
  )
}

export default FilterBySelect
