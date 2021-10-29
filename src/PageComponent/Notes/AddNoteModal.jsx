import React from 'react'
import Modal from '../../Modal/Modal'
import InputText from '../../Component/components/InputText'
import TextArea from '../../Component/components/TextArea'
import Button from '../../Component/components/Button'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { add_note, total_add } from '../../redux/NoteSlice'

const AddNoteModal = ({ setModal }) => {
    let [title, setTitle] = React.useState('')
    let [text, setText] = React.useState('')
    let dispatch = useDispatch()

    function create_note(e) {
        e.preventDefault()
        axios.post('http://127.0.0.2:8000/api/note/create_note/', { title, text }, {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}})
            .then(data => {
                dispatch(add_note(data.data))
                dispatch(total_add())
                setModal(false)
            })
    }
    
    return (
        <Modal setModal={setModal}>
            <form action='#' onSubmit={(e) => create_note(e)} className='addnote__modal'>
                <InputText autoComplete='off' value={title} setValue={setTitle} name='label' label='Название заметки' placeholder='Введите название заметке' />
                <TextArea value={text} setValue={setText} />
                <Button title='Добавить' />
            </form>
        </Modal>
    )
}

export default AddNoteModal
