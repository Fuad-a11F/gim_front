import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authSlice from './AuthSlice'
import coachSlice from './CoachSlice'
import foodSlice from './FoodSlice'
import foodWriteSlice from './FoodWrite'
import newSlice from './newSlice'
import NoteSlice from './NoteSlice'
import PlaylistSlice from './PlaylistSlice'
import ProgramSlice from './Program'
import programDetailSlice from './ProgramDetail'
import programWriteSlice from './ProgramWrite'
import ticketSlice from './TicketSlice'
import userSlice from './UserSlice'

let rootReducer = combineReducers({
    new: newSlice,
    auth: authSlice,
    programWrite: programWriteSlice,
    foodWrite: foodWriteSlice,
    note: NoteSlice,
    user: userSlice,
    ticket: ticketSlice,
    food: foodSlice,
    playlist: PlaylistSlice,
    programDetail: programDetailSlice,
    program: ProgramSlice,
    coach: coachSlice
})

export let store = configureStore({
    reducer: rootReducer
})