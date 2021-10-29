import React from 'react'
import Modal from '../../Modal/Modal'
import InputText from '../../Component/components/InputText'
import Button from '../../Component/components/Button'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { add_playlist } from '../../redux/PlaylistSlice'

const ModalAddPlaylist = ({ setModal, setValue, value }) => {
    let dispatch = useDispatch()
    
    function postAsyncPlaylist() {
        return async dispatch => {
            let data = await axios.post('http://127.0.0.2:8000/api/music/create_playlist/', { title: value }, 
                {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}})
            dispatch(add_playlist({id: data.data.id, title: data.data.title, music_count: 0}))
        }
    }

    return (
        <Modal setModal={setModal}>
            <div className='add__playlist'>
                <InputText value={value} setValue={setValue} label='Введите название' placeholder='Название' />
                <Button onClick={() => dispatch(postAsyncPlaylist())} title='Создать'/>
            </div>
        </Modal>
    )
}

export default ModalAddPlaylist
