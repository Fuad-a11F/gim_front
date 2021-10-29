import React from 'react'
import block from './images/block.png'
import classnames from 'classnames'
import InputText from './../../Component/components/InputText'
import axios from 'axios'

const NewPassword = ({ isCorrectPassword, oldPassword }) => {
    let [newPassword, setNewPassword] = React.useState('')
    let [repeatNewPassword, setRepeatNewPassword] = React.useState('')

    function change_password() {
        axios.post('http://127.0.0.2:8000/dj-rest-auth/password/change/', {
                                                                        new_password1: newPassword,
                                                                        new_password2: repeatNewPassword,
                                                                        old_password: oldPassword
                                                                    },{ headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } })
            .then(data => console.log(data))                                            
    }

    return (
        <div className={classnames({new__password: true, none_points: !isCorrectPassword})}>
            <div className={classnames({block: !isCorrectPassword})}></div>
            <div className={classnames({block__img: !isCorrectPassword})}><img className={classnames({none: isCorrectPassword})} src={block} alt="" /></div>
            <InputText name='name' value={newPassword} setValue={setNewPassword} label='Новый пароль' placeholder='Введите новый пароль'/>
            <InputText name='lastname' value={repeatNewPassword} setValue={setRepeatNewPassword} label='Подтвердите новый пароль' placeholder='Подтвердите новый пароль'/>
            <button onClick={() => change_password()}>Сохранить</button>
        </div>
    )
}

export default NewPassword
