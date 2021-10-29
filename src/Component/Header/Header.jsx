import React from 'react'
import Login from '../Auth/Login'
import Registration from '../Auth/Registration'
import Auth from './Auth'
import logo from './images/Logo.jpg'
import NotAuth from './NotAuth'
import './Header.css'
import { NavLink } from 'react-router-dom'

const Header = ({ auth }) => {
    let [regModal, setRegModal] = React.useState(false)
    let [logModal, setLogModal] = React.useState(false)
    let [status, setStatus] = React.useState('Посетитель')
    
    return (
        <>
            <div className='header'> 
                <div className='header__row'>
                    <div className='header__column'>
                        <NavLink to="/"><img src={logo} width='100' height='70' alt="" /> </NavLink>
                    </div>    
                    <div className='header__column'>
                        {auth && 
                            <Auth status={status}/> 
                        }
                        {!auth && 
                            <NotAuth setLogModal={setLogModal} setRegModal={setRegModal} />
                        }
                    </div>
                </div>   
            </div>
            {regModal && <Registration setModal={setRegModal} />}
            {logModal && <Login setModal={setLogModal} />}
        </>
    )
}

export default Header
