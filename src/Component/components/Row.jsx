import React from 'react'
import './components.css'

const Row = ({ children }) => {
    return (
        <div className='row-component'>
            {children}
        </div>
    )
}

export default Row
