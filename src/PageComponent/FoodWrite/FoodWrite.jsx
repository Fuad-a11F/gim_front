import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ButtonLink from '../../Component/components/ButtonLink'
import { add_new_task, write_text } from '../../redux/FoodWrite'
import Table from './Table'
import WritePagesTop from './WritePagesTop'
import './FoodWrite.css'

const HEADER = [{name: 'Номер', class: 'table__number'}, 
                {name: 'Описание', class: 'table__desc'}]

const FoodWrite = () => {
    let ready_food_program = useSelector(state => state.foodWrite)
    let body = useSelector(state => state.foodWrite.program)
    let dispatch = useDispatch()
   
    function save_program() {
        axios.post('http://127.0.0.2:8000/api/food/create_food_program/', {user_to: ready_food_program.send,
                                                                    text: ready_food_program.text,
                                                                    action: ready_food_program.action,
                                                                    items: ready_food_program.program}, {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}})
    }
    
    return (
        <div className='programWrite__container'>
            <WritePagesTop />
            <hr />
            <Table header={HEADER} body={body} />
            <hr />
            <ButtonLink onClick={() => dispatch(add_new_task())} title='+ Добавить поле' />
            <textarea value={ready_food_program.text} onChange={(e) => dispatch(write_text(e.target.value))} name="" id="" cols="30" placeholder='Добавить комментарий к программе' rows="10"></textarea>
            <button onClick={() => save_program()}>Отправить</button>
        </div>
    )
}

export default FoodWrite
