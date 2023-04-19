// src/features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

interface ApplicationState {
  playersListState: object[]
}

const initialState: ApplicationState = {
  playersListState: [],
}

// we need to be able to take from this list & add to another slice

const playersListSlice = createSlice({
  name: 'playersList',
  initialState,
  reducers: {
    populatePlayerList: (state, action) => {
      state.playersListState.push(action.payload)
    },
  },
})

export const { populatePlayerList } = playersListSlice.actions
export const selectPlayerList = (state: RootState) =>
  state.allPlayers.playersListState

export default playersListSlice.reducer
