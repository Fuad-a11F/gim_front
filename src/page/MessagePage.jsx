import React from 'react'
import AbonementHOC from '../hoc/AbonementHOC'
import Message from '../PageComponent/Message/Message'

const MessagePage = () => {

    return (
        <div>
            <Message />
        </div>
    )
}

export default AbonementHOC(MessagePage)
