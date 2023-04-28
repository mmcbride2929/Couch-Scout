// src/features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

interface ApplicationState {
  rosterListState: string[]
}

const initialState: ApplicationState = {
  rosterListState: [],
}

const rosterListSlice = createSlice({
  name: 'rosterList',
  initialState: initialState,
  reducers: {
    addPlayer: (state, action) => {
      state.rosterListState = [...state.rosterListState, action.payload]
    },
    removePlayer: (state, action) => {
      const filtered = state.rosterListState.filter(
        (singlePlayerId) => singlePlayerId !== action.payload
      )
      state.rosterListState = filtered
    },
    resetRoster: (state) => {
      state.rosterListState = []
    },
  },
})

export const { addPlayer, removePlayer, resetRoster } = rosterListSlice.actions

export const selectRosterList = (state: RootState) =>
  state.rosterList.rosterListState

export default rosterListSlice.reducer
