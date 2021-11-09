import axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux'
import none_ava from '../images/none_ava.png'

const AbonementPart = () => {
    let [ticket, setTicket] = React.useState([])
    let user = useSelector(state => state.user.user)
    console.log(ticket);
    React.useEffect(() => {
        axios.get('http://127.0.0.2:8000/api/gim/get_abonements/', {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}})
            .then(data => setTicket(data.data))
    }, [])

    return (
        <>
            {ticket.length != 0 && (
                <div className='abonementPart__grid'>
                    {ticket.map(item => (
                        <div key={item.id} className='abonementPart__wrapper'>
                            <div className='abonementPart__image'>
                                <img src={user.image ? user.image : none_ava} alt="" />
                                <div className={item.active ? 'active_ticket' : 'inactive_ticket'}>{item.active ? 'Активен' : 'Неактивен'}</div>
                            </div>
                            <div>
                                <p className='abonementPart__name'>{user.username} {user.lastname}</p>
                                <hr />
                                <p>Дата покупки: {item.buy_time}</p>
                                <p>Дата окончания: {item.finish_time}</p>
                                {item.coach && <p>Тренер: {item.coach.username} {item.coach.lastname}</p>}
                                {!item.coach && <p>Тренер: Отсутствует</p>}
                            </div>
                        </div>
                    ))}     
                </div>
            )}
        </>
    )
}

export default AbonementPart
