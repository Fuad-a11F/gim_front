import React from 'react'
import ava from './images/abonement.jpg'
import ModalDetailCoach from './ModalDetailCoach'
import ModalSignUp from './ModalSignUp'

const Coach = ({ coach }) => {
    let [modal, setModal] = React.useState()
    let [modal_2, setModal_2] = React.useState()

    return (
        <>
            <div className="coach__wrapper">
                <div className="coach__info">
                    <div className='coach__image'>
                        <img src={ava} alt="" />
                        <div className='coach__dark'>
                            <button onClick={() => setModal_2(true)}>Подробнее</button>
                        </div>
                    </div>
                    <div>
                        <p>{coach.name} {coach.lastname}</p>
                        <p>Стаж работы: {coach.experience} лет</p>
                        <p>О себе: {coach.about}</p>
                        <p>Учеников: 8</p>
                        <button onClick={() => setModal(true)}>Записаться</button>
                        <hr />
                        <p>Оценка</p>
                    </div>
                </div>
            </div>
            {modal && <ModalSignUp coach_id={coach.id} setModal={setModal}/>}
            {modal_2 && <ModalDetailCoach setModal={setModal_2}/>}
        </>
    )
}

export default Coach
