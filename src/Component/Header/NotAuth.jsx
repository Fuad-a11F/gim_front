import React from 'react'
import { NavLink } from 'react-router-dom'

const NotAuth = ({ setRegModal, setLogModal }) => {
    return (
        <ul>
            <li className='header__link'><NavLink className='header__item' exact to="/">Главная</NavLink></li>
            <li className='header__link'><NavLink className='header__item' to="/about">О нас</NavLink></li>
            <li className='header__link'><button onClick={() => setRegModal(true)}>Регистрация</button></li>
            <li className='header__link'><button onClick={() => setLogModal(true)}>Войти</button></li>
        </ul>
    )
}

export default NotAuth
