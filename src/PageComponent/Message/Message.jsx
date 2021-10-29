import React from 'react'
import ButtonLink from '../../Component/components/ButtonLink'
import Chat from './Chat'
import SendForm from './SendForm'
import './Message.css'

const Message = () => {
    return (
        <div className='message'>
            <div className="message__row">
                <div className="message__column">
                    <div>
                        <Chat />
                    </div>
                    <div className='message__bottom'>
                        <ButtonLink title='Чаты' />
                        <ButtonLink title='Друзья' />
                    </div>
                </div>
                <div className="message__column">
                    <div>
                        123123
                    </div>
                    <div className='message__bottom'>
                        <SendForm />
                    </div>      
                </div>
            </div>
        </div>
    )
}

export default Message
