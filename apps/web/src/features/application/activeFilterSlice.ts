// src/features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

interface ApplicationState {
  activeFilter: string
}

const initialState: ApplicationState = {
  activeFilter: 'available',
}

// we need to be able to take from this list & add to another slice

const activeFilterSlice = createSlice({
  name: 'activeFilter',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.activeFilter = action.payload
    },
  },
})

export const { setFilter } = activeFilterSlice.actions
export const selectActiveFilter = (state: RootState) =>
  state.filter.activeFilter

export default activeFilterSlice.reducer
