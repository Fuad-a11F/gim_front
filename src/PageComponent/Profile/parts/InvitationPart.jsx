import axios from 'axios'
import React from 'react'
import avatar from '../images/avatar.jpg'
import { NavLink } from 'react-router-dom'

const InvitationPart = () => {
    let [invitation, setInvitation] = React.useState([])
    console.log(invitation);
    React.useEffect(() => {
        axios.get('http://127.0.0.2:8000/api/friend/get_invitation/', {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}})
            .then(data => setInvitation(data.data))
    }, [])

    function accept_friend(id) {
        axios.put('http://127.0.0.2:8000/api/friend/create_friends/', {id}, {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}})
    }

    return (
        <div className='friend__wrapper'>
            {invitation.length != 0 && (
                <>
                    {invitation.map(item => (
                        <div key={item.id}>
                            <div className='friend__image'>
                                <img src={item.friends.image ?? avatar} alt="" />
                            </div>
                            <NavLink to={'/profile/' + item.id + '/program'} className='friend__row'>
                                <p>{item.friends.username}</p>
                                <p className='friend__lastname'>{item.friends.lastname}</p>
                            </NavLink>
                            <div>
                                <button onClick={() => accept_friend(item.id)}>Принять</button>
                                <button>Отклонить</button>
                            </div>
                        </div>
                    ))}
                </>
            )}
            {invitation.length == 0 && (
                <p>Приглашений нет!</p>
            )}
        </div>
    )
}

export default InvitationPart
