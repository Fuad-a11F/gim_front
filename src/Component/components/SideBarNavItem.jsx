import axios from 'axios'
import React from 'react'
import { NavLink } from 'react-router-dom'

const SideBarNavItem = ({ link, title, get_link }) => {
    let [count, setCount] = React.useState(null)

    React.useEffect(() => {
        if (get_link) {
            axios.get(get_link, {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}})
                .then(data => setCount(data.data))
        }
    }, [])

    return (
        <div className='sidebar-nav__link'>
            <NavLink exact to={link}>{title}</NavLink>
            <p>{count != null ? count : ''}</p>
        </div>
    )
}

export default SideBarNavItem
