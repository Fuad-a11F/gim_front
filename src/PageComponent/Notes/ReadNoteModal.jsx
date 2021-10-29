import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import InputText from '../../Component/components/InputText'
import TextArea from '../../Component/components/TextArea'
import Modal from '../../Modal/Modal'
import close_icon from '../icon/close.png'
import update_icon from '../icon/update.png'
import cancel_icon from '../icon/cancel.png'
import save_icon from '../icon/save.png'
import delete_icon from '../icon/trash.png'
import { add_check_note, clear_check_note, delete_notes, total_delete, update_all_notes } from '../../redux/NoteSlice'

const ReadNoteModal = ({ check_note, setModal }) => {
    let dispatch = useDispatch()
    let [update, setUpdate] = React.useState(true)
    let [title, setTitle] = React.useState(check_note.title)
    let [text, setText] = React.useState(check_note.text)

    function delete_note() {
        axios.delete('http://127.0.0.2:8000/api/note/delete_note/'+check_note.id)
            .then(data => {
                setModal(false)
                dispatch(clear_check_note())
                dispatch(delete_notes(data.data))
                dispatch(total_delete())
            })
    }

    function save_update_note() {
        axios.put('http://127.0.0.2:8000/api/note/update_note/', {title, text, id: check_note.id})
            .then(data => {
                dispatch(add_check_note(data.data))
                dispatch(update_all_notes(data.data))
                setUpdate(true)
            })
    }
  
    return (
        <Modal setModal={setModal}>
            <div className='ReadNoteModal'>
                <div className="ReadNoteModal__row">
                    <div>
                        <img className='delete_icon-note' src={delete_icon} width='25' height='25' alt="" onClick={delete_note}/>
                        {update &&
                            <img src={update_icon} width='25' height='25' alt="" onClick={() => setUpdate(false)}/>
                        }
                        {!update && (
                            <>
                                <img className='save_icon-note' src={save_icon} width='25' height='25' alt="" onClick={save_update_note}/>
                                <img src={cancel_icon} width='25' height='25' alt="" onClick={() => setUpdate(true)}/>
                            </>
                        )}
                    </div>
                    <div>
                        <img src={close_icon} width='25' height='25' alt="" onClick={() => setModal(false)}/>
                    </div>
                </div>
                <div className="ReadNoteModal__note">
                    <InputText value={title} setValue={setTitle} type="text" readOnly={update} />
                    <TextArea value={text} setValue={setText} type="text" readOnly={update} />
                </div>
            </div>
        </Modal>
    )
}

export default ReadNoteModal
