import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

interface ApplicationState {
  activeTeam: string
}

const initialState: ApplicationState = {
  activeTeam: '',
}

const activeTeamSlice = createSlice({
  name: 'activeTeam',
  initialState,
  reducers: {
    setActiveTeam: (state, action) => {
      state.activeTeam = action.payload
    },
  },
})

export const { setActiveTeam } = activeTeamSlice.actions
export const selectActiveTeam = (state: RootState) => state.team.activeTeam

export default activeTeamSlice.reducer
