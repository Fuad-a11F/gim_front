import React from 'react'
import { NavLink } from 'react-router-dom'

const Favorite = () => {
    return (
        <div className='favorite'>
            <h3>Избранное</h3>
            <div className='playlist__row'>
                <NavLink to='sd'>Избранное</NavLink>
                <p>0</p>
            </div>
        </div>
    )
}

export default Favorite
