import axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { change_done, check_all_true } from '../../redux/ProgramDetail'

const ProgramDetailTable = ({ header }) => {
    let body = useSelector(state => state.programDetail.program)
    let dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(check_all_true())
    }, [body])

    function set_done(ind, id) {
        axios.put('http://127.0.0.2:8000/api/gim/set_program_done_program/' + id).then(() => {
            dispatch(change_done(ind))
            dispatch(check_all_true())
        })
    }

    return (
        <div className='programWrite__table'>
            <table >
                <thead>
                    <tr>
                        {header.map(item => <th key={item.name} className={item.class}>{item.name}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {body.map((item, i) => {
                        return  <tr key={item.id} className='programWrite__item'>
                                    <td>{item.number}</td>
                                    {/* <td><input value={item.text} type="text" placeholder='Описание' /></td>
                                    <td><input value={item.sets} type="number" placeholder='Подходы' /></td>
                                    <td><input value={item.reps} type="number" placeholder='Повторения' /></td>
                                    <td><input type="checkbox" checked={item.done} onChange={() => set_done(i, item.id)} /></td> */}
                                    <td><p>{item.text}</p></td>
                                    <td><p>{item.sets}</p></td>
                                    <td><p>{item.reps}</p></td>
                                    <td><input type="checkbox" checked={item.done} onChange={() => set_done(i, item.id)} /></td>
                                </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ProgramDetailTable
