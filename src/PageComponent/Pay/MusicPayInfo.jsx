import React from 'react'
import { useSelector } from 'react-redux'
import none_ava from './images/none_ava.png'

const MusicPayInfo = ({ image }) => {
    let user = useSelector(state => state.ticket)
    
    return (
        <div className='pay__info'>
            <img src={none_ava} alt="" />
            <p>Имя и фамилия: Константин Горшков</p>
            <p>Стоимость: 23452</p>
        </div>
    )
}

export default MusicPayInfo
