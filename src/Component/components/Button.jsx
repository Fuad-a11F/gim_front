import React from 'react'

const Button = ({ title, className, disabled, onClick }) => {
    return (
        <button className={'button ' + className} onClick={onClick} disabled={disabled}>{title}</button>
    )
}

export default Button
