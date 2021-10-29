import React from 'react'
import AnimArrow from './AnimArrow'
import image from './images/themeImage.png'
import './Main.css'

const Main = () => {
    return (
        <div className='main__row'>
            <div className='main__column-image'>
                <img src={image} alt="" />
            </div>
            <div className='main__column-content'>
                <h2>Fitness Gym</h2>                   
                <p className='main__label'>Записывайся <span>прямо</span> сейчас</p>
                <AnimArrow />
                <button className='button'>Записаться</button>
            </div>
        </div>
    )
}

export default Main
