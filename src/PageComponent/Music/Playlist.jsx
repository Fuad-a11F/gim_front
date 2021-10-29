import axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import ButtonLink from '../../Component/components/ButtonLink'
import { add_playlist_array } from '../../redux/PlaylistSlice'
import ModalAddPlaylist from './ModalAddPlaylist'

const Playlist = () => {
    let [modal, setModal] = React.useState(false)
    let [value, setValue] = React.useState('')
    let dispatch = useDispatch()
    let playlist = useSelector(state => state.playlist.playlist)

    React.useEffect(() => {
        axios.get('http://127.0.0.2:8000/api/music/get_playlist/', {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}})
            .then(data => dispatch(add_playlist_array(data.data)))
    }, [])

    return (
        <>
        <div className='playlist'>
            <h3>Плейлисты</h3>
            {playlist.map(item => {
                return (
                    <div key={item.id} className='playlist__row'>
                        <NavLink to={'/music/' + item.id}>{item.title}</NavLink>
                        <p>{item.music_count}</p>
                    </div>
                )
            })}
            <hr />
            <ButtonLink onClick={() => setModal(true)} title='+ создать плейлист' />
        </div>
        {modal && <ModalAddPlaylist value={value} setValue={setValue} setModal={setModal}/>}
        </>
    )
}

export default Playlist
