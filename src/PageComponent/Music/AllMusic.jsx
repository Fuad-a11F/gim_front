import React from 'react'
import { NavLink } from 'react-router-dom'

const AllMusic = () => {
    return (
        <div className='allmusic'>
            <h3>Все песни</h3>
            <NavLink to='/music'>Все песни</NavLink>
        </div>
    )
}

export default AllMusic
