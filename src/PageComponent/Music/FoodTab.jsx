import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import ButtonLink from '../../Component/components/ButtonLink'
import { plus_music_count, minus_music_count } from '../../redux/PlaylistSlice'

const FoodTab = ({ music_id }) => {
    let playlist = useSelector(state => state.playlist.playlist)
    let dispatch = useDispatch()

    async function add_to_playlist(id_music, id_playlist) {
        let data = await axios.put('http://127.0.0.2:8000/api/music/create_playlist_item/', {id_playlist, id_music}, {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}})
  
        if (!('error' in data.data)) {
            dispatch(plus_music_count(id_playlist))

            if (data.data.prev != null){
                dispatch(minus_music_count(data.data.prev))
            }
        }

        else {
            // обработать ошибку
        }

    }   

    return (
        <div className='foodTab__wrapper'>
            <div className='foodTab'> 
            <h4>Добавить в плейлист:</h4>
                {playlist.map(item => <ButtonLink onClick={() => add_to_playlist(music_id, item.id)} className='food_btn_start' title={item.title} />)}
            </div>
        </div>
    )
}

export default FoodTab
