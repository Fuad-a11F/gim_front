import axios from 'axios'
import React from 'react'
import InputText from '../../../Component/components/InputText'
import NewPassword from '../NewPassword'

const ChangePasswordPart = () => {
    let [oldPassword, setOldPassword] = React.useState('')
    let [isCorrectPassword, setIsCorrectPassword] = React.useState(false)

    function check_password() {
        axios.get('http://127.0.0.2:8000/api/user/check_password/'+oldPassword, { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } })
            .then(data => setIsCorrectPassword(data.data))
    }

    return (
            <div className='ChangePasswordPart'>
                <InputText name='fathername' value={oldPassword} setValue={setOldPassword} label='Старый пароль' placeholder='Введите старый пароль'/>
                <button onClick={() => check_password()}>Проверить</button>
                <NewPassword isCorrectPassword={isCorrectPassword} oldPassword={oldPassword} />
            </div>
        
    )
}

export default ChangePasswordPart
