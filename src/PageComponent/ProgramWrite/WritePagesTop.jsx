import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import ProgramDate from './ProgramDate'
import { write_action, write_date, write_send } from '../../redux/ProgramWrite'
import TransformDate from '../../TransformDate'

const WritePagesTop = () => {
    let [users, setUsers] = React.useState([])
    let [other, setOther] = React.useState(false)
    let [current, setCurrent] = React.useState(TransformDate('Сегодня'))
    let dispatch = useDispatch()

    React.useEffect(() => {
        axios.get('http://127.0.0.2:8000/api/gim/get_name_user/', {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}})
            .then(data => setUsers(data.data))
    }, [])

    function action_func(e) {
        dispatch(write_action(e.target.value))
    }

    function time_choose(e) {
        if (e.target.value == 'Другое') {
            setOther(true)
            setCurrent(TransformDate('Сегодня'))
        }
        else {
            setOther(false)
            dispatch(write_date(e.target.value))
            setCurrent(TransformDate(e.target.value))
        }
    }

    function user_func(e) {
        dispatch(write_send(e.target.value));
    }
    
    return (
        <div className='programWrite__row-setting'>
            <div className='programWrite__column'>
                <p>Дата</p>
                <div>
                    <select onChange={(e) => time_choose(e)} name="" id="">
                        <option value="Сегодня">Сегодня</option>
                        <option value="Завтра">Завтра</option>
                        <option value="Послезавтра">Послезавтра</option>
                        <option value="Другое">Другое</option>
                    </select>
                </div>
                {other && <ProgramDate setCurrent={setCurrent}/>}
                <div>
                    <p>{current}</p>
                </div>
            </div>
            <div className='programWrite__column'>
                <p>Действие</p>
                <div>
                    <select onChange={(e) => action_func(e)} name="" id="">
                        <option value="Отправить">Отправить</option>
                        <option value="Сохранить">Сохранить</option>
                        <option value="Отправить и сохранить">Отправить и сохранить</option>
                    </select>
                </div>
            </div>
            <div className='programWrite__column'>
                <p>Отправить</p>
                <select onChange={(e) => user_func(e)} name="" id="">
                    <option value="">Выбрать...</option>
                    {users.length == 0 && <option value="">Загрузка...</option>}
                    {users.map(item => {
                        return <option key={item.id} value={item.id}>{item.username}</option>
                    })}
                </select>
            </div>
        </div>
    )
}

export default WritePagesTop
