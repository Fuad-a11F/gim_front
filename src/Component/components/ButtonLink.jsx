import React from 'react'

const ButtonLink = ({ title, onClick, className = ''}) => {
    return (
        <div className={"programWrite__btn " + className }><button onClick={onClick}>{title}</button></div>
    )
}

export default ButtonLink
