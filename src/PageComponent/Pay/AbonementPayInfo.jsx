import axios from 'axios';
import moment from 'moment';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add_create_ticket } from '../../redux/TicketSlice';

const AbonementPayInfo = ({ image, isCoach, period }) => {
    let coach = useSelector(state => state.coach.coach)
    let dispatch = useDispatch()
    let [user, setUser] = React.useState()
    let [ticket, setTicket] = React.useState()
    let time_buy = moment()
    
    function finish_time() {
        switch (period) {
            case 'day':
                dispatch(add_create_ticket({start_time: time_buy.format('YYYY-MM-DD'), 
                                            finish_time: time_buy.add(1, 'days').format('YYYY-MM-DD'), 
                                            id: ticket.id}))
                return time_buy
    
            case 'week':
                dispatch(add_create_ticket({start_time: time_buy.format('YYYY-MM-DD'), 
                                            finish_time: time_buy.add(1, 'weeks').format('YYYY-MM-DD'), 
                                            id: ticket.id}))
                return time_buy
    
            case 'month':
                dispatch(add_create_ticket({start_time: time_buy.format('YYYY-MM-DD'), 
                                            finish_time: time_buy.add(1, 'months').format('YYYY-MM-DD'), 
                                            id: ticket.id}))
                return time_buy
    
            case 'year':
                dispatch(add_create_ticket({start_time: time_buy.format('YYYY-MM-DD'), 
                                            finish_time: time_buy.add(1, 'years').format('YYYY-MM-DD'), 
                                            id: ticket.id}))
                return time_buy
        }
    }

    React.useEffect(() => {
        axios.get('http://127.0.0.2:8000/api/gim/get_my_name/', {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}})
            .then(data => setUser(data.data[0]))
        axios.get(`http://127.0.0.2:8000/api/gim/get_price_ticket/?period=${period}&coach=${isCoach}`)
            .then(data => setTicket(data.data))
    }, [])

    return (
            <div className='pay__info'> 
                    <img src={image} alt="" />
                    {user && <p>Имя и фамилия: {user.name} {user.lastname}</p>}
                    <p>Дата приобретения: {time_buy.format('YYYY-MM-DD')}</p>
                    <p>Дата окончания: {ticket && finish_time().format('YYYY-MM-DD')}</p>
                    {isCoach == 'true' && ( 
                        <>
                            {coach && <p>С услугами тренера: {coach.name} {coach.lastname}</p>}
                        </>
                    )}
                    {ticket && <p>Стоимость: {ticket.price}</p>}
            </div>
    )
}

export default AbonementPayInfo
