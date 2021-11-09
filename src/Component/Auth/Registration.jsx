import React from 'react'
import Button from '../components/Button'
import InputCheck from '../components/InputCheck'
import InputSelect from '../components/InputSelect'
import InputText from '../components/InputText'
import Link from '../components/Link'
import Modal from '../../Modal/Modal'
import Title from '../components/Title'
import './Auth.css'
import axios from 'axios'

const Registration = ({ setModal }) => {
    let [name, setName] = React.useState('')
    let [lastName, setLastName] = React.useState('')
    let [email, setEmail] = React.useState('')
    let [password, setPassword] = React.useState('')
    let [password2, setPassword2] = React.useState('')
    let [passwordAdmin, setPasswordAdmin] = React.useState('')
    let [status, setStatus] = React.useState('') 
    let [agree, setAgree] = React.useState(false) 
    let [disabled, setDisabled] = React.useState(true)
    let option = ['student', 'coach']

    function validateEmail(str) {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if(reg.test(str) == false) {
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
        axios.post('http://127.0.0.2:8000/dj-rest-auth/registration/', {username: name, lastName, position: status, email, password1: password, password2: password})
        setModal(false)
    }

    React.useEffect(() => {
        if (status == 'student') {
            if (name && lastName && email && password && password2 && status && agree) 
                setDisabled(false)
            else 
                setDisabled(true)
        }
        else if (status == 'coach') {
            if (name && lastName && email && password && password2 && status && agree && passwordAdmin) 
                setDisabled(false)
            else 
                setDisabled(true)
        }
    }, [name, lastName, email, password, password2, status, agree, passwordAdmin])

    return (
        <Modal setModal={setModal}>
            <div className='form'>
                <div className="form__wrapper">
                    <Title className='form__title' title='Регистрация' />
                    <div className='form__login mb-40'>
                        <p className='form__subtitle subtitle'>Уже есть аккаунт?</p>
                        <Link title='Войти' to='#' />
                    </div>
                    <form action="#" onSubmit={(e) => sendForm(e, email)}>
                        <InputText type='name' value={name} setValue={setName} name='name' label='Имя' placeholder='Введите Ваше имя'/>
                        {/* <InputText type='name' value={lastName} setValue={setLastName} name='lastname' label='Фамилия' placeholder='Введите Вашу фамилию'/> */}
                        <InputText value={email} setValue={setEmail} name='email' label='Еmail' placeholder='Введите ваш email'/>
                        <InputText type='text' value={password} setValue={setPassword} name='password' label='Пароль' placeholder='Введите пароль'/>
                        <InputText type='text' value={password2} setValue={setPassword2} name='password2' label='Повторите пароль' placeholder='Введите пароль повторно'/>
                        {/* <InputSelect value={status} setValue={setStatus} name='language' label='Статус' placeholder='Статус' option={option} /> 
                        {status === 'coach' && 
                            <InputText type='text' value={passwordAdmin} setValue={setPasswordAdmin} name='passwordAdmin' label='Пароль админа' placeholder='Введите пароль одного из админов'/>
                        } */}
                        <InputCheck value={agree} setValue={setAgree} name='agree'>Принимаю <Link title='условия' to='#' /> использования</InputCheck>
                        <Button disabled={disabled} title='Зарегистрироваться'/>
                    </form>
                </div>
            </div>
        </Modal>
    )
}

export default Registration
