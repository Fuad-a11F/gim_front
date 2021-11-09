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
    let progressRef = React.useRef()
    let timelineRef = React.useRef()
    let lengthRef = React.useRef()
    let currentRef = React.useRef()

    React.useEffect(() => {
        if (music.music) {
            audio.pause()
            audio.src = music.music
            audio.play()
            setIsPlay(true)
        }
    }, [music.music])

    function music_rewind(e) {
        const timelineWidth = window.getComputedStyle(timelineRef.current).width;
        const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
        console.log(timeToSeek);
        audio.currentTime = 43;
    }

    React.useEffect(() => {
        let audio_interval = setInterval(() => {
            progressRef.current.style.width = audio.currentTime / audio.duration * 100 + "%";
            currentRef.current.textContent = getTimeCodeFromNum(audio.currentTime);
        }, 500);

        audio.addEventListener('loadeddata', () => {
            lengthRef.current.textContent = getTimeCodeFromNum(audio.duration);
        })

        return () => {
            clearInterval(audio_interval)
        }
    }, [])

    function getTimeCodeFromNum(num) {
        let seconds = parseInt(num);
        let minutes = parseInt(seconds / 60);
        seconds -= minutes * 60;
        const hours = parseInt(minutes / 60);
        minutes -= hours * 60;
      
        if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
        return `${String(hours).padStart(2, 0)}:${minutes}:${String(seconds % 60).padStart(2, 0)}`;
    }

    function play() {
        if (!audio.src)
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
            <div className='audio__row'>
                <div className="audio__row-info">
                    {Object.keys(music) != 0 ? <p>{music.title}</p> : <p>Песня не выбрана</p>}
                </div>
                <div class="time">
                    <div ref={currentRef} class="current">0:00</div>
                    <div class="divider">/</div>
                    <div ref={lengthRef} class="length">0:00</div>
                </div>
            </div>
            <div className="audio__row-controls">
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
                <div ref={timelineRef} onClick={(e) => music_rewind(e)} class="timeline">
                    <div ref={progressRef} class="progress"></div>
                </div>
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
