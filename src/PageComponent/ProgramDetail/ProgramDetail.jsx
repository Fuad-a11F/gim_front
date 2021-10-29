import React from 'react'
import axios from 'axios'
import ProgramDetailTable from './ProgramDetailTable'
import Button from '../../Component/components/Button'
import { useDispatch } from 'react-redux'
import { add_all_program } from '../../redux/ProgramDetail'
import { useSelector } from 'react-redux'
import moment from 'moment'

const HEADER = [{name: 'Номер', class: 'table__number'}, 
                {name: 'Описание', class: 'table__desc'}, 
                {name: 'Подходы', class: 'table__sets'}, 
                {name: 'Повторения', class: 'table__reps'},
                {name: 'Сделано', class: 'table__reps'}]

const ProgramDetail = () => {
    let dispatch = useDispatch()
    let disable = useSelector(state => state.programDetail.disable)
    let index = window.location.pathname.slice(window.location.pathname.lastIndexOf('/') + 1)
  
    React.useEffect(() => {
        axios.get('http://127.0.0.2:8000/api/gim/get_program_item/' + index, {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}})
            .then(data => {
                dispatch(add_all_program(data.data[0].programItems))
                axios.put('http://127.0.0.2:8000/api/gim/begin_train/' + index, {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}}) 
            })
    }, [])

    function finish_train() {
        axios.put('http://127.0.0.2:8000/api/gim/finish_train/' + index, {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}})

    }

    return (
        <div>
            <ProgramDetailTable header={HEADER} />
            <Button disabled={disable} onClick={finish_train} title='Завершить'/>
        </div>
    )
}

export default ProgramDetail
