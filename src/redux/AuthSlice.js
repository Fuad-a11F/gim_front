import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        is_login: false,
        ticket: false
    },
    reducers: {
        add_ticket(state, action) {
            state.ticket = action.payload
        },
        login(state) {
            state.is_login = true
        },
        logout(state) {
            state.is_login = false
        },
    }
})

export default authSlice.reducer
export const { add_ticket, login, logout } = authSlice.actions