import React from 'react'
import ErrorAbonement from '../ErrorPage/ErrorAbonement'

const AbonementHOC = Component => {

    return function (auth_ticket) {
        return auth_ticket.auth_ticket.active ? <Component /> : <ErrorAbonement />
    }
}

export default AbonementHOC
