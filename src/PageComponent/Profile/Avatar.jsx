import React from 'react'
import photo from './images/avatar.jpg'

const Avatar = () => {
    return (
        <div className="profile__img">
            <img className='paid' src={photo} alt="" />
        </div>
    )
}

export default Avatar