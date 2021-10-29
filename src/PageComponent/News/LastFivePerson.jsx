import axios from 'axios'
import moment from 'moment'
import React from 'react'
import {NavLink} from 'react-router-dom'
import none from './images/none_ava.png'

const LastFivePerson = () => {
    let [user, setUser] = React.useState([])
    const source = axios.CancelToken.source();
    
    React.useEffect(() => {
        axios.get('http://127.0.0.2:8000/api/auth_2/get_new_user/', {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}}).then(data => setUser(data.data))
     
        return () => {
            source.cancel();
        };
        
    }, [])

    function correct_time(time) {
        let date1 = moment(time.slice(0, time.indexOf('T')))
        let date2 = moment(moment().format('YYYY-MM-DD'))
        let diff = date2.diff(date1, 'days')
        return `Зарегистрирован ${diff == 0 ? 'сегодня' : diff + ' дней назад'}`
    }

    return (
        <div>
            <p>5 последних зарегистрированных пользователя.</p>
            {user.map(item => {
                return (
                    <div key={item.id} className='last__auth'>
                        <div className='last__auth-image'>
                            <img src={item.image ?? none} width='50' height='50' alt="" />
                        </div>
                        <div className='last__auth-info'>
                            <NavLink to={'profile/' + item.id}>{item.username} {item.lastname}</NavLink>
                            <p>{correct_time(item.created_at)}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default LastFivePerson
