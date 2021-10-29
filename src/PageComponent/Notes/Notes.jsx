import axios from 'axios'
import React from 'react'
import AddNoteModal from './AddNoteModal'
import NoteItem from './NoteItem'
import { useDispatch, useSelector } from 'react-redux'
import { add_all_notes, add_check_note, clear_check_note } from '../../redux/NoteSlice'
import ReadNoteModal from './ReadNoteModal'
import NoteTop from './NoteTop'
import './Notes.css'

const Notes = () => {
    let [modal, setModal] = React.useState(false)
    let [modal1, setModal1] = React.useState(false)
    let note = useSelector(state => state.note.all_notes)
    let check_note = useSelector(state => state.note.check_note)
    let dispatch = useDispatch()

    React.useEffect(() => {
        axios.get('http://127.0.0.2:8000/api/note/get_note/', {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}})
            .then(data => dispatch(add_all_notes(data.data)))
    }, [])

    React.useEffect(() => {
        setModal1(Object.keys(check_note).length > 0)
    }, [check_note])

    React.useEffect(() => {
        modal1 === false && dispatch(clear_check_note())
    }, [modal1])

    return (
        <>
            <div>
                <NoteTop setModal={setModal} />
                <hr />
                {note.length == 0 && <div className='note__zero'>
                    <p>Заметок нет. Создайте первую</p>
                </div>}
                <div className='note__list'>
                    {note.map(item => {
                        return <NoteItem key={item.id} onClick={() => dispatch(add_check_note(item))} note={item}/>
                    })}
                </div>
            </div>
            {modal && <AddNoteModal setModal={setModal}/>}
            {modal1 && <ReadNoteModal setModal={setModal1} check_note={check_note}/>}
        </>
        
    )
}

export default Notes
