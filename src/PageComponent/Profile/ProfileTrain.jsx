import axios from 'axios'
import React from 'react'

const ProfileTrain = () => {
    let [train, setTrain] = React.useState()

    React.useEffect(() => {
        axios.get('http://127.0.0.2:8000/api/gim/get_last_program/', {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}})
            .then(data => setTrain(data.data))
    } , [])

    return (
        <div>
            {train && (
                <div>
                    <p>Тренировка запланирована на: {train.date}</p>
                    <p>Вы ее сможете начать через: 78</p>
                    <button>Начать</button>
                </div>
            )}
        </div>
    )
}

export default ProfileTrain
