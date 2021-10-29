import React from 'react'

const CardNew = ({ children, title }) => {
    return (
        <div className='card-component height-400-component'>
            {children}
            <div className="card-component-new">
                <div className="red-row-component"></div>
                <p>{title}</p>
            </div>
        </div>
    )
}

export default CardNew
