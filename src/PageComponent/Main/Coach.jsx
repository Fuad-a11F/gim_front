import React from 'react'
import ava from './images/themeImage.png'

const Coach = ({ coach }) => {
    return (
        <>
            <div className="coach__wrapper">
                <div className="coach__info">
                    <div className='coach__image'>
                        <img src={ava} alt="" />
                    </div>
                    <div>
                        <p>{coach.name} {coach.lastname}</p>
                        <p>Стаж работы: {coach.experience} лет</p>
                        <p>Учеников: 8</p>
                        <hr />
                        <p>Оценка</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Coach
