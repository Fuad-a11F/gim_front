import React from 'react'

const InputCheck = ({ name, children, value, setValue, className }) => {
    return (
        <div className='form__input-body'>
            <input className={'checkbox ' + className} type="checkbox"  checked={value} onChange={() => setValue(!value)} />
            <label className='check-label' onClick={() => setValue(!value)} htmlFor={name}>{children}</label>
        </div>
    )
}

export default InputCheck
