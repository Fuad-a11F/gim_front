import React from 'react'
import { NavLink } from 'react-router-dom'
import Link from '../../Component/components/Link'
import music from './images/music.jpg'

const Subscribe = () => {
    return (
        <div className='subscribe'>
            <div className="subscribe__wrapper">
                <img src={music} alt="" />
                <p>Для прослушавание музыки необходимо оформить платную подписку.</p>
                <p>Стоимость подписки 23432</p>
                <Link to='/pay?music=true' title='Офомить' />
            </div>
        </div>
    )
}

export default Subscribe
