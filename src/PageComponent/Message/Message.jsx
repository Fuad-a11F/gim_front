import React from 'react'
import Chat from './Chat'
import SendForm from './SendForm'
import './Message.css'
import MessageNavigation from './MessageNavigation'
import MessageItem from './MessageItem'

const Message = () => {

    return (
        <div className='message'>
            <div className="message__row">
                <div className="message__column">
                    <Chat />
                    <MessageNavigation />
                </div>
                <div className="message__column">
                    <MessageItem />         
                    <SendForm />
                </div>
            </div>
        </div>
    )
}

export default Message
