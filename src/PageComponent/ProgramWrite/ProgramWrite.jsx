import axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import ButtonLink from '../../Component/components/ButtonLink'
import WritePagesTop from './WritePagesTop'
import { add_new_task, write_text } from '../../redux/ProgramWrite'
import TransformDate from '../../TransformDate'
import Table from './Table'
import './ProgramWrite.css'

const HEADER = [{name: 'Номер', class: 'table__number'}, 
                {name: 'Описание', class: 'table__desc'}, 
                {name: 'Подходы', class: 'table__sets'}, 
                {name: 'Повторения', class: 'table__reps'}]


const ProgramWrite = () => {
    let dispatch = useDispatch()
    let body = useSelector(state => state.programWrite.program)
    let ready_program = useSelector(state => state.programWrite)
   
    function save_program() {
        let date = TransformDate(ready_program.date)
        axios.post('http://127.0.0.2:8000/api/gim/create_program/', {date,
                                                                    user_to: ready_program.send,
                                                                    text: ready_program.text,
                                                                    action: ready_program.action,
                                                                    items: ready_program.program}, {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}})
    }
    
    return (
        <div className='programWrite__container'>
            <WritePagesTop />
            <hr />
            <Table header={HEADER} body={body}/>
            <hr />
            <ButtonLink onClick={() => dispatch(add_new_task())} title='+ Добавить поле' />
            <textarea value={ready_program.text} onChange={(e) => dispatch(write_text(e.target.value))} name="" id="" cols="30" placeholder='Добавить комментарий к программе' rows="10"></textarea>
            <button onClick={() => save_program()}>Отправить</button>
        </div>
    )
}

export default ProgramWrite
