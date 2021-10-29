import axios from 'axios'
import moment from 'moment'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import Link from '../../Component/components/Link'
import TimeCorrect from '../../CorrectTime'
import { add_now_program } from '../../redux/Program'
import ava from './images/program.jpg'
import Timer from './Timer'
import './ProgramStart.css'

const ProgramStart = () => {
    let id = window.location.pathname.slice(window.location.pathname.lastIndexOf('/') + 1)
    let dispatch = useDispatch()
    let program = useSelector(state => state.program.program)
    let old_program = useSelector(state => state.program.old_program)
    let nowProgram = useSelector(state => state.program.now_program)

    React.useEffect(() => {
        program.forEach(item => {
            if (item.id == id) {
                dispatch(add_now_program(item))
            }
        })
        
        old_program.forEach(item => {
            if (item.id == id) {
                dispatch(add_now_program(item))
            }
        })

    }, [])
    
    if (program.length == 0) {
        return <Redirect to="/program" />
    }

    function time_left() {
        let result = ''
        let point_time = moment(nowProgram.date + '00:00:00', 'YYYY-MM-DD HH:mm:ss')
        let now_time = moment()

        let days = point_time.diff(now_time, 'days')
        let hours = point_time.diff(now_time, 'hours')
        let minutes = point_time.diff(now_time, 'minutes')
        let seconds = point_time.diff(now_time, 'seconds')
        
        if (days < 0) return 'Сейчас'
        else result += `${days} | `
     
        if (hours < 0) return 'Сейчас'
        else result += `${hours} | `
  
        if (minutes < 0) return 'Сейчас'
        else result += `${minutes - 60 * hours} | `

        if (minutes < 0) return 'Сейчас'
        else result += `${seconds - 60 * minutes} |`

        return result
    }

    return (
        <div className='programStart'>
            <div className="programStart__image">
                <img src={ava} alt="" />
                {nowProgram.new_type == 'New' && <div className="program__did">Новая</div>}
            </div>
            <div>
                {Object.keys(nowProgram).length != 0 && (
                    <>
                        <h2>Тренировка под номером: 23</h2>
                        <p>Запланирована на: {TimeCorrect(nowProgram.time, 'detail-date')}</p>
                        <p>Тренер: {nowProgram.user.name} {nowProgram.user.lastname}</p>
                        <p>Вы сможете начать тренировку через:</p>
                        <Timer timeLeft={time_left().split('|')}/>  
                    </>
                )}
                <div className={time_left() != 'Сейчас' && 'disabled'}>
                    <Link to={'/program/programDetail/'+id}  title={nowProgram.new_type == 'New' ? 'Начать' : 'Посмотреть программу'} />
                </div>
            </div>
        </div>
    )
}

export default ProgramStart
