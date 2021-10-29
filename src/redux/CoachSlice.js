import { createSlice } from '@reduxjs/toolkit'

export const coachSlice = createSlice({
    name: 'coach',
    initialState: {
        coach: {}
    },
    reducers: {
        add_coach(state, action) {
            state.coach = action.payload
        },
        remove_coach(state) {
            state.coach = {}
        },
    }
})

export default coachSlice.reducer
export const { add_coach, remove_coach } = coachSlice.actions