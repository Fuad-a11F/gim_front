import { createSlice } from '@reduxjs/toolkit'

export const NoteSlice = createSlice({
    name: 'noteSlice',
    initialState: {
        total: null,
        all_notes: [],
        check_note: {}
    },
    reducers: {
        add_all_notes(state, action) {
            state.all_notes = action.payload
        },
        add_check_note(state, action) {
            state.check_note = action.payload
        },
        clear_check_note(state) {
            state.check_note = {}
        },
        add_note(state, action) {
            state.all_notes.push(action.payload)
        },
        update_all_notes(state, action) {
            for (let i = 0; i < state.all_notes.length; i++) {
                if (state.all_notes[i].id == action.payload.id) {
                    state.all_notes[i].title = action.payload.title
                    state.all_notes[i].text = action.payload.text
                }
            }
        },
        delete_notes(state, action) {
            for (let i = 0; i < state.all_notes.length; i++) {
                if (state.all_notes[i].date == action.payload.date) {
                    state.all_notes.splice(i, 1)
                }
            }
        },
        total_set(state, action) {
            console.log(action.payload.count);
            state.total = action.payload.count
        },
        total_delete(state) {
            state.total -= 1
        },
        total_add(state) {
            state.total += 1
        },
    }
})

export default NoteSlice.reducer
export const { add_all_notes, add_check_note, clear_check_note, add_note, update_all_notes, delete_notes,total_set, total_delete, total_add } = NoteSlice.actions