import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import InputCheck from '../../Component/components/InputCheck'
import { add_food, change_drink, change_food, change_text } from '../../redux/FoodSlice'
import FilterMore from './FilterMore'

const Filter = () => {
    let filter = useSelector(state => state.food)
    let dispatch = useDispatch()
    let [tab, setTab] = React.useState(false)
    
    function get_url(str) {
        str += `?drink=${filter.drink}&food=${filter.food}&`
        if (filter.search) str += `search=${filter.search}&`
        if (filter.price_minimal) str += `price_min=${filter.price_minimal}&`
        if (filter.price_maximal) str += `price_max=${filter.price_maximal}&`
        if (filter.proteins_minimal) str += `proteins_min=${filter.proteins_minimal}&`
        if (filter.proteins_maximal) str += `proteins_max=${filter.proteins_maximal}&`
        if (filter.fats_minimal) str += `fats_min=${filter.fats_minimal}&`
        if (filter.fats_maximal) str += `fats_max=${filter.fats_maximal}&`
        if (filter.carbohydrates_minimal) str += `carbohydrates_min=${filter.carbohydrates_minimal}&`
        if (filter.carbohydrates_maximal) str += `carbohydrates_max=${filter.carbohydrates_maximal}&`
        return str
    }

    function get_food() {
        if (filter.price_minimal > (filter.price_maximal == false ? 10000 : filter.price_maximal) ||
            filter.proteins_minimal > (filter.proteins_maximal == false ? 10000 : filter.proteins_maximal) ||
            filter.fats_minimal > (filter.fats_maximal == false ? 10000 : filter.fats_maximal) ||
            filter.carbohydrates_minimal > (filter.carbohydrates_maximal == false ? 10000 : filter.carbohydrates_maximal)) 
            return alert('kek')
        axios.get(get_url('http://127.0.0.2:8000/api/food/get_food/'), {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}})
            .then(data => dispatch(add_food(data.data)))
    }

    return (
        <div className='food__filter'>
            <div className='food__filter'>
                <div>
                    <InputCheck value={filter.drink} setValue={() => dispatch(change_drink())} className='food__checkbox' name='drinks'>Напитки</InputCheck>
                </div>
                <div className='ml-20'>
                    <InputCheck value={filter.food} setValue={() => dispatch(change_food())} className='food__checkbox' name='foods'>Еда</InputCheck>
                </div>
            </div>
            <div className='food__filter-text'>
                <input value={filter.search} onChange={(e) => dispatch(change_text(e.target.value))} type="text" />
            </div>  
            <div className='food__price'>
                <button onClick={() => setTab(!tab)}>+ больше фильтров</button>
                {tab && <FilterMore />}
            </div>
            <button onClick={() => get_food()}>Ок</button>
        </div>
    )
}

export default Filter
