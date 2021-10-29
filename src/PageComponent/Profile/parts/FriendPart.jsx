import React from 'react'
import axios from 'axios'
import avatar from '../images/avatar.jpg'
import { NavLink } from 'react-router-dom'

const FriendPart = () => {
    let [friend, setFriend] = React.useState([])

    React.useEffect(() => {
        axios.get('http://127.0.0.2:8000/api/friend/get_friend/', {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}})
            .then(data => setFriend(data.data))
    }, [])

    return (
        <div className='friend__wrapper'>
            {friend.length != 0 && (
                <>
                    {friend.map(item => (
                        <div key={item.id}>
                            <div className='friend__image'>
                                <img src={item.friends.image ?? avatar} alt="" />
                            </div>
                            <NavLink to={'/profile/' + item.id + '/program'} className='friend__row'>
                                <p>{item.friends.username}</p>
                                <p className='friend__lastname'>{item.friends.lastname}</p>
                            </NavLink>
                        </div>
                    ))}
                </>
            )}
        </div>
    )
}

export default FriendPart
