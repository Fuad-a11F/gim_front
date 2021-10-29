import axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux';
import { CountAge } from '../../CountAge';

const MainInfo = ({ user_id }) => {
    let ticket = useSelector(state => state.ticket.ticket)
    let [isMe, setIsMe] = React.useState(false)
    let user = useSelector(state => state.user.user)
    let [isFriend, setIsFriend] = React.useState(false)
    console.log(ticket)
    React.useEffect(() => {
        axios.get('http://127.0.0.2:8000/api/user/check_user/' + user_id, 
            {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}})
                .then(data => setIsMe(data.data))
        axios.get('http://127.0.0.2:8000/api/user/check_user_friend/' + user_id, 
            {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}})
                .then(data => setIsFriend(data.data))
    }, [user_id])

    function set_friend() {
        axios.post('http://127.0.0.2:8000/api/friend/create_invitation/', {user_id}, 
            {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}})
    }

    function delete_friend() {
        // axios.post('http://127.0.0.2:8000/api/friend/create_friends/', {user_id}, 
        //     {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}})
    }

    function buttons() {
        if (!isMe) {
            return (
                <>
                    {!isFriend ? <button onClick={() => set_friend()}>Подружиться</button>
                            : <button onClick={() => delete_friend()}>Убрать из друзей</button>}
                    <button>Написать</button>
                    <button>Настройки</button>
                </>
            )
        }
    }
    
    return (
        <div>
            {user.position === 'student' && (
                <div className='profile__info'>
                    <div className='profile__info-row'>
                        <p>{user.username} {user.lastname}, {CountAge(user.birth)} лет ({user.birth ?  user.birth.slice(0, 4) : 'kek'} год) - {user.position}</p>
                        {buttons()}
                    </div>
                    {ticket.active == true && (
                        <>
                            <p className='ticket-yes'>Абонемент приобретен</p>
                            <p>Дата приобретения: {ticket.buy_time}</p>
                            <p>Дата окончания: {ticket.finish_time}</p>
                        </>
                    )}
 
                    {ticket.active == false && <p className='ticket-finish'>Срок абонемента истек 45 дней назад</p>}
                    {ticket.result == false && <p className='ticket-not'>Абонемент не приобретен</p>}
                </div>
            )}
            {user.position === 'coach' && (
                <div className='profile__info'> 
                    <p>{user.username} {user.lastname}, {CountAge(user.birth)} лет ({user.birth ?  user.birth.slice(0, 4) : 'kek'} год) - {user.position}</p>
                    <p>Обращаться как: нрв иыащфл</p>
                    <p>Учеников: 8237</p>
                    <p>Опыт работы: {user.experience} лет</p>
                </div>
            )}
      
        </div>
    )
}

export default MainInfo
