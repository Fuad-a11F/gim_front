import React from 'react'
import ButtonLink from '../../Component/components/ButtonLink'
import { useHistory } from 'react-router'

const MessageNavigation = () => {
    let history = useHistory()
    let [isChat, setIsChat] = React.useState(true)
    let [isFriends, setIsFriends] = React.useState(true)

    React.useEffect(() => {
        if (window.location.hash.slice(1) === 'chats') {
            setIsChat(true)
            setIsFriends(false)
        }
        if (window.location.hash.slice(1) === 'friends') {
            setIsChat(false)
            setIsFriends(true)
        }
    }, [window.location.hash])

    return (
        <div className='message__bottom'>
            <ButtonLink className={isChat && 'active-message-nav'} onClick={() => history.push('/message#chats')} title='Чаты' />
            <ButtonLink className={isFriends && 'active-message-nav'} onClick={() => history.push('/message#friends')} title='Друзья' />
        </div>
    )
}

export default MessageNavigation
