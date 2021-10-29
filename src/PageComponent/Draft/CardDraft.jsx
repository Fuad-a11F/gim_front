import React from 'react'
import Link from '../../Component/components/Link'
import image from './images/program.jpg'

const CardDraft = ({ card }) => {
    return (
        <div className='carditem__row'>
            <div className='carditem__column'>
                <img src={image} alt="" />
            </div>
            <div className='carditem__column'>
                <p>Программа на: {card.date}</p>   
                <p>Время и дата отправки: {card.time}</p>   
                <p>Тренер: {card.user.username}</p>   
                <p>Сообщение о трнера: {card.text}</p>   
            </div>
            <div className='carditem__column'>
                <Link className='card__btn' to={'programDetail/'+card.id} title='Посмотреть' />
                <button className='button carditem-mb'>ОТправить</button>
            </div>
            <div className='program__did'>Черновик</div>
        </div>
       
                
     
    )
}

export default CardDraft
