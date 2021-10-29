import React from 'react'
import { add_user } from '../../../redux/UserSlice'
import avatarka from '../images/avatarka.jpg'
import Button from '../../../Component/components/Button'
import InputText from '../../../Component/components/InputText'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { CountAge } from '../../../CountAge'

const MainPart = () => {
    let dispatch = useDispatch()
    let [username, setUsername] = React.useState('Загрузка...')
    let [lastname, setLastname] = React.useState('Загрузка...')
    let [fathername, setFathername] = React.useState('Загрузка...')
    let [birth, setBirth] = React.useState('Загрузка...')
    let [email, setEmail] = React.useState('Загрузка...')
    let [phone, setPhone] = React.useState('Загрузка...')

    React.useEffect(() => {
        axios.get('http://127.0.0.2:8000/api/user/get_user/', {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}})
            .then(data => {
                dispatch(add_user(data.data))
                setUsername(data.data.username ?? '')
                setLastname(data.data.lastname ?? '')
                setFathername(data.data.fathername ?? '')
                setBirth(data.data.birth ?? null)
                setEmail(data.data.email ?? '')
                setPhone(data.data.phone ?? '')
            })
    }, [])

    function update_user() {
        axios.patch('http://127.0.0.2:8000/api/user/update_user/', {username, fathername, lastname, birth, email, phone}, { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } })
    }

    return (
            <div className="setting__grid">
                <div className='setting__info'>
                    <div className='setting__image'>
                        <img src={avatarka} alt="" />
                    </div>
                    <div className='setting__row'>
                        <p>{username}</p>
                        <p>{lastname}</p>
                        <p>{fathername}</p>
                        <p>({CountAge(birth)} лет)</p>
                    </div>
                    <p>Email: {email}</p>
                    <p>Phone: {phone}</p>
                </div>
                <div>
                    <InputText name='name' label='Имя' value={username ?? ''} setValue={(e) => setUsername(e)} placeholder='Введите Ваше имя'/>
                    <InputText name='lastname' label='Фамилия' value={lastname ?? ''} setValue={(e) => setLastname(e)} placeholder='Введите Вашу фамилия'/>
                    <InputText name='fathername' label='Отчество' value={fathername ?? ''} setValue={(e) => setFathername(e)} placeholder='Введите Ваше отчества'/>
                    <InputText name='birthday' label='Дата рождения' value={birth ?? ''} setValue={(e) => setBirth(e)} placeholder='Введите Ваше отчества'/>
                    <InputText name='email' label='E-mail' value={email ?? ''} readOnly={true} setValue={(e) => setEmail(e)} placeholder='Введите Ваш E-mail'/>
                    <p className='warning'>*Email изменить нельзя</p>
                    <InputText name='phone' label='Телефон' value={phone ?? ''} setValue={(e) => setPhone(e)} placeholder='Введите Ваш телефон'/>
                    <Button onClick={() => update_user()} title='Сохранить' />
                </div>
            </div>
    )
}

export default MainPart
