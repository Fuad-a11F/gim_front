import axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux'
import InputText from '../../Component/components/InputText'
import AbonementPayInfo from './AbonementPayInfo'
import back from './images/back.png'
import front from './images/front.png'
import MusicPayInfo from './MusicPayInfo'
import './Pay.css'

const Pay = () => {
    let frontRef = React.useRef()
    let backRef = React.useRef()

    let numberRef = React.useRef()
    let dateRef = React.useRef()
    let nameRef = React.useRef()
    let cvvRef = React.useRef()

    let [number, setNumber] = React.useState('')
    let [date, setDate] = React.useState('')
    let [name, setName] = React.useState('')
    let [cvv, setCvv] = React.useState('')

    let coach = useSelector(state => state.coach.coach)

    React.useEffect(() => {
        numberRef.current.textContent = number
        dateRef.current.textContent = date
        nameRef.current.textContent = name
        cvvRef.current.textContent = cvv
    }, [number, name, cvv, date])

    function rotate() {
        frontRef.current.classList.add('rotate-180')
        backRef.current.classList.add('rotate-360')
    }

    function rotateNone() {
        frontRef.current.classList.remove('rotate-180')
        backRef.current.classList.remove('rotate-360')
    }

    let create_ticket = useSelector(state => state.ticket.create_ticket)

    function pay_and_buy(e) {
        e.preventDefault()
        axios.post('http://127.0.0.2:8000/api/gim/create_ticket/', {start_time: create_ticket.start_time,
                                                                    finish_time: create_ticket.finish_time,
                                                                    whom_id: create_ticket.what_ticket_buy,
                                                                    coach: coach.id}, {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}})
    }

    let params = new URLSearchParams(window.location.search);

    return (
        <div className='pay__row'>
            <div className='pay'>
                <div className="card">
                    <div ref={frontRef} className='card__wrapper front'>
                        <img src={front} alt="" />
                        <p ref={numberRef} className='card__label first-label'></p>
                        <p ref={dateRef} className='card__label second-label'></p>
                        <p ref={nameRef} className='card__label third-label'></p>
                    </div>
                    <div ref={backRef} className='card__wrapper back'>
                        <img src={back} alt="" />
                        <p ref={cvvRef} className='card__label fourth-label'></p>
                    </div>
                </div>
                <form action='#' onSubmit={(e) => pay_and_buy(e)} className='pay__column'>
                    <InputText value={number} setValue={setNumber} name='number' autoComplete='off' label='Номер' placeholder='Введите номер карты' />
                    <InputText value={date} setValue={setDate} name='date' autoComplete='off' label='Срок действия' placeholder='Введите срок действия' />
                    <InputText value={name} setValue={setName} name='name' autoComplete='off' label='Имя и фамилия' placeholder='Введите имя и фамилию' />
                    <InputText value={cvv} setValue={setCvv} name='cvv' autoComplete='off' onFocus={() => rotate()} onBlur={() => rotateNone()} label='CVV' placeholder='Введите CVV' />
                    <button className='button'>Оплатить</button>
                </form>
            </div>
            {params.has('abonement') && <AbonementPayInfo isCoach={params.get('coach')} period={params.get('period')}  image={front} />}
            {params.has('music') && <MusicPayInfo image={front} />}
        </div>
        
    )
}

export default Pay
