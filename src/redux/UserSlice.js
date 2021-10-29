import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {},
    },
    reducers: {
        add_user(state, action) {
            state.user = action.payload
        },

    }
})

export default userSlice.reducer
export const { add_user } = userSlice.actions