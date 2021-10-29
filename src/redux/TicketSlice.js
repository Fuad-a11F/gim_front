import { createSlice } from '@reduxjs/toolkit'

export const ticketSlice = createSlice({
    name: 'ticket',
    initialState: {
        ticket: {active: false},
        create_ticket: {
            start_time: '',
            finish_time: '',
            what_ticket_buy: ''
        }
    },
    reducers: {
        add_ticket(state, action) {
            state.ticket = action.payload
        },

        add_create_ticket(state, action) {
            state.create_ticket.start_time = action.payload.start_time
            state.create_ticket.finish_time = action.payload.finish_time
            state.create_ticket.what_ticket_buy = action.payload.id
        },

    }
})

export default ticketSlice.reducer
export const { add_ticket, add_create_ticket } = ticketSlice.actions