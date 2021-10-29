import React from 'react'
import icon from './images/arrow_bottom.png'
import Tab from './Tab'

const InputSelect = ({ value, setValue, label, name, placeholder, option }) => {
    let [modal, setModal] = React.useState(false)

    return (
        <div className='form__input-body'>
            <label htmlFor={name} className='form__label label'>{label}</label>
            <input type="text" value={value} autoComplete="off" className='input' onClick={() => setModal(true)} id={name} placeholder={placeholder} />
            {modal && <Tab setValue={setValue} setModal={setModal} option={option} />}
            <img className='form__image' src={icon} width='22' height='22' alt="" />
        </div>
    )
}

export default InputSelect
