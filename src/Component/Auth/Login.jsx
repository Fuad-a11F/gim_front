import React from 'react'
import Button from '../components/Button'
import InputText from '../components/InputText'
import Link from '../components/Link'
import Modal from '../../Modal/Modal'
import Title from '../components/Title'
import './Auth.css'
import InputCheck from '../components/InputCheck'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/AuthSlice'
import { add_ticket } from '../../redux/TicketSlice'

const Login = ({ setModal }) => {
    let [email, setEmail] = React.useState('')
    let [password, setPassword] = React.useState('')
    let [agree, setAgree] = React.useState(false) 
    let [disabled, setDisabled] = React.useState(true)
    let dispatch = useDispatch()

    function validateEmail(str) {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if(reg.test(str) === false) {
           return false;
        }
        return true
    }

    function sendForm(e, str) {
        e.preventDefault()
        if (!validateEmail(str)) {
            alert('ошибка')
            return
        }
        axios.post('http://127.0.0.2:8000/dj-rest-auth/login/', {email, password}).then(data => {
            dispatch(login());
            localStorage.setItem('token', data.data.access_token)
            axios.get('http://127.0.0.2:8000/api/gim/check_user/', {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}}).then(data => {
                dispatch(add_ticket(data.data));
            })
        })
        setModal(false)
    }

    React.useEffect(() => {
        if (email && password) 
            setDisabled(false)
        else 
            setDisabled(true)
    }, [email, password])

    return (
        <Modal setModal={setModal}>
            <div className='form'>
                <div className="form__wrapper">
                    <Title className='form__title' title='Регистрация' />
                    <div className='form__login mb-20'>
                        <p className='form__subtitle subtitle'>Еще нет аккаунта?</p>
                        <Link title='Создать' to='#' />
                    </div>
                    <form action="#" onSubmit={(e) => sendForm(e, email)}>
                        <InputText value={email} setValue={setEmail} name='email' label='Еmail' placeholder='Введите ваш email'/>
                        <InputText type='text' value={password} setValue={setPassword} name='password' label='Пароль' placeholder='Введите пароль'/>
                        <InputCheck value={agree} setValue={setAgree} name='agree'>Запомнить меня</InputCheck>
                        <Button disabled={disabled} title='Войти'/>
                    </form>
                </div>
            </div>
        </Modal>
    )
}

export default Login
