import React from 'react'
import moment from 'moment'

const Timer = ({ timeLeft }) => {

    return (
            <p className='time_left_wrapper'>
                <div className='time_left-item'>
                    <p className='time_left'>{timeLeft[0]}</p>
                    <p>Дни</p>
                </div>
                <div className='time_left-item'>
                    <p className='time_left'>{timeLeft[1]}</p>
                    <p>Часы</p>
                </div>
                <div className='time_left-item'>
                    <p className='time_left'>{timeLeft[2]}</p>
                    <p>Мин.</p>
                </div>
                <div className='time_left-item'>
                    <p className='time_left'>{timeLeft[3]}</p>
                    <p>Сек.</p>
                </div>
                
                
                
                
            </p>
    )
}

export default Timer
