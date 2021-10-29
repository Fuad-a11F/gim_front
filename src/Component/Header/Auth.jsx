import axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Menu from './Menu'
import none from './images/none_ava.png'

let URLS = ['profile', 'notes', 'draft', 'favourite', 'setting']

const Auth = ({ status, check_active_avatar }) => {
    let [menu, setMenu] = React.useState(false)
    let auth_ticket = useSelector(state => state.ticket.ticket)
    let [userPhoto, setUserPhoto] = React.useState()
    const source = axios.CancelToken.source();
    let news = React.useRef()
    let message = React.useRef()
    let program = React.useRef()
    let abonement = React.useRef()
    let food = React.useRef()
    let write_prog = React.useRef()
    let write_food = React.useRef()
    let musics = React.useRef()

    React.useEffect(() => {
        axios.get('http://127.0.0.2:8000/api/user/get_user_image/', {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}})
            .then(data => setUserPhoto(data.data))

        return () => {
            source.cancel();
        }
    }, [])

    React.useEffect(() => {
        if (menu) {
            news.current.classList.add('active-none')
            message.current.classList.add('active-none')
            
            if (status === 'Посетитель') {
                auth_ticket && (!auth_ticket.active-none && abonement.current.classList.add('active-none'))
                program.current.classList.add('active-none')
                food.current.classList.add('active-none')
            }
    
            else if (status === 'Тренер') {
                write_prog.current.classList.add('active-none')
                write_food.current.classList.add('active-none')
            }
            
            musics.current.classList.add('active-none')
            check_active_avatar()
        }
        else if (!menu) {
            news.current.classList.remove('active-none')
            message.current.classList.remove('active-none')
            
            if (status === 'Посетитель') {
                auth_ticket && (!auth_ticket.active-none && abonement.current.classList.remove('active-none'))
                program.current.classList.remove('active-none')
                food.current.classList.remove('active-none')
            }
    
            else if (status === 'Тренер') {
                write_prog.current.classList.remove('active-none')
                write_food.current.classList.remove('active-none')
            }
            
            musics.current.classList.remove('active-none')
            check_active_avatar()
        }
    })

    function check_active_avatar() {
        if (menu)
            return true

        return URLS.some(i => window.location.pathname.includes(i))
    }


    return (
        <ul className='link__row'>
            <li className='header__link'><NavLink ref={news} exact to='/' className='header__item' >Новости</NavLink></li>
            <li className='header__link'><NavLink ref={message}  to='/message' className='header__item' >Сообщения</NavLink></li>
            {status === 'Посетитель' ?
                <>
                    {auth_ticket && (!auth_ticket.active && <li className='header__link'><NavLink ref={abonement} className='header__item' to="/abonement">Абонементы</NavLink></li>)}
                    <li className='header__link'><NavLink ref={program}  className='header__item' to="/program">Программа</NavLink></li>
                    <li className='header__link'><NavLink ref={food} className='header__item' to="/food">Питание</NavLink></li>
                </>
                    : 
                <>
                    <li className='header__link'><NavLink ref={write_prog} className='header__item' to="/writeProgram">Составить программу</NavLink></li>
                    <li className='header__link'><NavLink ref={write_food} className='header__item' to="/writeFood">Составить питание</NavLink></li>
                </>
            }
            <li className='header__link'><NavLink ref={musics} className='header__item' to="/music">Музыка</NavLink></li>
            <li className={'menu__wrapper ' + (check_active_avatar() && 'avatar-active')}>
                <button onClick={() => setMenu(true)}>
                    {userPhoto && <img src={userPhoto.image ?? none} width='40' height='40' alt="" />}
                </button>
                {menu && <Menu status={status} setMenu={setMenu} />}
            </li>
        </ul>   
    )
}

export default Auth
