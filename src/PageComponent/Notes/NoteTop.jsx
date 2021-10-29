import axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import Button from '../../Component/components/Button'
import { total_set } from '../../redux/NoteSlice'

const NoteTop = ({ setModal }) => {
    let dispatch = useDispatch()
    let count = useSelector(state => state.note.total)

    React.useEffect(() => {
        axios.get('http://127.0.0.2:8000/api/note/count_note/', {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}})
            .then(data => dispatch(total_set(data.data)))
    }, [])

    return (
        <div className="note__row">
            <div>Всего: {count ?? 'Загрузка...'}</div>
            <div><Button title='Cоздать' onClick={() => setModal(true)} /></div>
        </div>
    )
}

export default NoteTop
