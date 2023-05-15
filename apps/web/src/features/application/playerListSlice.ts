import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

interface ApplicationState {
  playersListState: object[]
}

const initialState: ApplicationState = {
  playersListState: [],
}

const playersListSlice = createSlice({
  name: 'playersList',
  initialState: initialState,
  reducers: {
    populatePlayerList: (state, action) => {
      state.playersListState = action.payload
    },
  },
})

export const { populatePlayerList } = playersListSlice.actions

export const selectPlayerList = (state: RootState) =>
  state.allPlayers.playersListState

export default playersListSlice.reducer
