import React from 'react'
import Link from '../../Component/components/Link'
import image from './images/program.jpg'
import TimeBeginAndFinish from './TimeBeginAndFinish'

const CardItem = ({ card }) => {
    
    return (
        <div className={'carditem__row ' + (card.new_type == 'Old' && 'isOld')}>
            <div className='carditem__column'>
                <img src={image} alt="" />
            </div>
            <div className='carditem__column'>
                <p>Программа на: {card.date}</p>   

                <TimeBeginAndFinish card={card} />

                <p>Тренер: {card.user.username}</p>   
                <p>Сообщение от тренера: {card.text}</p>   
            </div>
            <div className='carditem__column'>
                {card.new_type == 'During' && <Link className='card__btn' to={'/program/programDetail/'+card.id} title='Продолжить' />}
                {card.new_type == 'New' && <Link className='card__btn' to={'/program/programStart/'+card.id} title='Начать' />}
                {card.new_type == 'Old' && <Link className='card__btn' to={'/program/programInfoTrain/'+card.id} title='Посмотреть' />}
            </div>
            {card.new_type == 'New' && <div className='program__did'>Новая</div>}
            {card.new_type == 'During' && <div className='program__now'>В процессе</div>}
        </div>     
    )
}

export default CardItem
