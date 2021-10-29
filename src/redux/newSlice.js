import { createSlice } from '@reduxjs/toolkit'

export const newSlice = createSlice({
    name: 'new',
    initialState: {
        new: [],
        comment_new: []
    },
    reducers: {
        add_new(state, action) {
            state.new = action.payload
        },
        change_count_comment(state, action) {
            if (action.payload.action == 'plus') {
                state.new[action.payload.index].commentCount += 1
            }
            else if (action.payload.action == 'minus') {
                state.new[action.payload.index].commentCount -= 1
            }
        },
        comment_new_add(state, action) {
            for (let i = 0; i < state.new.length; i++) {
                if (state.new[i].id == action.payload) {
                    state.comment_new = state.new[i]
                    break
                }
            }
        },

    }
})

export default newSlice.reducer
export const { add_new, change_count_comment, comment_new_add } = newSlice.actions