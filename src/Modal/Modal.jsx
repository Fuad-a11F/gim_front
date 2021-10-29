import React from 'react'
import styles from './Modal.module.css'

const Modal = ({ children, setModal }) => {

    function closeModal(e) {
        if (e.target.classList.contains(styles.modal)) {
            setModal(false)
        }
    }

    React.useEffect(() => {
        window.addEventListener('click', closeModal)

        return () => {
            window.removeEventListener('click', closeModal)
        }
    })

    return (
        <div className={styles.modal}>
            <div className={styles.modal__wrapper}>
                {children}
            </div>
        </div>
    )
}

export default Modal
