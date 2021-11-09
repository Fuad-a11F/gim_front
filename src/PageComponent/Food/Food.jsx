import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Main from '../../Component/components/Main'
import SideBar from '../../Component/components/SideBar'
import WrapperColumns from '../../Component/components/WrapperColumns'
import { add_food } from '../../redux/FoodSlice'
import ActiveFood from './ActiveFood'
import AllFoodProgram from './AllFoodProgram'
import Filter from './Filter'
import FoodButtons from './FoodButtons'
import FoodHave from './FoodHave'
import './Food.css'


const Food = () => {
    let [active, setActive] = React.useState(true)
    let food_array = useSelector(state => state.food.food_array)
    let filter = useSelector(state => state.food)
    let dispatch = useDispatch()

    React.useEffect(() => {
        axios.get('http://127.0.0.2:8000/api/food/get_food/').then(data => dispatch(add_food(data.data)))
    }, [])

    return (
        <WrapperColumns>
            <SideBar>
                <div className='food__bar'>
                    <p>Активная программа питания</p>
                    {active ? <ActiveFood /> : <AllFoodProgram setActive={setActive} />}
                    {active && <FoodButtons setActive={setActive}/>}
                </div>
            </SideBar>
            <Main>
                <div className='food__main'>
                    <Filter />
                    <hr />
                    <div className='food__grid'>
                        {food_array.length == 0 && <p>Ничего не найдено</p>}   
                        {food_array.map(item => <FoodHave key={item.id} food={item}/>)}   
                    </div>
                </div>
            </Main>
        </WrapperColumns>
    )
}

export default Food
