import React from 'react'

const Modal = ({ setModal, option, setValue }) => {
    function select(e) {
        setValue(e.target.textContent);
        setModal(false)
    }

    function modal_open(e) {
        if (!e.target.classList.contains('input')) {
            setModal(false)
        }
    }

    React.useEffect(() => {
        window.addEventListener('click', modal_open)

        return () => {
            window.removeEventListener('click', modal_open)
        }
    }, [])

    return (
        <div className='form__modal' onClick={(e) => select(e)}>
            {option.map(item => {
                return <p key={item} className='form__item'>{item}</p>
            })}
        </div>
    )
}

export default Modal
