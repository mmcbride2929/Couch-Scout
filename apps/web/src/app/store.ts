import { configureStore } from '@reduxjs/toolkit'
import playerListSlice from '../features/application/playerListSlice'
import rosterListSlice from '../features/application/rosterListSlice'
import activeFilterSlice from '../features/application/activeFilterSlice'
import searchBarSlice from '../features/application/searchBarSlice'
import activeTeamSlice from '../features/application/activeTeamSlice'

const store = configureStore({
  reducer: {
    allPlayers: playerListSlice,
    rosterList: rosterListSlice,
    filter: activeFilterSlice,
    searchbar: searchBarSlice,
    team: activeTeamSlice,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
