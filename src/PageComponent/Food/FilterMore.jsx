import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { change_carbohydrates_maximal, change_carbohydrates_minimal, change_fats_maximal, change_fats_minimal, change_price_maximal, change_price_minimal, change_proteins_maximal, change_proteins_minimal } from '../../redux/FoodSlice'

const FilterDetail = ({ title, value_min, value_max, func_min, func_max }) => {
    let dispatch = useDispatch()

    return (
        <div className="food__price-tab__row">
            <p>{title}</p> 
            <div>
                <input value={value_min} onChange={(e) => dispatch(func_min(e.target.value))} type="number" placeholder='Мин.'/>
                <input value={value_max} onChange={(e) => dispatch(func_max(e.target.value))} type="number" placeholder='Макс.'/>
            </div>
        </div>
    )
}

const FilterMore = () => {
    let filter = useSelector(state => state.food)

    return (
            <div className='food__price-tab'>
                <FilterDetail title='Цена' 
                                value_min={filter.price_minimal} 
                                value_max={filter.price_maximal} 
                                func_min={change_price_minimal}
                                func_max={change_price_maximal} />

                <FilterDetail title='Белки' 
                                value_min={filter.proteins_minimal} 
                                value_max={filter.proteins_maximal} 
                                func_min={change_proteins_minimal}
                                func_max={change_proteins_maximal} />

                <FilterDetail title='Углеводы' 
                                value_min={filter.fats_minimal} 
                                value_max={filter.fats_maximal} 
                                func_min={change_fats_minimal}
                                func_max={change_fats_maximal} />

                <FilterDetail title='Углеводы' 
                                value_min={filter.carbohydrates_minimal} 
                                value_max={filter.carbohydrates_maximal} 
                                func_min={change_carbohydrates_minimal}
                                func_max={change_carbohydrates_maximal} />
            </div>
    )
}

export default FilterMore
