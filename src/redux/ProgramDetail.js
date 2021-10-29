import { createSlice } from '@reduxjs/toolkit'

export const programDetailSlice = createSlice({
    name: 'programDetail',
    initialState: {
        program: [],
        disable: true 
    },
    reducers: {
        add_all_program(state, action) {
            state.program = action.payload
        },
        check_all_true(state) {
            for (let i = 0; i < state.program.length; i++) {
                if (state.program[i].done == false) {
                    state.disable = true
                    return
               }
            }
            state.disable = false
        },
        change_done(state, action) {
            let new_array = []
            state.program.forEach((item, i) => {
                if (i == action.payload) {
                    new_array.push({...item, done: true})
                    return
                }
                new_array.push(item)
            })
            state.program = new_array
        },

        
    }
})

export default programDetailSlice.reducer
export const { add_all_program, change_done, check_all_true } = programDetailSlice.actions