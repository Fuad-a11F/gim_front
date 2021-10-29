import React from 'react'
import { useDispatch } from 'react-redux'
import { write_values } from '../../redux/FoodWrite'

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
                            </tr>
                })}
            </table>
        </div>
    )
}

export default Table
