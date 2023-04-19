// src/features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit'

interface ApplicationState {
  rosterListState: object[]
}

const initialState: ApplicationState = {
  rosterListState: [],
}

// we need to be able to take from this list & add to another slice

const rosterListSlice = createSlice({
  name: 'rosterList',
  initialState,
  reducers: {},
})

export const {} = rosterListSlice.actions
export default rosterListSlice.reducer
