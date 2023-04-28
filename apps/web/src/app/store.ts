import { configureStore } from '@reduxjs/toolkit'
import playerListSlice from '../features/application/playerListSlice'
import rosterListSlice from '../features/application/rosterListSlice'

const store = configureStore({
  reducer: {
    allPlayers: playerListSlice,
    rosterList: rosterListSlice,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
