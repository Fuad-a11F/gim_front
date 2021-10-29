import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom'
import { logout } from '../../redux/AuthSlice'


const Menu = ({ setMenu, status }) => {
    let dispatch = useDispatch()
    let history = useHistory()
    let [userId, setUserId] = React.useState(0)
    
    React.useEffect(() => {
        axios.get('http://127.0.0.2:8000/api/user/get_id/', { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } })
            .then(data => setUserId(data.data))
    }, [])

    async function logoutF() {
        await axios.post('http://127.0.0.2:8000/dj-rest-auth/logout/', { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } })
        localStorage.removeItem('token')
        dispatch(logout())
        history.push('/')
    }

    function close_menu(e) {
        setMenu(false)
    }

    React.useEffect(() => {
        window.addEventListener('click', close_menu)

        return () => {
            window.removeEventListener('click', close_menu)
        }
    }, [])

    return (
            <ul className='header__menu'>
                <li><NavLink to={"/profile/" + userId + '/programs'}>Мой профиль</NavLink></li>
                <li><NavLink to="/notes">Заметки</NavLink></li>
                {status == 'Тренер' && <li><NavLink to="/draft">Черновик</NavLink></li>}
                <li><NavLink to="/favourite">Избранное</NavLink></li>
                <li><NavLink to="/setting">Настройки</NavLink></li>
                <li><button onClick={logoutF} >Выход</button></li>
            </ul>
    )
}

export default Menu
