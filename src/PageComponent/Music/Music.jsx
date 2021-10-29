import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import Main from '../../Component/components/Main'
import SideBar from '../../Component/components/SideBar'
import WrapperColumns from '../../Component/components/WrapperColumns'
import AllMusic from './AllMusic'
import Favorite from './Favorite'
import Filter from './Filter'
import MusicItem from './MusicItem'
import Playlist from './Playlist'
import Sort from './Sort'
import './Music.css'
import Search from './Search'
import AudioPlayer from '../../Component/components/AudioPlayer'


const Music = ({ path }) => {
    let [music, setMusic] = React.useState([])
 
    React.useEffect(() => {
        if (!path) {
            axios.get('http://127.0.0.2:8000/api/music/get_music/').then(data => setMusic(data.data))
        }
        else if (path) {
            let index = window.location.pathname.lastIndexOf('/')
            axios.get('http://127.0.0.2:8000/api/music/get_playlist_item/' + window.location.pathname.slice(index+1))
                .then(data => setMusic(data.data))
        }
    }, [path])

    return (
        <WrapperColumns>
            <SideBar>
                <AllMusic />
                <Favorite />
                <Playlist />
                <Search />
                <Filter />
                {/* <Sort /> */}
            </SideBar>
            <Main>
                <div className='music__wrapper'>
                    {music.map((item, i) => <MusicItem key={item.id} index={i} item={item}/>)}
                </div>
                <AudioPlayer />
            </Main>
        </WrapperColumns>
    )
}

export default Music
