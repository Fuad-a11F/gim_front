import React from 'react'

const TextArea = ({ value, setValue, readOnly }) => {
    return (
        <textarea value={value} readOnly={readOnly} onChange={(e) => setValue(e.target.value)} name="" id="" rows='7' className='textArea'></textarea>
    )
}

export default TextArea
