import { createSlice } from '@reduxjs/toolkit'

export const ProgramSlice = createSlice({
    name: 'program',
    initialState: {
        program: [],
        now_program: {},
        old_program: []
    },
    reducers: {
        add_program(state, action) {
            state.program = action.payload
        },
        add_old_program(state, action) {
            state.old_program = action.payload
        },
        add_now_program(state, action) {
            state.now_program = action.payload
        },

    }
})

export default ProgramSlice.reducer
export const { add_program, add_now_program, add_old_program } = ProgramSlice.actions