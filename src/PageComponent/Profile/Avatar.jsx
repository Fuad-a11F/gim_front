import React from 'react'
import photo from './images/none_ava.png'
import { useSelector } from 'react-redux'

const Avatar = () => {
    let user_image = useSelector(state => state.user.user.image)
    // console.log(user_image);
    return (
        <div className="profile__img">
            <img className='paid' src={user_image ? user_image : photo} alt="" />
        </div>
    )
}

export default Avatar