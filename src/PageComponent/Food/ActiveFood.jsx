import axios from 'axios'
import React from 'react'

const ActiveFood = () => {
    let [activeFood, setActiveFood] = React.useState([])

    React.useEffect(() => {
        axios.get('http://127.0.0.2:8000/api/food/get_food_active_program/', {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}})
            .then(data => setActiveFood(data.data))
    }, [])

    return (
        <div className='activeFood__row'>
            {activeFood.length == 0 && <p>Активной программы нет</p>}
            {activeFood.length != 0 && activeFood[0].foodItems.map(item => {
                return (
                    <div key={item.id} className='activeFood__column'>
                        <p>{item.number}) {item.text}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default ActiveFood
