import React from 'react'
import TimeCorrect from '../../CorrectTime'

const TimeBeginAndFinish = ({ card }) => {
    
    return (
        <div>
            {(card.new_type == 'Old') && (
                <>
                <p>Время начало: {TimeCorrect(card.beginAt)}</p>
                <p>Время конца: {TimeCorrect(card.finishAt)}</p>
                </>
            )}
            {(card.new_type == 'During') && (
                <>
                <p>Время начало: {TimeCorrect(card.beginAt)}</p>
                <p>Время конца: __:__:__</p>
                </>
            )}
            {(card.new_type == 'New') && (
                <>
                <p>Время начало: __:__:__</p>
                <p>Время конца: __:__:__</p>
                </>
            )}
        </div>
    )
}

export default TimeBeginAndFinish
