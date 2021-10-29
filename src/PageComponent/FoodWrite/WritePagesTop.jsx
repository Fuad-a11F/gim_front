import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { write_action, write_send } from '../../redux/FoodWrite'

const WritePagesTop = () => {
    let [users, setUsers] = React.useState([])
    let dispatch = useDispatch()

    React.useEffect(() => {
        axios.get('http://127.0.0.2:8000/api/gim/get_name_user/', {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}}).then(data => setUsers(data.data))
    }, [])

    function action_func(e) {
        dispatch(write_action(e.target.value))
    }

    function user_func(e) {
        dispatch(write_send(e.target.value));
    }
    
    return (
        <div className='programWrite__row-setting'>
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
