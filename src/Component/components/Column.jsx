import React from 'react'
import './components.css'

const Column = ({ children }) => {
    return (
        <div className='column-component'>
            {children}
        </div>
    )
}

export default Column
