import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Modal from '../../Modal/Modal'
import { add_coach, remove_coach } from '../../redux/CoachSlice'

const ModalSignUp = ({ setModal, coach_id }) => {
    let dispatch = useDispatch()
    let coach = useSelector(state => state.coach.coach)
    let [period, setPeriod] = React.useState('month')

    React.useEffect(() => {
        axios.get('http://127.0.0.2:8000/api/gim/coach/'+coach_id).then(data => dispatch(add_coach(data.data)))
    }, [])


    return (
        <Modal setModal={setModal}>
            {coach && (
                <>
                    <p>{coach.name} {coach.lastname}</p>
                    <p>{coach.birth}</p>
                    <p>{coach.experience}</p>
                    <p>{coach.about}</p>
                    <p>{coach.email}</p>
                    <select onChange={(e) => setPeriod(e.target.value)} name="" id="">
                        <option value="month">Месяц</option>
                        <option value="week">Неделя</option>
                        <option value="year">Год</option>
                    </select>
                    <NavLink to={`/pay?abonement=true&period=${period}&coach=true`} >Записаться</NavLink>
                </>
            )}
        </Modal>
    )
}

export default ModalSignUp
