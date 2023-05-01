import { configureStore } from '@reduxjs/toolkit'
import playerListSlice from '../features/application/playerListSlice'
import rosterListSlice from '../features/application/rosterListSlice'
import activeFilterSlice from '../features/application/activeFilterSlice'
import searchBarSlice from '../features/application/searchBarSlice'

const store = configureStore({
  reducer: {
    allPlayers: playerListSlice,
    rosterList: rosterListSlice,
    filter: activeFilterSlice,
    searchbar: searchBarSlice,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
