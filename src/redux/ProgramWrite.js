import { createSlice } from '@reduxjs/toolkit'

export const programWriteSlice = createSlice({
    name: 'programWrite',
    initialState: {
        date: 'Сегодня',
        action: 'Отправить',
        send: '',
        text: '',
        program: [{number: 1, text: '', sets: 0, reps: 0}]
    },
    reducers: {
        add_new_task(state) {
            state.program.push({number: state.program.length + 1, text: '', sets: '', reps: ''})
        },
        write_values(state, action) {
            state.program[action.payload.index - 1][action.payload.action] = action.payload.text
        },
        write_action(state, action) {
            state.action = action.payload
        },
        write_send(state, action) {
            state.send = action.payload
        },
        write_date(state, action) {
            state.date = action.payload
        },
        write_text(state, action) {
            state.text = action.payload
        },

    }
})

export default programWriteSlice.reducer
export const { add_new_task, write_values, write_action, write_send, write_date, write_text } = programWriteSlice.actions