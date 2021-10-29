import React from 'react'
import { useSelector } from 'react-redux'
import pause_icon from '../../PageComponent/icon/pause.png'
import play_icon from '../../PageComponent/icon/play.png'
import next_icon from '../../PageComponent/icon/next.png'
import prev_icon from '../../PageComponent/icon/prev.png'
import sound_icon from '../../PageComponent/icon/sound.png'
import sound_none_icon from '../../PageComponent/icon/sound_none.png'
import add_icon from '../../PageComponent/icon/add.png'

let audio = new Audio()

const AudioPlayer = () => {
    let music = useSelector(state => state.playlist.now_singing)
    let [isPlay, setIsPlay] = React.useState(false)

    React.useEffect(() => {
        if (music.music) {
            audio.pause()
            audio.src = music.music
            audio.play()
            setIsPlay(true)
        }
    }, [music.music])

    function play() {
        audio.src = music.music
        audio.play()
        setIsPlay(true)
    }

    function pause() {
        audio.pause()
        setIsPlay(false)
    }

    return (
        <div className="audio__wrapper">
            <div className="audio__row-info">
                {Object.keys(music) != 0 ? <p>{music.title}</p> : <p>Песня не выбрана</p>}
            </div>
            <div className="audio__row-controls mt-10">
                <button className='audio__btn'>
                    <img src={prev_icon} width='19' height='19' alt="" />
                </button>
                {!isPlay && <button className='audio__btn' onClick={() => play()}>
                                <img src={pause_icon} width='30' height='30' alt="" />
                            </button>}
                {isPlay && <button className='audio__btn' onClick={() => pause()}>
                                <img src={play_icon} width='30' height='30' alt="" />
                            </button>}
                <button className='audio__btn'>
                    <img src={next_icon} width='19' height='19' alt="" />
                </button>
                <input className='music-long' type="range" />
                <button className='audio__btn'>
                    <img src={sound_icon} width='21' height='21' alt="" />
                </button>
                <input className='music-sound' type="range" />
                <button className='audio__btn'>
                    <img src={add_icon} width='30' height='30' alt="" />
                </button>
            </div>
        </div>
    )
}

export default AudioPlayer
