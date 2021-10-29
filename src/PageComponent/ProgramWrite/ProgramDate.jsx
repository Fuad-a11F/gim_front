import React from 'react'
import { useDispatch } from 'react-redux'
import { write_date } from '../../redux/ProgramWrite'
import TransformDate from '../../TransformDate'

const DAYS = ['01', '02', '03', '04', '05', '06', '07', '08', '09', 10, 11, 12, 13, 14 ,15, 16, 17, 18, 19, 20, 21, 22 ,23, 24, 25, 26 ,27, 28, 29, 30, 31]
const MONTHS = ['01', '02', '03', '04', '05', '06', '07', '08', '09', 10, 11, 12]
const YEARS = [2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030]

const ProgramDate = ({ setCurrent }) => {
    let day = React.useRef()
    let month = React.useRef()
    let year = React.useRef()
    let dispatch = useDispatch()
    
    function set_date() {
        let date = day.current.value + ' ' + month.current.value + ' ' + year.current.value
        dispatch(write_date(date))
        setCurrent(TransformDate(date))
    }

    return (
        <div>
            <select ref={day} name="" id="">
                {YEARS.map(item => {
                    return <option value={item}>{item}</option>
                })}    
            </select>
            <select ref={month} name="" id="">
                {MONTHS.map(item => {
                    return <option value={item}>{item}</option>
                })}
            </select>
            <select ref={year} name="" id="">
                {DAYS.map(item => {
                    return <option value={item}>{item}</option>
                })}
            </select>
            <button onClick={() => set_date()}>Ок</button>
        </div>
    )
}

export default ProgramDate
