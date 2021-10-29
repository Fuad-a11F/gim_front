import React from 'react'

function checkNumber(str) {
    return str.length-str.replace(/\d/gm,'').length < 13
}


const InputText = ({ type, value, setValue, name, label, placeholder, onFocus, onBlur, autoComplete = 'on', readOnly = false }) => {

    function change(e) {
        let index = e.target.value.charCodeAt(e.target.value.length - 1)
        switch (type) {
            case 'name':
                if ((Number(index) >= 65 && Number(index) <= 90) || 
                    (Number(index) >= 97 && Number(index) <= 122) ||
                    (Number(index) >= 1040 && Number(index) <= 1103) || 
                    Number(index) === 45 || Number(index) === 32){
                    setValue(e.target.value)
                }
                break;

            case 'number':
                if (e.target.value.length === 0) {
                    setValue(e.target.value)
                    break
                }
                if ((Number(index) >= 48 && Number(index) <= 57 && checkNumber(e.target.value)) || 
                Number(index) === 45 || Number(index) === 41 || Number(index) === 40 || Number(index) === 43) {
                    setValue(e.target.value)
                }
                break;
        
            default:
                setValue(e.target.value);
        }
    }

    return (
        <div className='form__input-body'>
            <label htmlFor={name} className='form__label label'>{label}</label>
            <input type="text" readOnly={readOnly} autoComplete={autoComplete} onBlur={onBlur} id={name} value={value} onFocus={onFocus} onChange={(e) => change(e)} className='form__input input' placeholder={placeholder} />
        </div>
    )
}

export default InputText
