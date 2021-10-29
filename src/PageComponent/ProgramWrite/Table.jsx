import React from 'react'
import { useDispatch } from 'react-redux'
import { write_values } from '../../redux/ProgramWrite'

const Table = ({ body, header }) => {
    let dispatch = useDispatch()

    return (
        <div className='programWrite__table'>
            <table >
                <tr>
                    {header.map(item => <th className={item.class}>{item.name}</th>)}
                </tr>
                {body.map(item => {
                    return  <tr className='programWrite__item'>
                                <td>{item.number}</td>
                                <td><input value={item.text} onChange={(e) => dispatch(write_values({index: item.number, text: e.target.value, action: 'text'}))} type="text" placeholder='Описание' /></td>
                                <td><input value={item.sets} onChange={(e) => dispatch(write_values({index: item.number, text: e.target.value, action: 'sets'}))} type="number" placeholder='Подходы' /></td>
                                <td><input value={item.reps} onChange={(e) => dispatch(write_values({index: item.number, text: e.target.value, action: 'reps'}))} type="number" placeholder='Повторения' /></td>
                            </tr>
                })}
            </table>
        </div>
    )
}

export default Table
