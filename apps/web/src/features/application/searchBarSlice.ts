// src/features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

interface ApplicationState {
  searchBarState: string
}

const initialState: ApplicationState = {
  searchBarState: '',
}

const searchBarSlice = createSlice({
  name: 'searchbar',
  initialState: initialState,
  reducers: {
    setSearchFilter: (state, action) => {
      state.searchBarState = action.payload
    },
  },
})

export const { setSearchFilter } = searchBarSlice.actions

export const filterBySearchBar = (state: RootState) =>
  state.searchbar.searchBarState

export default searchBarSlice.reducer
