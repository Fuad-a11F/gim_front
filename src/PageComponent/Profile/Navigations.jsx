import axios from 'axios'
import React from 'react'
import { NavLink } from 'react-router-dom'
import SideBarNav from '../../Component/components/SideBarNav'
import SideBarNavItem from '../../Component/components/SideBarNavItem'

const Navigations = ({ user_id }) => {
    let [isUser, setIsUser] = React.useState(false)

    React.useEffect(() => {
        axios.get('http://127.0.0.2:8000/api/user/check_user/' + user_id, {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}})
            .then(data => setIsUser(data.data))
    }, [user_id])
 
    return (
        <SideBarNav>
            {isUser && <SideBarNavItem link={`/profile/${user_id}/programs`} title='Программы'/>}
            <SideBarNavItem get_link='http://127.0.0.2:8000/api/friend/count_friend/' link={`/profile/${user_id}/friend`} title='Друзья'/>
            {isUser && <SideBarNavItem get_link='http://127.0.0.2:8000/api/friend/count_invitation/' link={`/profile/${user_id}/invitations`} title='Приглашения'/>}
            {isUser && <SideBarNavItem get_link='http://127.0.0.2:8000/api/gim/abonement_count/' link={`/profile/${user_id}/abonement`} title='Все абонементы'/>}
            {isUser && <div><button className='button'>Выйти</button></div>}
        </SideBarNav>
    )
}

export default Navigations
