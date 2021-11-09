import axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { total_set } from '../../redux/NoteSlice'
import add from '../icon/add.png'

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
            <img src={add} width='30' height='30' alt="" onClick={() => setModal(true)} />
        </div>
    )
}

export default NoteTop
