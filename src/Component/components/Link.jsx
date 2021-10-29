import React from 'react'
import { NavLink } from 'react-router-dom'

const Link = ({ title, className, to }) => {
    return (
        <NavLink className={'button ' + className} to={to} >{title}</NavLink>
    )
}

export default Link
