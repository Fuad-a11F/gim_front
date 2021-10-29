import React from 'react'
import CardItem from './CardItem'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { add_program } from '../../redux/Program'
import OldProgram from './OldProgram'
import './Program.css'

const Program = () => {
    let program = useSelector(state => state.program.program)
    let dispatch = useDispatch()
    
    React.useEffect(() => {
        axios.get('http://127.0.0.2:8000/api/gim/get_program/', {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}})
            .then(data => dispatch(add_program(data.data)))
    }, [])

    return (
        <div className='program'>
            {program.length == 0 && <div className="program__none"><p>Список программ тренировок пуст</p></div>}

            <div className="program__wrapper">
                {program.map(item => {
                    return <CardItem key={item.id} card={item}/>
                })}
            </div>  
            
            <OldProgram />
        
        </div>
    )
}

export default Program
