import React from 'react'
import { useDispatch } from 'react-redux'
import { play_music } from '../../redux/PlaylistSlice'
import FoodTab from './FoodTab'

const MusicItem = ({ item, index }) => {
    let [tab, setTab] = React.useState(false)
    let dispatch = useDispatch()

    function start_music() {
        dispatch(play_music({...item, play: true}))
    }

    return (
        <div className='music__item'>
            <div>
                <p className='music__item-link' onClick={() => start_music()}>0{index + 1}. {item.title}</p>
            </div>
            <div className='music__item-buttons'>
                <button>Избранное</button>
                <button onClick={() => setTab(prev => !prev)}>+</button>
                {tab && <FoodTab music_id={item.id} />}
            </div>
        </div>
    )
}

export default MusicItem
