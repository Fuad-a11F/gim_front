import React from 'react'
import ButtonLink from '../../Component/components/ButtonLink'

const FoodButtons = ({ setActive }) => {
    return (
        <div>
            <ButtonLink onClick={() => setActive(false)} className='food__button' title='Все программы питания' />
        </div>
    )
}

export default FoodButtons
