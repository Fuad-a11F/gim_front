import React from 'react'
import { add_old_program } from '../../redux/Program'
import ButtonLink from '../../Component/components/ButtonLink'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import CardItem from './CardItem'
import axios from 'axios'

const OldProgram = () => {
    let old_program = useSelector(state => state.program.old_program)
    let dispatch = useDispatch()
    let [oldOpen, setOldOpen] = React.useState(false)

    function get_old() {
        if (!oldOpen) {
            axios.get('http://127.0.0.2:8000/api/gim/get_program_old/', {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}})
                .then(data => {
                    dispatch(add_old_program(data.data))
                })
        }
        setOldOpen(prev => !prev)
    }

    return (
        <div>
            <ButtonLink onClick={get_old} className='justify-center' title={(oldOpen ? 'Скрыть ' : 'Показать ') + 'старые программы'}/>
            {oldOpen && <div className='old__program'>
                {old_program.map(item => {
                    return <CardItem card={item} />
                })}
            </div>}
        </div>
    )
}

export default OldProgram
