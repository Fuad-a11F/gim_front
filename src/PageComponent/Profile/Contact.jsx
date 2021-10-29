import React from 'react'
import axios from 'axios'

const Contact = ({ user_id }) => {
    let [contacts, setContacts] = React.useState()

    React.useEffect(() => {
        axios.get('http://127.0.0.2:8000/api/user/get_user_contacts/' + user_id, {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}})
            .then(data => setContacts(data.data))
    }, [user_id])

    return (
        <>
        {contacts && (
            <div className='profile__info'> 
                <p>Email: {contacts.email ?? 'Отсутсвует'}</p>
                <p>Номер телефона: {contacts.phone ?? 'Отсутсвует'}</p>
                <p>Instagram: {contacts.instagram ?? 'Отсутсвует'}</p>
                <p>Facebook: {contacts.facebook ?? 'Отсутсвует'}</p>
                <p>Twitter: {contacts.twitter ?? 'Отсутсвует'}</p>
                <p>Предпочитаемый способ связи: шрфыпваол</p>
            </div>
        )}
        </>
    )
}

export default Contact
